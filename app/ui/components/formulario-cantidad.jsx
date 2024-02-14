'use client';

import { useState } from 'react';
import { useAppContext } from '@/app/context';
import { toast } from 'react-hot-toast';

const FormularioCantidad = ({ guitar }) => {
    const [ cantidad, setCantidad ] = useState(0);
    const [ error, setError] = useState(false);
    const [ notification, setNotification ] = useState(false);
    const { addCart } = useAppContext();

    const handleSubmit = e => {
        e.preventDefault();

        if(cantidad < 1) {
            setError(true);

            return;
        }

        const { nombre, imagen, precio } = guitar[0].attributes;

        setError(false);

        const guitarraSeleccionada = {
            id: guitar[0].id,
            nombre,
            imagen: imagen.data.attributes.formats.medium.url,
            precio, 
            cantidad
        }

        addCart(guitarraSeleccionada);

        if(!notification) {
            toast.success('¡Agregado al carrito!');

            setNotification(true);

            setTimeout(() => {
                setNotification(false);
            }, 2000);
        }
    }

    return (
        <form 
            className='flex flex-col'
            onSubmit={ handleSubmit }
        >
            <label 
                htmlFor="cantidad"
                className='block mt-2 text-xl'
            >Cantidad</label>
            
            <select 
                defaultValue='default'
                name='cantidad' 
                id='cantidad'
                className='border border-solid border-gray-500 p-2 cursor-pointer w-full mt-2'
                onChange={ e => setCantidad(Number(e.target.value)) }
            >
                <option value='default' disabled>-- Seleccione una opción --</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>
            
            { error && <div className='bg-red-500 text-white text-center p-2 rounded-lg mt-5'>Cantidad no válida</div> }

            <input 
                type="submit" 
                value="Agregar al carrito" 
                className='border-2 border-solid border-black p-3 font-bold uppercase mt-5 cursor-pointer hover:bg-black hover:text-white duration-300'
            />
        </form>
    )
}

export default FormularioCantidad;
