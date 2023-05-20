import { useState } from "react";

import Drawer from "react-modern-drawer";
import Link from "next/link";

import { useGetCategoriesQuery } from "@/redux/api/categories.api";
import BurgerIcon from "../icons/BurgerIcon";

const HeaderDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useGetCategoriesQuery("");

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <button onClick={toggleDrawer}>
        <BurgerIcon />
      </button>

      <Drawer open={isOpen} onClose={toggleDrawer} direction="left">
        <ul>
          {data?.map((item) => (
            <li key={item?.id} style={{ padding: "10px 20px" }}>
              <Link href={`/categories/${item?.id}`}>{item?.name_ru}</Link>
            </li>
          ))}
        </ul>
      </Drawer>
    </>
  );
};

export default HeaderDrawer;
