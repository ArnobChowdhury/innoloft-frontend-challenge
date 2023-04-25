export interface IDNameProps {
  id: number;
  name: string;
}

export type TRLProps = IDNameProps & {
  description?: string | null;
};

export interface ProductProps {
  id: number;
  name: string;
  description: string;
  picture: string;
  type: IDNameProps;
  categories: IDNameProps[];
  implementationEffortText: null;
  investmentEffort: string;
  trl: TRLProps;
  video: string;
  user: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    sex: number;
    profilePicture: string;
    position: string;
  };
  company: {
    name: string;
    logo: string;
    address: {
      country: {
        name: string;
      };
      city: {
        name: string;
      };
      street: string;
      house: string;
      zipCode: string;
      longitude: string;
      latitude: string;
    };
  };
  businessModels: IDNameProps[];
}

export type OfferDetailsProps = Pick<
  ProductProps,
  "type" | "trl" | "businessModels" | "investmentEffort"
>;

export type OfferedByPropsFromProduct = Pick<ProductProps, "company" | "user">;

export type ProductInfoProps = Pick<
  ProductProps,
  "picture" | "description" | "name" | "company" | "user"
>;

export type ProductVideoProps = Pick<ProductProps, "video">;

export interface EditOfferDetailsProps extends Omit<OfferDetailsProps, "type"> {
  type: string;
}
