import { Outlet } from "react-router-dom";
import { Menu } from "../composites";
import { Logo } from "../icons";

const Naivgation = () => {
  return (
    <div>
      <nav className='bg-gray-500'>
        <div className='container mx-auto bg-red-100 px-10 flex'>
          <div className='basis-1/4 flex items-center'>
            <Logo />
          </div>
          <div className='basis-3/4 bg-green-500 py-4 flex justify-between'>
            <input
              placeholder='Enter interests, keyword, company name, etc.'
              className='bg-red-800 w-1/3 rounded border-2 border-black'
            />
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
