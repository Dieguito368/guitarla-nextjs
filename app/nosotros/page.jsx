import Image from 'next/image';
import imagen from '@/public/img/nosotros.jpg';

export const metadata = {
    title: 'GuitarLA - Nosotros'
};

const Nosotros = () => {
    return (
        <main className='w-3/4 mx-auto mb-20'>
            <h1 className='heading'>Nosotros</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10'>
                <Image className='w-full'
                    src={ imagen }
                    width={ 400 }
                    height={ 300 }
                    alt='Imagen sobre nosotros'
                />
                
                <div className='text-justify text-lg'>
                    <p>
                        ¡Hola, melómanos y amantes de las guitarras eléctricas! En GuitarLA, somos un equipo de entusiastas de la música y estudiantes de Ingeniería en Sistemas Computacionales con una misión común: fusionar nuestra pasión por la tecnología con el arte de la música. Desde el vibrante Estado de México, México, hemos creado este espacio virtual para que la magia de la música y la innovación se encuentren.</p>

                    <p className='mt-5'>
                        En GuitarLA, nos comprometemos a proporcionar a nuestros clientes una experiencia única. Nuestra cuidadosa selección de guitarras eléctricas está diseñada para satisfacer las necesidades de músicos de todos los niveles. Nos enorgullece ofrecer instrumentos de alta calidad que no solo emiten sonidos asombrosos, sino que también se convierten en una extensión de la creatividad de cada músico. Además, nuestra plataforma ha sido meticulosamente diseñada para brindar una experiencia de compra sin complicaciones, con asesoramiento personalizado y una interfaz intuitiva.</p>
                </div>
            </div>
        </main>
    )
}

export default Nosotros;
