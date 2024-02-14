import Image from 'next/image';
import Link from 'next/link';
import { formatearCantidad } from '@/app/lib/utils/helpers';

const Guitar = ({ guitar }) => {
    const { nombre, imagen, descripcion, precio, url } = guitar.attributes;

    return (
        <div className='grid grid-cols-2'>
            <div className='flex justify-center'>
                <Image className='w-32 h-auto'
                    src={ imagen.data.attributes.formats.medium.url }
                    width={ 150 }
                    height={ 150 }
                    alt= { `Guitarra ${nombre}` }   
                />
            </div>

            <div className='text-lg justify-center flex flex-col'>
                <h3 className='font-bold text-3xl mb-3 uppercase'>{ nombre }</h3>
                <p className='text-justify line-clamp-4'>{ descripcion[0].children[0].text }</p>
                <p className='text-2xl font-bold mt-2'>{ formatearCantidad(precio) } MXN</p>

                <Link 
                    href={ `/guitarras/${url}` } 
                    className='border border-black border-solid font-bold p-2 rounded-lg block text-center text-lg mt-5 uppercase hover:bg-black hover:text-white duration-200'
                >
                    Ver guitarra
                </Link>
            </div>
        </div>
    )
}

export default Guitar;