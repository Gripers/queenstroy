import { useRouter } from "next/router";

import SingleCategory from "@/components/screens/single-category/SingleCategory";

const SingleCategoryPage = () => {
  const { query } = useRouter();

  return <SingleCategory id={Number(query.id)} />;
};

export default SingleCategoryPage;
