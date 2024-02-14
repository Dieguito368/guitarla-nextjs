import Guitar from './guitar';
import { getGuitars } from '@/app/lib/data'; 

const Guitars = async () => {
    const guitars = await getGuitars();

    return (
        <>
            <h1 className='heading'>Colección de guitarras</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
                {
                    guitars.map(guitar => (
                        <Guitar key={ guitar.id } guitar={ guitar } />
                    ))
                }
            </div>
        </>
    )
}

export default Guitars
