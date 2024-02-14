import NavLinks from "./nav-links";

const Footer = () => {
    return (
        <footer className='bg-black'>
            <div className='w-3/4 py-10 m-auto flex flex-col md:justify-between md:flex-row gap-5 items-center'>
                <nav className='flex flex-col gap-5 md:flex-row'>
                    <NavLinks />
                </nav>

                <p className='text-white text-xl text-center'>Todos los derechos reservados { new Date().getFullYear() }</p>
            </div>
        </footer>
    )
}

export default Footer;