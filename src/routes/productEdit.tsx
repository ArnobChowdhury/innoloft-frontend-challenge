import { useEffect } from "react";
import { OfferedBy } from "../composites";
import {
  ItemDetailWithIcon,
  MultipleChipsInput,
  Text,
  Select,
  Button,
} from "../components";
import { fetchProduct } from "../store/thunks/product";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useState } from "react";
import { Knight, Settings, Currency, Clock, Check } from "../icons";
import ReactQuill from "react-quill";
import { qlModules, qlFormats, trlSelectOptions } from "../constants";
import "react-quill/dist/quill.snow.css";

export const productEdit = () => {
  const dispatch = useAppDispatch();
  const { product } = useAppSelector((state) => state.product);
  const [qlValue, setQlValue] = useState("");
  const [businessModels, setBusinessModels] = useState<string>("");
  const [trlValue, setTrlValue] = useState<string>("");

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  return (
    <div className="space-y-5">
      {product && (
        <div className="grid grid-cols-3 space-y-lg">
          <div className="grid grid-cols-3 col-span-3 bg-white border border-color-gray-light rounded-md">
            <div className="col-span-2">
              <div className="h-[300px] flex justify-center">
                <img src={product.picture} className="h-full" />
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
            <OfferedBy company={product.company} user={product.user} />
          </div>
          <div className="col-span-3 p-lg border border-color-gray-light bg-white rounded-md space-y-lg">
            <h2>Video</h2>
            <div className="flex">
              <input
                type="url"
                className="grow mr-2.5"
                placeholder="Add a youtube or vimeo link"
              />
              <Button icon={<Check />}>Save</Button>
            </div>
          </div>
          <div className="col-span-3 p-lg border border-color-gray-light bg-white rounded-md space-y-lg">
            <h2>Offer details</h2>
            <div className="grid grid-cols-2">
              <ItemDetailWithIcon
                icon={<Settings />}
                items={
                  <>
                    <Text text="Technology" />
                    <input
                      type="text"
                      className="w-full"
                      placeholder="e.g. Software"
                    />
                  </>
                }
                tailWindClasses="grow mr-1"
              />
              <ItemDetailWithIcon
                icon={<Knight />}
                items={
                  <MultipleChipsInput
                    label="Business Models"
                    value={businessModels}
                    onValueChange={(val) => {
                      setBusinessModels(val);
                    }}
                  />
                }
                tailWindClasses="grow ml-1"
              />
            </div>
            <div className="grid grid-cols-2">
              <ItemDetailWithIcon
                icon={<Clock />}
                items={
                  <>
                    <Text text="TRL" />
                    <Select
                      value=""
                      options={trlSelectOptions}
                      onChange={() => {}}
                    />
                  </>
                }
                tailWindClasses="grow mr-1"
              />
              <ItemDetailWithIcon
                icon={<Currency />}
                items={
                  <>
                    <Text text="Costs" />
                    <input type="text" className="w-full" placeholder="" />
                  </>
                }
                tailWindClasses="grow ml-1"
              />
            </div>
            <div className="flex justify-end">
              <Button icon={<Check />}>Save</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default productEdit;
