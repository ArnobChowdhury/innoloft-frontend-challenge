import { Chip, ItemDetailWithIcon, Text } from "../components";
import { OfferDetailsProps } from "../types";
import { Settings, Clock, Knight, Currency } from "../icons";

export const OfferDetails = ({
  type,
  trl,
  businessModels,
  investmentEffort,
}: OfferDetailsProps) => {
  const technologyChips = (
    <>
      <Text text='Technology' />
      <Chip text={type.name} />
    </>
  );

  const trlChips = (
    <>
      <Text text='TRL' />
      <Chip text={trl.name} />
    </>
  );

  const businessModelChips = (
    <div>
      <Text text='Business Model' />
      <div className='-ml-1 -mb-1'>
        {businessModels.map((model) => (
          <Chip text={model.name} key={model.name} tailwindClasses='ml-1 mb-1' />
        ))}
      </div>
    </div>
  );

  const costChips = (
    <>
      <Text text='Costs' />
      <Chip text={investmentEffort} />
    </>
  );

  const technologyComponent = (
    <ItemDetailWithIcon items={technologyChips} icon={<Settings />} tailWindClasses='mb-lg' />
  );

  const trlComponent = (
    <ItemDetailWithIcon items={trlChips} icon={<Clock />} tailWindClasses='mb-lg lg:mb-0' />
  );
  const businessModelComponent = (
    <ItemDetailWithIcon items={businessModelChips} icon={<Knight />} tailWindClasses='mb-lg' />
  );

  const costComponent = <ItemDetailWithIcon items={costChips} icon={<Currency />} />;

  return (
    <div className='p-lg bg-white border-solid border-gray-light border rounded-md'>
      <h2>Offer details</h2>
      <div>
        <div className='lg:grid lg:grid-cols-2 lg:space-x-lg'>
          {technologyComponent}
          {businessModelComponent}
        </div>
        <div className='lg:grid lg:grid-cols-2 lg:space-x-lg'>
          {trlComponent}
          {costComponent}
        </div>
      </div>
    </div>
  );
};
