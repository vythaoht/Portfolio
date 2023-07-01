import React, { useEffect, useState } from "react";
import styles from "./textLooping.module.scss";

const mappingArray = (title) => {
  const splitTitle = title.split("");

  return splitTitle.reduce((acc, char, index) => {
    const subString = acc.length ? acc[index - 1] + char : char;
    acc.push(subString);
    return acc;
  }, []);
};

const TextLooping = ({ title, ms = 200 }) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const desc = mappingArray(title);
  useEffect(() => {
    const scenio = setInterval(() => {
      setText(desc[index]);
      const currentIndex = index + 1 > desc.length ? 0 : index + 1;
      setIndex(currentIndex);
    }, ms);
    return () => {
      clearInterval(scenio);
    };
  }, [desc, index]);
  return (
    <h1
      className={styles.textLooping}
      style={{
        height: 56,
        textAlign: "left",
        margin: "30px 0",
        padding: 0,
        color: "#ec6295",
      }}
    >
      {text}
    </h1>
  );
};

export default TextLooping;
