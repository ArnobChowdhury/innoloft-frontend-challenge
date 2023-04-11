import { Chip } from "../components";
import { ProductProps } from "../types";
import { Settings, Clock, Knight, Currency } from "../icons";

type OfferDetailsProps = Pick<
  ProductProps,
  "type" | "trl" | "businessModels" | "investmentEffort"
>;

const Text = ({ text }: { text: string }) => {
  return <p className="mb-2.5">{text}</p>;
};

interface ItemDetailWithIconProps {
  icon: JSX.Element;
  items: JSX.Element;
  tailWindClasses?: string;
}

const ItemDetailWithIcon = ({
  icon,
  items,
  tailWindClasses,
}: ItemDetailWithIconProps) => {
  const classNames = `flex ${tailWindClasses}`;
  return (
    <div className={classNames}>
      <div className="mr-2">{icon}</div>
      <div>{items}</div>
    </div>
  );
};

export const OfferDetails = ({
  type,
  trl,
  businessModels,
  investmentEffort,
}: OfferDetailsProps) => {
  const technologyChips = (
    <>
      <Text text="Technology" />
      <Chip text={type.name} />
    </>
  );

  const trlChips = (
    <>
      <Text text="TRL" />
      <Chip text={trl.name} />
    </>
  );

  const businessModelChips = (
    <div>
      <Text text="Business Model" />
      <div className="-ml-1 -mb-1">
        {businessModels.map((model) => (
          <Chip text={model.name} tailwindClasses="ml-1 mb-1" />
        ))}
      </div>
    </div>
  );

  const costChips = (
    <>
      <Text text="Costs" />
      <Chip text={investmentEffort} />
    </>
  );

  const technologyComponent = (
    <ItemDetailWithIcon
      items={technologyChips}
      icon={<Settings />}
      tailWindClasses="mb-lg"
    />
  );

  const trlComponent = <ItemDetailWithIcon items={trlChips} icon={<Clock />} />;
  const businessModelComponent = (
    <ItemDetailWithIcon
      items={businessModelChips}
      icon={<Knight />}
      tailWindClasses="mb-lg"
    />
  );

  const costComponent = (
    <ItemDetailWithIcon items={costChips} icon={<Currency />} />
  );

  return (
    <div className="col-span-3 p-lg mb-10 border-solid border-gray-light border rounded-lg  bg-white">
      <h2 className="mb-lg">Offer details</h2>
      <div>
        <div className="grid grid-cols-2">
          {technologyComponent}
          {businessModelComponent}
        </div>
        <div className="grid grid-cols-2">
          {trlComponent}
          {costComponent}
        </div>
      </div>
    </div>
  );
};
