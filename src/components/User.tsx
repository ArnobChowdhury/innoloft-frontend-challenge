import { ProductProps } from "../types";

type UserProps = Pick<ProductProps, "user" | "company">;

export const User = ({ user, company }: UserProps) => {
  return (
    <div className='flex mb-lg'>
      <div className='h-[60px] w-[60px] min-w-[60px] mr-2 rounded-full overflow-hidden'>
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
