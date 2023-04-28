import { SearchIcon } from "../icons";
export const Search = () => {
  return (
    <div className='w-[500px] relative'>
      <input
        placeholder='Enter interests, keyword, company name, etc.'
        className='w-full rounded-md text-xs leading-4'
      />
      <div className='absolute top-1/2 right-3 -translate-y-1/2'>
        <SearchIcon />
      </div>
    </div>
  );
};
