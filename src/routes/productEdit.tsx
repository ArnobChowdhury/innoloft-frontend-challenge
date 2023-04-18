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
import {
  EditProductInfo,
  EditProductVideo,
  EditOfferDetails,
} from "../composites";

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
          <EditOfferDetails />
        </div>
      )}
    </div>
  );
};

export default productEdit;
