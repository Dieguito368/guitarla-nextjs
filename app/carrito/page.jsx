'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useAppContext } from '@/app/context';
import { formatearCantidad } from '@/app/lib/utils/helpers';
import toast from 'react-hot-toast';

const Carrito = () => {
    const [ total, setTotal ] = useState(0);
    const [ notification, setNotification ] = useState(false);

    const { cart, updateCuantity, removeProduct } = useAppContext();

    useEffect(() => {
        const totalCart = cart.reduce( (total, product) => total + (product.precio * product.cantidad), 0);

        setTotal(totalCart);
    }, [cart]);

    const handleRemove = id => {
        if(!notification) {
            removeProduct(id);
            toast.success('¡Eliminado del carrito!');

            setNotification(true);

            setTimeout(() => {
                setNotification(false);
            }, 2000);
        }
    }

    return (
        <main className='w-3/4 mx-auto mb-20'>
            <h1 className='heading'>Carrito</h1>

            <div className='grid md:grid-cols-2 items-start gap-10'>
                <div className='p-5 pb-0'>
                    <h2 className='font-bold text-3xl'>{ cart.length ? 'Articulos' : 'No hay articulos' }</h2>

                    { cart.length > 0 &&
                        cart.map(product => (
                            <div 
                                key={ product.id }
                                className='flex items-center gap-5 border-b last-of-type:border-0 relative py-5 last-of-type:pb-0'
                            >
                                <div>
                                    <Image 
                                        src={ product.imagen }
                                        width={ 100 }
                                        height={ 100 }
                                        alt={ `Guitarra ${product.nombre}` }
                                    />
                                </div>

                                <div className='text-xl flex-1'>
                                    <p className='text-4xl font-bold mb-2'>{ product.nombre }</p>
                                    <div className='my-3'>
                                        <label htmlFor='cantidad'>Cantidad:</label>
                                        <select 
                                            id='cantidad' 
                                            defaultValue={ product.cantidad }
                                            className='border border-black w-full mt-1 p-2 text-center cursor-pointer'
                                            onChange={ e => updateCuantity({ id: product.id, cantidad: Number(e.target.value) }) }
                                        >
                                            <option value='1'>1</option>
                                            <option value='2'>2</option>
                                            <option value='3'>3</option>
                                            <option value='4'>4</option>
                                            <option value='5'>5</option>
                                        </select>
                                    </div>
                                    <p className='font-black'>{ formatearCantidad(product.precio) } MXN</p>
                                    <p>Subtotal: <span>{ formatearCantidad(product.cantidad * product.precio) } MXN</span></p>
                                </div>

                                <button 
                                    type='button'
                                    className='absolute top-2 right-0 text-2xl font-bold hover:text-red-500 duration-300'
                                    onClick={ () => handleRemove(product.id) }
                                >X</button>
                            </div>
                        ))
                    }
                </div>

                {
                    cart?.length > 0 && (
                        <aside className='bg-gray-100 p-5 sticky top-0 rounded'>
                            <h2 className='font-bold text-3xl'>Resumen del pedido</h2>
                            <p className='text-xl mt-2'>Total a pagar: <span>{ formatearCantidad(total) } MXN</span></p>
                        </aside>
                    )
                }
            </div>
        </main>
    )
}

export default Carrito
