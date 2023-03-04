"use client";

import moment from "moment";
import style from "./page.module.css";
import { useState } from "react";

const MainPage = () => {
  const [color, setColor] = useState(false);

  const onClick = () => {
    if (typeof window === "object") {
      const body = document.querySelector("body");
      if (body) {
        body.style.backgroundColor = color ? "red" : "rgb(68, 111, 218)";
      }
    }
    setColor(!color);
  };

  const daysLeft = () => {
    const eventDay = moment("2023-04-20");
    return eventDay.diff(moment(), "days");
  };

  const calcPrecentage = (days: number, tot: number) => {
    return (days / tot) * 100;
  };

  return (
    <>
      <div className={style.container}>
        <h1>{`ICDC begins in ${daysLeft()} days...`}</h1>
        <div className={style.bar}>
          <div
            className={style.progress}
            style={{ width: `${calcPrecentage(daysLeft(), 50)}%` }}
            onClick={() => onClick()}
          ></div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
