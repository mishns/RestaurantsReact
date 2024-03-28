import { default as React, FC } from "react";
import styles from "./logo.css";

interface LogoProps {
  width: number;
  height: number;
}

export const Logo: FC<LogoProps> = ({ width, height }) => {
  return (
    <div className={styles.Logo}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 122 82"
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        version="1.1"
      >
        <g>
          <title>Layer 1</title>
          <g stroke="null">
            <path
              stroke="null"
              clipRule="evenodd"
              fillRule="evenodd"
              d="m26.44122,0.13044l-26.57567,0c-1.0895,0 -1.98554,0.88926 -1.98554,1.97052l0,80.08399c0,0.05053 0,0.09095 0,0.13137l0,1.31368l125.11947,0l0,-16.94648c0.02036,-2.18273 -1.15059,-3.34483 -3.40087,-3.57725l-27.52262,0.04042l0,-19.57384c0.02036,-1.00042 -0.41747,-1.52589 -1.32369,-1.536l-29.66089,0l0,-18.81595c-0.07128,-1.31368 -0.82476,-1.88968 -1.99572,-2.03115l-30.06818,0l0,-18.149c0.05091,-0.87916 -0.59057,-2.91031 -2.58629,-2.91031l0,0z"
            />
          </g>
        </g>
      </svg>
      <span>Eats</span>
    </div>
  );
};
