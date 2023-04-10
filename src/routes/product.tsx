import axios from "axios";
import { useEffect, useState } from "react";
import { Chip } from "../components";
import { ProductProps } from "../types";
import { ProductInfo, ProductVideo } from "../composites";

/**
 * To do
 * 1. ////Update base styles
 * 2. Divide this huge component in to smaller pieces
 * 3. Make the menu bars at the left
 * 4. Fix overall styling a: Check nested classes are consistent - col-span-3 should not be in a child component rather high level, increase a div if needed
 * 5. Add all the shimmers
 * 6. Make the edit page
 * 7. Make the breadcrumb
 */

const obj = {
  id: 6781,
  name: "LoftOS",
  description:
    '<img style="height: 0px" src=a onerror=console.log("secret-cookie-value")>Innoloft <b>creates</b> <script type="text/javascript">console.log("test");</script>the leading B2B tech ecosystem through interconnected research & business networks and marketplaces. With our digital platform technology, we are changing the way business contacts are initiated between economic and innovation actors.\n\nOur unique software-as-a-service (SaaS) solution LoftOS digitizes services provided by governments and public economic agencies, clusters and hubs, as well as event organizers and trade shows. Not only can our LoftOS customers implement their digitization strategy in a matter of months - each platform can also be connected through our system and its data standard. Through this connection, Innoloft and its partners are creating the largest B2B tech ecosystem in the world.\nCompanies, startups, research institutes and other business players use the ecosystem for lead generation, innovation scouting, procurement or partner acquisition.\n',
  picture: "https://img.innoloft.com/products/product_783016a3.png",
  type: {
    id: 2,
    name: "Software",
  },
  categories: [
    {
      id: 5101,
      name: "IT platforms",
    },
    {
      id: 5100,
      name: "B2B marketplaces",
    },
  ],
  implementationEffortText: null,
  investmentEffort: "< 25.000€",
  trl: {
    id: 9,
    name: "TRL 9 – Actual system proven in operational environment (established product available)",
  },
  video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  user: {
    id: 284,
    email: "example@innoloft.com",
    firstName: "Christopher",
    lastName: "Stirner",
    sex: 1,
    profilePicture: "https://img.innoloft.com/users/user_8d48197d.png",
    position: "Chief Strategy Officer",
  },
  company: {
    name: "Innoloft GmbH",
    logo: "https://img.innoloft.com/logos/unt_7838d306.png",
    address: {
      country: {
        name: "Germany",
      },
      city: {
        name: "Aachen",
      },
      street: "Jülicher Straße",
      house: "72a",
      zipCode: "52070",
      longitude: "6.100367",
      latitude: "50.779729",
    },
  },
  businessModels: [
    {
      id: 65,
      name: "Pay-Per-Use",
    },
    {
      id: 1155,
      name: "Subscription",
    },
    {
      id: 374,
      name: "White-Label",
    },
    {
      id: 66,
      name: "Peer-to-Peer (P2P)",
    },
  ],
};

const Product = () => {
  const [product, setProduct] = useState<ProductProps | undefined>();

  useEffect(() => {
    const url = "https://api-test.innoloft.com/product/6781/";
    axios.get(url).then((res) => {
      console.log(res.data);
      setProduct(res.data);
    });
    console.log("This is good.\n\nAnd this is better.");
  }, []);
  console.log("Lat", product?.company.address.latitude);

  return (
    <div className="grid grid-cols-4 container mx-auto px-10 my-lg">
      {/* <div className="bg-white">this is my first grid</div> */}
      <div>this is my first grid</div>
      <div className="col-span-3 grid grid-cols-3 space-y-5">
        {product && (
          <ProductInfo
            name={product.name}
            company={product.company}
            description={product.description}
            picture={product.picture}
            user={product.user}
          />
        )}
        {product && <ProductVideo video={product.video} />}
        <div className="col-span-3 p-lg mb-10 border-solid border-gray-light border rounded-lg grid grid-cols-2 space-x-4 bg-white">
          {product && (
            <>
              <div className="col-span-1">
                <p>Technology</p>
                <Chip text={product.type.name} />
                <p>TRL</p>
                <Chip text={product.trl.name} />
              </div>
              <div className="col-span-1">
                <p>Business Model</p>
                <div>
                  {product.businessModels.map((model) => (
                    <Chip text={model.name} />
                  ))}
                </div>
                <p>Costs</p>
                <Chip text={product.investmentEffort} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
