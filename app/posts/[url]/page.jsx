import Image from 'next/image';
import { getPost, getTitlePost } from '@/app/lib/data';
import { formatearFecha } from '@/app/lib/utils/helpers';

export const generateMetadata = async ({ params }) => {
    const { url } = params;

    const title = await getTitlePost(url);

    return {
        title: `GuitarLA - ${title}`
    }
}

const Post = async ({ params }) => {
    const { url } = params;

    const post = await getPost(url);

    const { titulo, imagen, contenido, publishedAt } = post[0].attributes;

    return (
        <article className='w-3/4 mx-auto my-24 flex flex-col items-center'>
            <Image 
                src={ imagen.data.attributes.formats.medium.url }
                width={ 800 }
                height={ 400 }
                alt={ `Imagen Blog - ${titulo}`}
            />

            <div className='text-lg'>
                <h3 className='font-bold text-3xl my-3'>{ titulo }</h3>
                <p className='mb-3'>{ formatearFecha(publishedAt) }</p>
                <p className='text-justify mb-3 whitespace-pre-wrap'>{ contenido }</p>
            </div>

        </article>
    )
}

export default Post;
