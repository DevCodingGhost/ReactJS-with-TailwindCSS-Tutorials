import { useState } from "react";
import { Select } from "./components/Select";

const App = () => {
  const [value, setValue] = useState("");
  return (
    <div className="h-screen w-full">
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 flex flex-col items-center justify-center">
        <Select
          value={value}
          onChange={(e) => setValue(e)}
          options={[
            "item 1",
            "item 2",
            "item 3",
            "item 4",
            "item 5",
            "item 6",
            "item 7",
            "item 8",
            "item 9",
            "item 10",
            "item 11",
            "item 12",
          ]}
        />
      </div>
    </div>
  );
};

export default App;
