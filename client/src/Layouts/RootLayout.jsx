import { Outlet } from 'react-router';
import { Footer, NavBar } from '../Components/Index';

/** 📱🖥️ দেখতে কেমন হবে
 *
 *|Screen    | Width
 * --------- | -----------------|
 * 📱 Mobile  | 94%
 * 💻 Tablet | 90%
 * 💻 Laptop | 88%
 * 🖥️ Large monitor | 85% (max 7xl)
 */

const RootLayout = () => {
  return (
    <div
      className='
    w-[94%]
    sm:w-[92%]
    md:w-[90%]
    lg:w-[88%]
    xl:w-[85%]
    max-w-7xl
    mx-auto
  '
    >
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
