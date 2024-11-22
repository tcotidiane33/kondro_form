import { Head } from '@inertiajs/react';
import Navbar from './Navbar';
import Footer from './Footer';

const PrivateLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Head title="Private Layout" />
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PrivateLayout;


// use case :
// import PrivateLayout from '@/Layouts/PrivateLayout';

// const Dashboard = () => {
//   return (
//     <PrivateLayout>
//       <div>
//         <h1>Dashboard</h1>
//         <p>Welcome to your dashboard!</p>
//       </div>
//     </PrivateLayout>
//   );
// };

// export default Dashboard;
