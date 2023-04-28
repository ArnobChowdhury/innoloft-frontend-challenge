import { Outlet } from "react-router-dom";
import { Menu, HeaderMenu } from "../composites";
import { Search } from "../components";
import { Logo } from "../icons";

const Naivgation = () => {
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
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Naivgation;
