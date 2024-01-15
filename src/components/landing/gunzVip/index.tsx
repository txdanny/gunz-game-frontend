import { FC } from "react";
import styles from "./gunzVip.module.scss";
import Image from "next/image";

const GunzVip: FC = () => {
  return (
    <section className={styles["gunz-vip"]}>
      <div className={styles["bg-image"]}>
        <Image
          src="/images/bg-gunzvip.jpg"
          className="object-cover"
          fill
          data-testid="rank-bg"
          alt="GunZ V.I.P"
        />
      </div>
      <div className={styles["vip-content"]}>
        <div className={styles["pattern-left"]}>
          <Image src="/images/vip-left@desktop.png" fill alt="" />
        </div>
        <div className={styles["pattern-right"]}>
          <Image src="/images/vip-right@desktop.png" fill alt="" />
        </div>
        <div className={styles["info"]}>
          <div className={styles["title"]}>GunZ V.I.P</div>
          <p className={styles["description"]}>
            Upgrade your account to V.I.P status and receive
            <br />
            exclusive benefits:
          </p>
          <ul>
            <li>Access to exclusive items only for V.I.Ps</li>
            <li>XP/Coins Bonus</li>
            <li>V.I.P Colored Name</li>
            <li>Custom Discord Benefits!</li>
          </ul>
          <div className={styles["action"]}>
            <button className={styles["btn-buy"]}>buy v.i.p</button>
          </div>

          <div className={styles["pattern-bottom"]}>
            <Image src="/images/vip@mobile.png" fill alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GunzVip;
