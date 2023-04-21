import { Map, Address, User } from "../components";
import { OfferedByPropsFromProduct } from "../types";

interface OfferedByProps extends OfferedByPropsFromProduct {
  withMap?: boolean;
}

export const OfferedBy = ({ company, user, withMap }: OfferedByProps) => {
  return (
    <div className="p-lg border-l border-color-gray-light">
      <h2 className="mb-lg max-w-[200px] w-[200px]">Offered by</h2>
      <img src={company.logo} className="mb-2.5" />
      <User company={company} user={user} />
      <Address company={company} />
      {withMap && (
        <div>
          <Map
            lat={Number(company.address.latitude)}
            lng={Number(company.address.longitude)}
          />
        </div>
      )}
    </div>
  );
};
