"use client";

import moment from "moment";
import style from "./page.module.css";
import { useState } from "react";

const MainPage = () => {
  const [color, setColor] = useState(false);
  if (typeof window === "object") {
    const html = document.querySelector("html");
    if (html) {
      html.style.backgroundColor = color ? "red" : "rgb(99, 143, 255)";
    }
  }

  const onClick = () => {
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
