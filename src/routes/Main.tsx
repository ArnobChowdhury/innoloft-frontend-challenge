import { Outlet } from "react-router-dom";
import { Menu, HeaderMenu } from "../composites";
import { Search } from "../components";
import { Logo } from "../icons";

const Naivgation = () => {
  return (
    <div>
      <nav className='bg-color-primary'>
        <div className='container mx-auto px-10 py-1 flex'>
          <div className='basis-1/4 flex items-center'>
            <Logo />
          </div>
          <div className='basis-3/4 py-2 flex justify-between'>
            <Search />
            <HeaderMenu />
          </div>
        </div>
      </nav>
      <div className='grid grid-cols-4 container mx-auto px-10 my-lg'>
        <Menu />
        <div className='col-span-3 '>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Naivgation;
