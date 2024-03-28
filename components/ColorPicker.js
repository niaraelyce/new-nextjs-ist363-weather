import { useState } from "react";

import Button from "./Button";

import styles from "./ColorPicker.module.scss";

const colors = [
  {
    name: "Red",
    value: "#ff0000",
  },
  {
    name: "Green",
    value: "#00ff00",
  },
  {
    name: "Blue",
    value: "#0000ff",
  },
];

const ColorPicker = () => {
  // an array of color names and values

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.colorpicker}>
      <div
        className={styles.colorpicker__block}
        style={{ backgroundColor: colors[activeIndex].value }}
      >
        <h2 className={styles.colorpicker__name}>{colors[activeIndex].name}</h2>
      </div>
      {colors.map((color, index) => {
        return (
          <Button
            key={index}
            backgroundColor={color.value}
            label={color.name}
            clickHandler={() => {
              setActiveIndex(index);
            }}
          />
        );
      })}
    </div>
  );
};
export default ColorPicker;
