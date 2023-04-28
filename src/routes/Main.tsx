import { Outlet } from "react-router-dom";
import { Menu } from "../composites";
import { Search } from "../components";
import { Logo } from "../icons";

const Naivgation = () => {
  return (
    <div>
      <nav className='bg-color-primary'>
        <div className='container mx-auto px-10 flex'>
          <div className='basis-1/4 flex items-center'>
            <Logo />
          </div>
          <div className='basis-3/4 py-4 flex justify-between'>
            <Search />
            <div className=''>Icons</div>
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
