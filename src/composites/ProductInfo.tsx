import { Image } from "../components";
import { OfferedBy } from "./OfferedBy";
import { ProductInfoProps } from "../types";
import DOMPurify from "isomorphic-dompurify";

export const ProductInfo = ({ picture, description, name, company, user }: ProductInfoProps) => {
  return (
    <div className='col-span-3 grid grid-cols-3 rounded-md bg-white border border-color-gray-light overflow-hidden'>
      <div className='col-span-2 border-solid'>
        <Image picture={picture} />
        <div className='p-lg'>
          <h1 className='mb-2.5'>{name}</h1>
          <div
            className='whitespace-pre-wrap'
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(description),
            }}
          />
        </div>
      </div>
      <OfferedBy company={company} user={user} withMap />
    </div>
  );
};
