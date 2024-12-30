import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { usePage, Head } from '@inertiajs/react';
import { PageProps } from '@inertiajs/inertia';

interface FlashProps {
    success?: string;
    error?: string;
}

interface ExtendedPageProps extends PageProps {
    auth: any;
    role: any;
    identity: any;
    flash?: FlashProps; // Rendre flash optionnel
}

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
    const { flash } = usePage<ExtendedPageProps>().props;

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Head title="Public Layout" />
            <Navbar />
            {flash?.success && (
                <div className="bg-green-500 text-white p-4 rounded mb-4">
                    {flash.success}
                </div>
            )}
            {flash?.error && (
                <div className="bg-red-500 text-white p-4 rounded mb-4">
                    {flash.error}
                </div>
            )}
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default PublicLayout;


// use case :
// import PublicLayout from '@/Layouts/PublicLayout';

// const Home = () => {
//   return (
//     <PublicLayout>
//       <div>
//         <h1>Welcome to our website!</h1>
//         <p>Explore our content and enjoy your stay.</p>
//       </div>
//     </PublicLayout>
//   );
// };
