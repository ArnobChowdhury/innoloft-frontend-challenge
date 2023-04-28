import { Outlet, useLocation, Link } from "react-router-dom";
import { Menu, HeaderMenu } from "../composites";
import { Search } from "../components";
import { Logo } from "../icons";

const HOME = "/";

const Main = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <nav className='bg-color-primary'>
        <div className='container mx-auto px-lg lg:px-10 flex'>
          <div className='basis-1/4 py-3 flex items-center'>
            <Logo />
          </div>
          <div className='hidden basis-3/4 py-3 lg:flex justify-between'>
            <Search />
            <HeaderMenu />
          </div>
        </div>
      </nav>
      <div className='lg:grid lg:grid-cols-4 container mx-auto px-lg lg:px-10 my-lg'>
        <div className='hidden lg:block'>
          <Menu />
        </div>
        <div className='lg:col-span-3 '>
          {pathname === HOME && (
            <div className='flex space-x-lg'>
              <Link to='/product' className='btn btn_primary opacity-100'>
                Go to product page
              </Link>
              <Link to='/product/edit' className='btn btn_primary opacity-100'>
                Go to edit product page
              </Link>
            </div>
          )}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
