import { Map, Address, User } from "../components";
import { ProductProps } from "../types";
import DOMPurify from "isomorphic-dompurify";

type ProductInfoProps = Pick<
  ProductProps,
  "picture" | "description" | "name" | "company" | "user"
>;

export const ProductInfo = ({
  picture,
  description,
  name,
  company,
  user,
}: ProductInfoProps) => {
  return (
    <div className="col-span-3 grid grid-cols-3 rounded-lg bg-white border border-color-gray-light overflow-hidden">
      <div className="col-span-2 border-solid">
        <div className="h-[300px] flex justify-center">
          <img src={picture} />
        </div>
        <div className="p-lg">
          <h1 className="mb-2.5">{name}</h1>
          <div
            className="whitespace-pre-wrap"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(description),
            }}
          />
        </div>
      </div>
      <div className="p-lg border-l border-color-gray-light">
        <h2 className="mb-lg">Offered by</h2>
        <img src={company.logo} className="max-w-[200px] mb-2.5" />
        <User company={company} user={user} />
        <Address company={company} />
        <div>
          <Map
            lat={Number(company.address.latitude)}
            lng={Number(company.address.longitude)}
          />
        </div>
      </div>
    </div>
  );
};
