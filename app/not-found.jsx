import Link from "next/link";

export const metadata = {
    title: 'GuitarLA - Página no encontrada'
}

const notFound = () => {
    return (
        <div className='w-3/4 mx-auto text-center my-20'>
            <h1 className='font-bold text-8xl flex items-center justify-center gap-5'>
                404
                <span className='text-3xl font-normal'>Página no encontrada</span>
            </h1>
    
            <Link 
                href='/'
                className='inline-block text-lg text-amber-500 border-2 font-bold border-solid border-amber-500 w-auto p-3 mt-3 hover:bg-amber-500 hover:text-white uppercase duration-200'
            >Regresar a Inicio</Link>
        </div>
    )
}

export default notFound;
