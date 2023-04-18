// import { useState } from "react";
import { useForm } from "react-hook-form";
import { ItemDetailWithIcon } from "../components";
import { Text, Button, Select, MultipleChipsInput } from "../components";
import { Settings, Knight, Clock, Check, Currency } from "../icons";
import { trlSelectOptions } from "../constants";
import { useEffect } from "react";

export const EditOfferDetails = () => {
  // const [businessModels, setBusinessModels] = useState<string>("");
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      businessModels: "",
    },
  });
  // const onSubmit = (data) => console.log(data);
  console.log("control >>>", control);
  useEffect(() => {
    console.log(control);
  }, [control]);

  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="col-span-3 p-lg border border-color-gray-light bg-white rounded-md space-y-lg">
      <form onSubmit={handleSubmit(onSubmit)}>
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
                control={control}
                name="businessModels"
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
      </form>
    </div>
  );
};
