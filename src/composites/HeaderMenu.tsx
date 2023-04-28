import { Notification, Messenger, DownArrow } from "../icons";
import { useAppSelector } from "../hooks";

export const HeaderMenu = () => {
  const { product } = useAppSelector((state) => state.product);

  return (
    <div className='flex space-x-lg items-center'>
      <Notification />{" "}
      <div className='flex items-center text-white space-x-2'>
        <span>EN</span> <DownArrow isLight />
      </div>
      <Messenger />
      <div className='flex items-center space-x-2'>
        <div className='h-6 w-6 rounded-full overflow-hidden border-white border-2'>
          <img src={product?.user.profilePicture} />
        </div>
        <DownArrow isLight />
      </div>
    </div>
  );
};
