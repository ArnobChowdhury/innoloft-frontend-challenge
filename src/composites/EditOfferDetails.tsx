import { useForm } from "react-hook-form";
import { ItemDetailWithIcon } from "../components";
import { Text, Button, Select, MultipleChipsInput } from "../components";
import { Settings, Knight, Clock, Check, Currency } from "../icons";
import { TRLProps, EditOfferDetailsProps } from "../types";

type EditOfferDetailsComponentProps = EditOfferDetailsProps & {
  trlList: TRLProps[];
  onSubmit: (data: EditOfferDetailsProps) => void;
  isSubmitting: boolean;
};

export const EditOfferDetails = (props: EditOfferDetailsComponentProps) => {
  const {
    businessModels,
    investmentEffort,
    trl,
    type,
    trlList,
    onSubmit,
    isSubmitting = false,
  } = props;
  const { register, handleSubmit, control } = useForm<EditOfferDetailsProps>({
    defaultValues: { businessModels, investmentEffort, trl, type },
  });

  return (
    <div className='p-lg border border-color-gray-light bg-white rounded-md space-y-lg'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Offer details</h2>
        <div className='lg:grid lg:grid-cols-2 mb-lg'>
          <ItemDetailWithIcon
            icon={<Settings />}
            items={
              <>
                <Text text='Technology' />
                <input
                  type='text'
                  className='w-full'
                  placeholder='e.g. Software'
                  disabled={isSubmitting}
                  {...register("type")}
                />
              </>
            }
            tailWindClasses='grow mb-lg lg:mr-1'
          />
          <ItemDetailWithIcon
            icon={<Knight />}
            items={
              <MultipleChipsInput
                label='Business Models'
                control={control}
                name='businessModels'
                defaultChips={businessModels}
              />
            }
            tailWindClasses='grow ml-1'
          />
        </div>
        <div className='lg:grid lg:grid-cols-2 mb-lg'>
          <ItemDetailWithIcon
            icon={<Clock />}
            items={
              <>
                <Text text='TRL' />
                <Select value={trl} control={control} options={trlList} name='trl' />
              </>
            }
            tailWindClasses='grow mb-lg mr-1'
          />
          <ItemDetailWithIcon
            icon={<Currency />}
            items={
              <>
                <Text text='Costs' />
                <input
                  type='text'
                  className='w-full'
                  placeholder=''
                  {...register("investmentEffort")}
                  disabled={isSubmitting}
                />
              </>
            }
            tailWindClasses='grow ml-1'
          />
        </div>
        <div className='flex justify-end'>
          <Button loading={isSubmitting} disabled={isSubmitting} icon={<Check />}>
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};
