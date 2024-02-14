import { getCourse } from '@/app/lib/data'; 

const Course = async () => {
    const course = await getCourse();

    const { titulo, imagen, contenido } = course.attributes; 

    return (
        <section className='p-24 mt-16 bg-no-repeat bg-cover'
            style={{ backgroundImage: `linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${imagen.data.attributes.url})` }}
        >
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='col-start-2'>
                    <h2 className='heading heading-curso'>{ titulo }</h2>
                    <p className='text-white text-xl text-center'>{ contenido[0].children[0].text }</p>
                </div>
            </div>
        </section>
    )
}

export default Course;