import PropTypes from "prop-types";
import { useCallback, useState } from "react";
import { classNames } from "./classNames";

export const Accordion = ({ data, height, width, keyAttr, valAttr }) => {
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
      className="flex flex-col items-center justify-center divide-y-2 dark:divide-neutral-600 dark:ring-1 dark:ring-neutral-600 text-black bg-white dark:text-white dark:bg-neutral-700/75"
      style={{ width }}
    >
      {data.map((item, index) => (
        <div className="flex flex-col shadow group" key={index}>
          <div
            className="text-xl flex items-center justify-between cursor-pointer group-hover:text-neutral-400 p-2"
            onClick={() => select(index)}
          >
            <span>{item[keyAttr]}</span>
            <span>{current === index ? "-" : "+"}</span>
          </div>
          <div
            className={classNames(
              "transition-all duration-500 ease-in-out overflow-auto mx-2",
              current === index ? "p-2 border-t-2" : "p-0"
            )}
            style={{ maxHeight: current === index ? height : 0 }}
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
  height: PropTypes.number,
  width: PropTypes.number,
  keyAttr: PropTypes.string,
  valAttr: PropTypes.string,
};

Accordion.defaultProps = {
  width: 400,
  height: 200,
  keyAttr: "title",
  valAttr: "content",
};
