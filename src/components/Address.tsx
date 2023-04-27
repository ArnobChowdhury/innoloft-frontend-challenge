import { ProductProps } from "../types";
import { Location as LocationIcon } from "../icons";

export const Address = ({ company }: Pick<ProductProps, "company">) => {
  return (
    <div className='flex'>
      <LocationIcon />
      <div className='leading-4 ml-2 mb-2'>
        <div>
          {company.address.street} {company.address.house},
        </div>
        <div>
          {company.address.zipCode} {company.address.city.name} {company.address.country.name}
        </div>
      </div>
    </div>
  );
};
