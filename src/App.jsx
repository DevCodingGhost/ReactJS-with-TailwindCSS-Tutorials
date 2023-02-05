import { Tooltip } from "./components/Tooltip";

export default function App() {
  return (
    <div className="h-screen w-full">
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 flex flex-col items-center justify-center">
        <Tooltip position="top" content="This is Tooltip on top">
          Tooltip-top
        </Tooltip>
        <Tooltip position="right" content="This is Tooltip on right">
          Tooltip-right
        </Tooltip>
        <Tooltip position="left" content="This is Tooltip on left">
          Tooltip-left
        </Tooltip>
        <Tooltip position="bottom" content="This is Tooltip on bottom">
          Tooltip-bottom
        </Tooltip>
      </div>
    </div>
  );
}
