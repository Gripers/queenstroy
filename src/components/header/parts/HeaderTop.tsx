import Link from "next/link";
import Form from "react-bootstrap/Form";

const HeaderTop = ({ styles }: any) => {
  return (
    <div className={styles.top}>
      <p>Электронная коммерция для новой эры</p>
      <ul>
        <li>
          <button>Продать на Вибо</button>
        </li>
        <li>
          <Link href="/">Отслеживание заказа</Link>
        </li>
        <li>
          <Form.Select>
            <option value="ru">Русский</option>
            <option value="uz">Uzbek</option>
          </Form.Select>
        </li>
      </ul>
    </div>
  );
};

export default HeaderTop;
