import { Link } from "react-router-dom";
import { RightArrow, Home } from "../icons";

export const BreadCrumb = ({ location }: { location: string }) => {
  const crumbs = location.split("/");
  let currentLocation = "";

  const crumbsArray = crumbs
    .filter((location) => location !== "")
    .map((location, index, crumbs) => {
      const lastLocation = crumbs.length - 1 === index;
      currentLocation += `/${location}`;
      return (
        <div key={`${index}-${location}`} className='flex items-center mr-2'>
          <Link to={currentLocation} className='mr-2'>
            {location}
          </Link>
          {!lastLocation && <RightArrow />}
        </div>
      );
    });

  return (
    <div className='flex items-center'>
      <div className='mr-2'>
        <Link to='/'>
          <Home />
        </Link>
      </div>
      {crumbsArray.length > 0 && (
        <div className='mr-2'>
          <RightArrow />
        </div>
      )}
      {crumbsArray}
    </div>
  );
};
