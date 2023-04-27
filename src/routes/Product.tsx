import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ProductInfo, ProductVideo, OfferDetails, Shimmer } from "../composites";
import { fetchProduct } from "../store/thunks";
import { useAppDispatch, useAppSelector } from "../hooks";
import { BreadCrumb } from "../components";

/**
 * To do
 * 1. ////Update base styles
 * 2. ////Divide this huge component in to smaller pieces
 * 3. ////Make the menu bars at the left
 * 4. ////Fix overall styling a: Check nested classes are consistent - col-span-3 should not be in a child component rather high level, increase a div if needed
 * 5. ////Add all the shimmers for both the product and edit page
 * 6. ////Make the edit page
 * 7. Make the breadcrumb
 * 8. Make the Header with all the icons
 * 9. ////Make all the composites for edit page
 * 10. ////Add form handler in the edit page - react hook form - controlled components
 * 11. White labeling
 * 12. //// Eslint and Formating
 * 13. What if the fetch goes wrong, we need to handle error better
 */

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
        <Link to='/product/edit' className='btn btn_primary bg-color-primary'>
          Edit
        </Link>
      </div>
      {!product && <Shimmer />}
      {product && (
        <>
          <ProductInfo
            name={product.name}
            company={product.company}
            description={product.description}
            picture={product.picture}
            user={product.user}
          />
          <ProductVideo video={product.video} />
          <OfferDetails
            type={product.type}
            trl={product.trl}
            businessModels={product.businessModels}
            investmentEffort={product.investmentEffort}
          />
        </>
      )}
    </div>
  );
};

export default Product;
