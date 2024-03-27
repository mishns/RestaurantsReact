import { default as React, FC } from "react";
import styles from "./card.css";

interface CardProps {
  imgPath: string;
  title: string;
  cuisine: string;
  starsNum: number;
}

export const Card: FC<CardProps> = ({ imgPath, title, cuisine, starsNum }) => {
  return (
    <article className={styles.card}>
      <img
        className={styles.cardImg}
        src={imgPath}
        alt={`${title} restaurant picture`}
      />
      <h2 className={styles.cardTitle}>{title}</h2>
      <div className={styles.cardInfo}>
        <span className={styles.cardCuisine}>{cuisine}</span>
        <span className={styles.cardStars}>{`${starsNum} stars`}</span>
      </div>
      {/* <img src={starImg} alt="" className={styles.cardStar} /> */}
    </article>
  );
};
