import { Head } from '@inertiajs/react';
import Navbar from './Navbar';
import Footer from './Footer';

const PublicLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50" >
      <Head title="Public Layout" />
      <Navbar />
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
