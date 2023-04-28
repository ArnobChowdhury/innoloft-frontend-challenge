import { PatentIcon, Bin } from "../icons";

export const Image = ({ picture, isEdit = false }: { picture: string; isEdit?: boolean }) => {
  return (
    <div className='h-[300px] flex justify-center relative'>
      <img src={picture} />
      <div className='absolute top-0 left-0 flex rounded-tl-md rounded-br-md overflow-hidden shadow-md bg-white'>
        <div className='bg-color-primary p-3 rounded-br-md'>
          <PatentIcon />
        </div>
        <div className='px-3 flex items-center text-base font-semibold text-color-gray-dark'>
          Patent
        </div>
      </div>
      {isEdit && (
        <div className='absolute top-0 right-0 p-3 bg-white shadow-md rounded-bl-md'>
          <Bin />
        </div>
      )}
    </div>
  );
};
