import Image from 'next/image';
import FormularioCantidad from '@/app/ui/components/formulario-cantidad';
import { getGuitar, getNameGuitar } from '@/app/lib/data';
import { formatearCantidad } from '@/app/lib/utils/helpers';

export const generateMetadata = async ({ params }) => {
    const { url } = params;

    const name = await getNameGuitar(url);
    
    return {
        title: `GuitarLA - Guitarra ${name}`
    }
}

const Guitarra = async ({ params }) => {
    const { url } = params;

    const guitar = await getGuitar(url);

    const { nombre, descripcion, imagen, precio  } = guitar[0].attributes;

    return (
        <main className='w-3/4 grid grid-cols-2 mx-auto mb-12 mt-16'>
            <div className='flex justify-center'>
                <Image className='w-auto'
                    src={ imagen.data.attributes.url }
                    width={ 150 }
                    height={ 100 }
                    alt= { `Guitarra ${nombre}` }   
                />
            </div>

            <div className='text-lg justify-center flex flex-col'>
                <h3 className='font-bold text-3xl mb-3 uppercase'>{ nombre }</h3>
                <p className='text-justify'>{ descripcion[0].children[0].text }</p>
                <p className='text-2xl font-bold mt-2'>{ formatearCantidad(precio) } MXN</p>
                
                <FormularioCantidad guitar={ guitar }/>
            </div>

    </main>
    )
}

export default Guitarra;