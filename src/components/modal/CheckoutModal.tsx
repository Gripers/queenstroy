import { useState } from "react";
import styles from "./CheckoutModal.module.scss";

import { Modal, Spinner } from "react-bootstrap";
import useGeolocation from "react-hook-geolocation";

import { useCheckoutMutation } from "@/redux/api/checkout.api";
import { useCart } from "@/hooks/useCart";

const CheckoutModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items, emptyCart } = useCart();
  const [checkout, { isLoading }] = useCheckoutMutation();
  const geolocation = useGeolocation();

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    await checkout({
      items,
      name: event.target[0].value,
      phone: event.target[1].value,
      location: `${geolocation.latitude}, ${geolocation.longitude}`,
    });
    emptyCart();
  };

  return (
    <>
      <button className={styles.checkout__btn} onClick={handleOpen}>
        Оформить заказ
      </button>

      <Modal show={isOpen} onHide={handleClose} centered>
        <Modal.Body>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="name">
              Имя
              <input type="text" id="name" />
            </label>
            <label htmlFor="phone">
              Номер телефона
              <input type="number" id="phone" />
            </label>
            <button type="submit">
              {isLoading ? <Spinner size="sm" /> : "Подтвердить"}
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CheckoutModal;
