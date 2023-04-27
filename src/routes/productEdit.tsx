import { useEffect } from "react";
import {
  fetchProduct,
  fetchTrlList,
  updateProductInfo,
  updateProductOfferDetails,
  updateProductVideo,
} from "../store/thunks";
import { useAppDispatch, useAppSelector } from "../hooks";
import "react-quill/dist/quill.snow.css";
import {
  EditProductInfo,
  EditProductVideo,
  EditOfferDetails,
  Shimmer,
} from "../composites";
import {
  EditOfferDetailsProps,
  ProductVideoProps,
  EditProductInfoProps,
} from "../types";

export const productEdit = () => {
  const dispatch = useAppDispatch();
  const {
    product,
    productLoading,
    productInfoUpdating,
    productVideoUpdating,
    productOfferDetailsUpdating,
  } = useAppSelector((state) => state.product);
  const { trlList, trlListLoading } = useAppSelector((state) => state.trllist);

  useEffect(() => {
    dispatch(fetchProduct());
    dispatch(fetchTrlList());
  }, []);

  const loading = productLoading || trlListLoading;

  const handleInfoSubmission = (data: EditProductInfoProps) => {
    if (product) dispatch(updateProductInfo(product?.id, data));
  };

  const handleVideoSubmission = (data: ProductVideoProps) => {
    if (product) dispatch(updateProductVideo(product?.id, data));
  };

  const handleOfferDetailsSubmission = (data: EditOfferDetailsProps) => {
    if (product) dispatch(updateProductOfferDetails(product?.id, data));
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
            description={product.description}
            name={product.name}
            onSubmit={handleInfoSubmission}
            isSubmitting={productInfoUpdating}
          />
          <EditProductVideo
            onSubmit={handleVideoSubmission}
            video={product.video}
            isSubmitting={productVideoUpdating}
          />
          <EditOfferDetails
            businessModels={product.businessModels}
            investmentEffort={product.investmentEffort}
            trl={product.trl}
            type={product.type.name}
            trlList={trlList}
            isSubmitting={productOfferDetailsUpdating}
            onSubmit={handleOfferDetailsSubmission}
          />
        </div>
      )}
    </div>
  );
};

export default productEdit;
