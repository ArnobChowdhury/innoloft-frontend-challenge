import { useEffect } from "react";
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
import { trlSelectOptions } from "../constants";
import "react-quill/dist/quill.snow.css";
import { EditProductInfo, EditProductVideo } from "../composites";

export const productEdit = () => {
  const dispatch = useAppDispatch();
  const { product } = useAppSelector((state) => state.product);
  const [businessModels, setBusinessModels] = useState<string>("");
  const [trlValue, setTrlValue] = useState<string>("");

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  return (
    <div className="space-y-5">
      {product && (
        <div className="grid grid-cols-3 space-y-lg">
          <EditProductInfo
            picture={product.picture}
            company={product.company}
            user={product.user}
          />
          <EditProductVideo video={product.video} />
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
