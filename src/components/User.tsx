import { ProductProps } from "../types";

type UserProps = Pick<ProductProps, "user" | "company"> & { isImgBigger?: boolean };

export const User = ({ user, company, isImgBigger = false }: UserProps) => {
  let imgSizeClassNames = `h-[60px] w-[60px] min-w-[60px]`;
  if (isImgBigger) {
    imgSizeClassNames = `h-[70px] w-[70px] min-w-[70px]`;
  }

  return (
    <div className='flex mb-lg items-center'>
      <div className={`mr-2 rounded-full overflow-hidden ${imgSizeClassNames}`}>
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
