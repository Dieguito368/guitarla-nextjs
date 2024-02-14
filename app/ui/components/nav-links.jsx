'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
    const links = [
        { nombre: 'Inicio', href: '/' },
        { nombre: 'Nosotros', href: '/nosotros' },
        { nombre: 'Blog', href: '/blog' },
        { nombre: 'Tienda', href: '/tienda' }
    ];
    
    const pathname = usePathname();
    
    return (
        <>
            {
                links.map(link => (
                    <Link 
                        key={ link.nombre } 
                        href={ link.href } 
                        className={ `
                            ${pathname === link.href && 'bg-amber-500' }
                            text-white rounded-xl px-5 py-2 hover:bg-amber-500 duration-300 uppercase text-xl text-center flex items-center justify-center w-auto
                        ` }
                    >
                        { link.nombre }
                    </Link>
                ))
            }
        </>
    )
}

export default NavLinks;