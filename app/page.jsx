import { Suspense } from 'react';
import Guitars from '@/app/ui/components/guitars';
import Course from '@/app/ui/components/course';
import Posts from '@/app/ui/components/posts';

export default function Home() {
    return (
        <>
            <main className='w-3/4 mx-auto mb-16'>
                <Suspense fallback='cargando...'>
                    <Guitars />
                </Suspense>
            </main>

            <Suspense fallback='cargando...'>
                <Course />
            </Suspense>

            <section className='w-3/4 mx-auto mb-20'>
                <Suspense fallback='cargando...'> 
                    <Posts />
                </Suspense>
            </section>
        </>
    );
}
