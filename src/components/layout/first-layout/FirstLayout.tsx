import { ReactNode } from "react";
import styles from "./FirstLayout.module.scss";

import Link from "next/link";

type FirstLayoutProps = {
  title: string;
  id: number;
  children: ReactNode;
};

const FirstLayout = ({ title, id, children }: FirstLayoutProps) => {
  return (
    <section className={styles.section}>
      <Link href={`/categories/${id}`}>
        <h4>{title}</h4>
      </Link>
      {children}
    </section>
  );
};

export default FirstLayout;
