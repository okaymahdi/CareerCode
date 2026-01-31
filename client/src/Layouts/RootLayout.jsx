import { Outlet } from 'react-router';
import { Footer, NavBar } from '../Components/Index';

const RootLayout = () => {
  return (
    <div>
      {/* Header */}
      <NavBar />
      {/* Main Outlet */}
      <div className='min-h-[calc(100vh-306px)]'>
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RootLayout;
