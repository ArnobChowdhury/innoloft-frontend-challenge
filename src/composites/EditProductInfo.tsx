import { useState } from "react";
import { Button } from "../components";
import { Check } from "../icons";
import { OfferedBy } from "./";
import { qlFormats, qlModules } from "../constants";
import { ProductProps } from "../types";
import ReactQuill from "react-quill";

export const EditProductInfo = ({
  picture,
  company,
  user,
}: Pick<ProductProps, "picture" | "company" | "user">) => {
  const [qlValue, setQlValue] = useState("");

  return (
    <div className="grid grid-cols-3 col-span-3 bg-white border border-color-gray-light rounded-md">
      <div className="col-span-2">
        <div className="h-[300px] flex justify-center">
          <img src={picture} className="h-full" />
        </div>
        <div className="p-lg space-y-2.5">
          <input
            type="text"
            className="w-full font-semibold text-base text-color-gray-dark"
          />
          <div>
            <ReactQuill
              theme="snow"
              value={qlValue}
              onChange={setQlValue}
              formats={qlFormats}
              modules={qlModules}
            />
          </div>
          <div className="flex justify-end space-x-2.5">
            <Button variant="secondary">Cancel</Button>
            <Button icon={<Check />}>Save</Button>
          </div>
        </div>
      </div>
      <OfferedBy company={company} user={user} />
    </div>
  );
};
