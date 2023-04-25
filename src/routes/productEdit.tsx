import { useEffect, useState } from "react";
import { fetchProduct, fetchTrlList, updateProduct } from "../store/thunks";
import { useAppDispatch, useAppSelector } from "../hooks";
import "react-quill/dist/quill.snow.css";
import {
  EditProductInfo,
  EditProductVideo,
  EditOfferDetails,
  Shimmer,
} from "../composites";
import { EditOfferDetailsProps } from "../types";

export const productEdit = () => {
  const dispatch = useAppDispatch();
  const { product, productLoading, productUpdating } = useAppSelector(
    (state) => state.product
  );
  const { trlList, trlListLoading } = useAppSelector((state) => state.trllist);

  useEffect(() => {
    dispatch(fetchProduct());
    dispatch(fetchTrlList());
  }, []);

  const loading = productLoading || trlListLoading;

  const handleSubmission = (data: EditOfferDetailsProps) => {
    if (product) dispatch(updateProduct(product?.id, data));
  };

  return (
    <div className="space-y-5">
      {loading && <Shimmer />}
      {!loading && product && trlList && (
        <div className="grid grid-cols-3 space-y-lg">
          <EditProductInfo
            picture={product.picture}
            company={product.company}
            user={product.user}
          />
          <EditProductVideo video={product.video} />
          <EditOfferDetails
            businessModels={product.businessModels}
            investmentEffort={product.investmentEffort}
            trl={product.trl}
            type={product.type.name}
            trlList={trlList}
            isSubmitting={productUpdating}
            onSubmit={handleSubmission}
          />
        </div>
      )}
    </div>
  );
};

export default productEdit;
