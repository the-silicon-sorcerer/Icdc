import moment from "moment-timezone";
import style from "./page.module.css";

const MainPage = () => {
  moment.tz.setDefault("America/Los_Angeles");

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
          ></div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
