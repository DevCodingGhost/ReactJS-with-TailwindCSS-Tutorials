import { useState } from "react";
import { uuid } from "./components/uuid";

const App = () => {
  const [id] = useState(uuid());

  console.log(id);

  return (
    <div className="h-screen w-full">
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 flex flex-col items-center justify-center">
        <div>Generate unique id in react</div>
        <div>{id}</div>
      </div>
    </div>
  );
};

export default App;
