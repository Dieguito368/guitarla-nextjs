import { Suspense } from 'react';
import Guitars from '../ui/components/guitars';

export const metadata = {
    title: 'GuitarLA - Tienda'
};

const Tienda = () => {
    return (
        <main className='w-3/4 mx-auto mb-16'>
            <Suspense fallback='Cargando...'>
                <Guitars />
            </Suspense>
        </main>
    )
}

export default Tienda;