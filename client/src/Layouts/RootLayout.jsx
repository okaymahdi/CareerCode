import { Outlet } from 'react-router';
import { Footer, NavBar } from '../Components/Index';

const RootLayout = () => {
  return (
    <div>
      RootLayout
      {/* Header */}
      <NavBar />
      {/* Main Outlet */}
      <div className='min-h-[calc(100vh-600px)] mx-auto'>
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RootLayout;
