import { Map, Address, User } from "../components";
import { OfferedByPropsFromProduct } from "../types";
import { useAppSelector } from "../hooks";

interface OfferedByProps extends OfferedByPropsFromProduct {
  withMap?: boolean;
}

export const OfferedBy = ({ company, user, withMap }: OfferedByProps) => {
  const { hasUserSection } = useAppSelector((state) => state.appConfig);
  return (
    <div className='p-lg'>
      <h2>Offered by</h2>
      <img src={company.logo} className='mb-2.5 max-w-[400px] lg:w-full lg:max-w-[250px]' />
      {hasUserSection && <User company={company} user={user} />}
      <Address company={company} />
      {withMap && (
        <div>
          <Map lat={Number(company.address.latitude)} lng={Number(company.address.longitude)} />
        </div>
      )}
    </div>
  );
};
