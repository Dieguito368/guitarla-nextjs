'use client';

import Image from 'next/image';
import Link from 'next/link';
import NavLinks from '@/app/ui/components/nav-links';
import stylesHeader from '@/app/ui/Header.module.css';
import logo from '@/public/img/logo.svg';
import imagenCarrito from '@/public/img/carrito.png';
import { usePathname } from 'next/navigation';

const Header = () => {  
    const pathname = usePathname(); 

    return (
        <header className={ `${stylesHeader.header} py-14 bg-center`}>
            <div className='w-3/4 m-auto flex flex-col justify-between items-center md:flex-row gap-10'>
                <Link href='/'>
                    <Image className='w-full h-auto'
                        src={ logo }
                        width={ 0 }
                        height={ 0 }
                        alt='Logotipo GuitarLA'
                    />
                </Link>

                <nav className='flex gap-5 flex-wrap md:m-0 justify-around'>
                    <NavLinks />

                    <Link 
                        href='/carrito' 
                        className= { `
                                ${pathname === '/carrito' && 'bg-amber-500' }
                                text-white rounded-xl px-5 py-2 hover:bg-amber-500 duration-300 flex items-center justify-center w-auto
                            ` }
                    >
                        <Image className='w-7 h-auto'
                            src={ imagenCarrito }
                            width={ 30 }
                            height={ 30 }
                            alt='Imagen carrito'
                        />
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;