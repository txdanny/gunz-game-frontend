"use client";

import React, { useEffect, useRef } from "react";

interface StreamingBoxProps {
  targetID?: string;
  width?: number;
  height?: number;
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

const StreamingBox: React.FC<StreamingBoxProps> = ({
  targetID,
  width,
  height,
  channel,
}) => {
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
        width,
        height,
        channel,
      });
    });

    document.body.appendChild(script);

    return () => {
      if (embedRef.current) {
        embedRef.current.destroy();
      }
    };
  }, [targetID, width, height, channel]);

  return <div id={targetID}></div>;
};

export default StreamingBox;
