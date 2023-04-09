import { Outlet } from "react-router-dom";

const Naivgation = () => {
  return (
    <div className="bg-gray-50 text-color-gray-default">
      <nav className="bg-gray-500">
        <div className="container mx-auto bg-red-100 px-10 flex">
          <div className="basis-1/4">Logo</div>
          <div className="basis-3/4 bg-green-500 py-4 flex justify-between">
            <input
              placeholder="Enter interests, keyword, company name, etc."
              className="bg-red-800 w-1/3 rounded border-2 border-black"
            />
            <div className="">Icons</div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Naivgation;
