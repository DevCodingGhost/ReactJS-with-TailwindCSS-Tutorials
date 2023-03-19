import PropTypes from "prop-types";
import { useState, useCallback } from "react";
import { classNames } from "./classNames";

export const Accordion = ({ data, keyAttr, valAttr, height, width }) => {
  const [current, setCurrent] = useState(null);

  const select = useCallback(
    (i) => {
      if (current === i) return setCurrent(null);
      setCurrent(i);
    },
    [current]
  );

  return (
    <div
      className="flex flex-col items-center justify-center divide-y-2 shadow dark:ring-1 dark:ring-neutral-500"
      style={{ width }}
    >
      {data.map((item, index) => (
        <div
          className="bg-white text-black dark:bg-neutral-700/75 dark:text-white flex flex-col group"
          key={index}
        >
          <div
            className="text-xl cursor-pointer p-2 flex items-center justify-between group-hover:text-neutral-600"
            onClick={() => select(index)}
          >
            <span>{item[keyAttr]}</span>
            <span>{current === index ? "-" : "+"}</span>
          </div>
          <div
            className={classNames(
              "text-base transition-all ease-in-out duration-500 overflow-auto mx-2",
              current === index ? "p-2 border-t-2" : "p-0"
            )}
            style={{
              maxHeight: current === index ? height : 0,
            }}
          >
            {item[valAttr]}
          </div>
        </div>
      ))}
    </div>
  );
};

Accordion.propTypes = {
  data: PropTypes.array,
  keyAttr: PropTypes.string,
  valAttr: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

Accordion.defaultProps = {
  height: 200,
  width: 400,
};
