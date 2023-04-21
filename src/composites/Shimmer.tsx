export const Shimmer = () => {
  return (
    <div className="col-span-3 grid grid-cols-3 rounded-md bg-white border border-color-gray-light">
      <div className="col-span-2 border-solid">
        <div className="h-[300px] shimmer"></div>
        <div className="p-lg">
          <div className="mb-2.5 shimmer rounded-md h-[30px]"></div>
          <div className="shimmer h-[200px] rounded-md"></div>
        </div>
      </div>

      <div className="p-lg border-l border-color-gray-light space-y-lg">
        <div className="shimmer h-5 rounded-md"></div>
        <div className="h-12 shimmer rounded-md"></div>
        <div className="flex">
          <div className="w-16 h-16 mr-2.5 rounded-full shimmer"></div>
          <div className="h-10 grow shimmer rounded-md"></div>
        </div>
        <div className="shimmer rounded-md h-12"></div>
        <div className="shimmer rounded-md h-[200px]"></div>
        <div></div>
      </div>
    </div>
  );
};
