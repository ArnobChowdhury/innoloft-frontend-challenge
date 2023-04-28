import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ProductInfo, ProductVideo, OfferDetails, Shimmer } from "../composites";
import { fetchProduct } from "../store/thunks";
import { useAppDispatch, useAppSelector } from "../hooks";
import { BreadCrumb } from "../components";

const Product = () => {
  const dispatch = useAppDispatch();
  const { product } = useAppSelector((state) => state.product);

  const location = useLocation();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <div className='grid grid-cols-3 space-y-5'>
      <div className='flex justify-between col-span-3'>
        <BreadCrumb location={location.pathname} />
        <Link to='/product/edit' className='btn btn_primary opacity-100'>
          Edit
        </Link>
      </div>
      {!product && <Shimmer />}
      {product && (
        <>
          <div className='col-span-3'>
            <ProductInfo
              name={product.name}
              company={product.company}
              description={product.description}
              picture={product.picture}
              user={product.user}
            />
          </div>
          <div className='col-span-3'>
            <ProductVideo video={product.video} />
          </div>
          <div className='col-span-3'>
            <OfferDetails
              type={product.type}
              trl={product.trl}
              businessModels={product.businessModels}
              investmentEffort={product.investmentEffort}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
