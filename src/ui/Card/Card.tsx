import { default as React, FC, useState } from "react";
import styles from "./card.css";
import { RatingStar } from "@ui/RatingStar";
import { MAX_STARS } from "@constants";

interface CardProps {
  imgPath: string;
  title: string;
  descr: string;
  cardStars: number;
}

export const Card: FC<CardProps> = ({ imgPath, title, descr, cardStars }) => {
  const [stars, setStars] = useState(cardStars);

  function handleStarHover(starValue: number) {
    setStars(starValue);
    console.log(`${starValue} hover`);
  }

  function handleStarUnhover() {
    setStars(cardStars);
  }

  function handleClick(starValue: number) {
    console.log(`${starValue} click`);
  }

  return (
    <article className={styles.Card}>
      <img
        className={styles.CardImg}
        src={imgPath}
        alt={`${title} restaurant picture`}
      />
      <h2 className={styles.CardTitle}>{title}</h2>
      <span className="CardDescr">{descr}</span>
      <ul className={styles.StarsList}>
        {Array.from({ length: stars }).map((_, index) => (
          <RatingStar
            key={index + 1}
            value={index + 1}
            painted={true}
            onHover={handleStarHover}
            onUnhover={handleStarUnhover}
            onClick={handleClick}
          />
        ))}
        {Array.from({ length: MAX_STARS - stars }).map((_, index) => (
          <RatingStar
            key={MAX_STARS - index}
            value={MAX_STARS - index}
            painted={false}
            onHover={handleStarHover}
            onUnhover={handleStarUnhover}
            onClick={handleClick}
          />
        ))}
      </ul>
    </article>
  );
};
