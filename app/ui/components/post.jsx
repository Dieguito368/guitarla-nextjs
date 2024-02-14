import Image from 'next/image';
import Link from 'next/link';
import { formatearFecha } from '@/app/lib/utils/helpers';

const Post = ({ post }) => {
    const { titulo, imagen, contenido, publishedAt, url } = post;

    return (
        <article>
            <Image 
                src={ imagen.data.attributes.formats.medium.url }
                width={ 600 }
                height={ 400 }
                alt={ `Imagen Blog - ${titulo}`}
            />

            <div className='text-lg'>
                <h3 className='font-bold text-3xl my-3'>{ titulo }</h3>
                <p className='mb-3'>{ formatearFecha(publishedAt) }</p>
                <p className='text-justify mb-3 line-clamp-4'>{ contenido }</p>
                <Link 
                    href={ `/posts/${url}` }
                    className='bg-black text-white inline-block w-full uppercase p-3 text-center font-bold hover:'
                >Leer entrada</Link>
            </div>

        </article>
    )
}

export default Post;