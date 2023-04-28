import { ProductProps } from "../types";

type UserProps = Pick<ProductProps, "user" | "company"> & { isImgBigger?: boolean };

export const User = ({ user, company, isImgBigger = false }: UserProps) => {
  let sizeOfImg = "60px";
  if (isImgBigger) {
    sizeOfImg = "70px";
  }
  return (
    <div className='flex mb-lg items-center'>
      <div
        className={`h-[${sizeOfImg}] w-[${sizeOfImg}] min-w-[${sizeOfImg}] mr-2 rounded-full overflow-hidden`}
      >
        <img src={user.profilePicture} className='h-full' />
      </div>
      <div className='text-sm'>
        <div className='text-color-gray-dark'>
          {user.firstName} {user.lastName}
        </div>
        <div>{company.name}</div>
      </div>
    </div>
  );
};
