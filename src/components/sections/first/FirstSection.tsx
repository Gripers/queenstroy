import { useEffect } from "react";
import styles from "./FirstSection.module.scss";

import { Spinner } from "react-bootstrap";
import dynamic from "next/dynamic";
import Image from "next/image";

import { bannersCarouselSettings } from "@/settings/carousel.settings";
import { useLazyGetBannersQuery } from "@/redux/api/banners.api";
import Sidebar from "@/components/sidebar/Sidebar";

const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

const FirstSection = () => {
  const [getBanners, { data, isLoading }] = useLazyGetBannersQuery();

  useEffect(() => {
    getBanners("");
  }, []);

  return (
    <section className={styles.section}>
      {isLoading ? (
        <div className="d-flex align-items-center justify-content-center">
          <Spinner />
        </div>
      ) : (
        <>
          <Sidebar />
          <OwlCarousel className="owl-theme" {...bannersCarouselSettings}>
            {data?.map((item) => (
              <div key={item?.id} className={styles.item}>
                <Image src={item?.image} alt="" fill />
              </div>
            ))}
          </OwlCarousel>
        </>
      )}
    </section>
  );
};

export default FirstSection;
