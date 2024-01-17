"use client";

import { FC, useEffect, useRef, useState } from "react";
import styles from "./streamingNow.module.scss";
import Image from "next/image";
import StreamingBox from "./stramingBox";
import { STREAMING_DATA } from "@/config";
import { Streaming } from "@/utils/types";
import useWindowSize from "@/hooks/useWindowSize";

const StreamingNow: FC = () => {
  const [current, setCurrent] = useState<Streaming>(STREAMING_DATA[0]);

  const handleButtonClick = (direction: "left" | "right") => {
    const currentIndex = STREAMING_DATA.findIndex(
      (item) => item.channelID === current.channelID
    );

    let newIndex;
    if (direction === "left") {
      newIndex =
        (currentIndex - 1 + STREAMING_DATA.length) % STREAMING_DATA.length;
    } else {
      newIndex = (currentIndex + 1) % STREAMING_DATA.length;
    }

    setCurrent(STREAMING_DATA[newIndex]);
  };

  return (
    <section className={styles["streaming"]} data-testid="streaming-section">
      <div className={styles["bg-image"]}>
        <Image
          src="/images/bg-streaming.jpg"
          className="object-cover"
          alt="Steraming Now"
          data-testid="streaming-bg"
          fill
        />
      </div>
      <div className={styles["content"]}>
        <div className={styles["section-title"]}>
          <div>Streaming GUNZ Now</div>
          <div className={styles["logo"]}>
            <Image
              src={current.brand}
              fill
              className="object-contain"
              alt="Brand"
            />
          </div>
        </div>
        <p className={styles["section-description"]}>
          Locked, loaded, and live - the battleground awaits!
          <br />
          Tune in, gear up, and witness{" "}
          <span>
            GUNZ unfolding in real-time <br />
            on these streaming platforms!
          </span>
        </p>
        <StreamingBox targetID="video-box" channel={current.channelID} />
        <div className={styles["streamers"]}>
          view on <span>streamers</span>
        </div>
        <div className={styles["controls"]}>
          <button
            type="button"
            onClick={() => handleButtonClick("left")}
            aria-label="Previous Stream"
          >
            <Image
              src="/icons/arrow-left.png"
              className="play-shadow"
              fill
              alt=""
            />
          </button>
          <button
            type="button"
            onClick={() => handleButtonClick("right")}
            aria-label="Next Stream"
          >
            <Image
              src="/icons/arrow-right.png"
              className="play-shadow"
              fill
              alt=""
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default StreamingNow;
