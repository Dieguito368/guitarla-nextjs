import { Suspense } from 'react';
import Posts from '@/app/ui/components/posts';

export const metadata = {
    title: 'GuitarLA - Blog'
};

const Blog = () => {
    return (
        <main className='w-3/4 mx-auto mb-20'>
            <Suspense fallback='Cargando...'>
                <Posts />
            </Suspense>
        </main>
    )
}

export default Blog;