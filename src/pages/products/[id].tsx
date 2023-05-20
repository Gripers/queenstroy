import { useRouter } from "next/router";

import SingleProduct from "@/components/screens/single-product/SingleProduct";

const SingleProductPage = () => {
  const { query } = useRouter();

  return <SingleProduct id={Number(query.id)} />;
};

export default SingleProductPage;
