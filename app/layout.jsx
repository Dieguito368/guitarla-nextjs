import Header from '@/app/ui/components/header';
import { AppContext } from './context';
import Footer from '@/app/ui/components/footer';
import '@/app/ui/globals.css';
import { Toaster } from 'react-hot-toast';
import { barlowCondensed } from '@/app/ui/fonts';

export const metadata = {
    title: 'GuitarLA - Inicio',
    description: 'Venta de guitarras y blog de música'
};

export default function RootLayout({ children }) {
    return (
        <html lang='es'>
            <body className={ barlowCondensed.className }>
                <Toaster />
                
                <Header />

                <AppContext>
                    { children }
                </AppContext>
                
                <Footer />
            </body>
        </html>
    );
}
