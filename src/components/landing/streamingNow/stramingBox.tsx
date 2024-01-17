"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./streamingNow.module.scss";

interface StreamingBoxProps {
  targetID?: string;
  channel?: string;
}

interface TwitchEmbed {
  Embed: (targetID: string, options: any) => any;
}

declare global {
  interface Window {
    Twitch: TwitchEmbed;
  }
}

const EMBED_URL = "https://embed.twitch.tv/embed/v1.js";

const StreamingBox: React.FC<StreamingBoxProps> = ({ targetID, channel }) => {
  const embedRef = useRef<any>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = EMBED_URL;
    script.addEventListener("load", () => {
      // Check if the props have changed before creating a new embed
      if (embedRef.current && channel !== embedRef.current?.getChannel()) {
        embedRef.current.destroy();
      }

      embedRef.current = new (window.Twitch as any).Embed(targetID, {
        layout: "video",
        channel,
      });
    });

    document.body.appendChild(script);

    return () => {
      if (embedRef.current) {
        embedRef.current.destroy();
      }
    };
  }, [targetID, channel]);

  return (
    <div className={styles["video-box"]}>
      <div id={targetID}></div>
    </div>
  );
};

export default StreamingBox;
