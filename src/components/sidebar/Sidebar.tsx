import styles from "./Sidebar.module.scss";

import Link from "next/link";

import { useGetCategoriesQuery } from "@/redux/api/categories.api";

const Sidebar = () => {
  const { data } = useGetCategoriesQuery("");

  return (
    <aside className={styles.sidebar}>
      <div className={styles.head}>
        <p>Категории</p>
      </div>
      <ul>
        {data?.map((item) => (
          <li key={item?.id}>
            <Link href={`/categories/${item?.id}`}>{item?.name_ru}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
