import React from "react";
import styles from "../styles/Card.module.scss";

const Card = ({ children }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <div className={styles.card__profile}>
          <svg
            className={styles.card__avatar}
            height={48}
            width={48}
            viewBox="0 0 48 48"
          />
          <div>
            <div className={styles.card__name}>Jon</div>
            <div className={styles.card__handle}>@jonathan-dh</div>
          </div>
        </div>
        <button className={styles.card__button}>Options</button>
      </div>

      <div className={styles.card__body}>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Card;

// Card module credit (Tailwind, CSS):
// https://uiverse.io/Manish-Tamang/cold-tiger-81
// Translated to SCSS with AI