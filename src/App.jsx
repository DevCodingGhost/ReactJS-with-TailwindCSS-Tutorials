import { Button } from "./components/AdvancedButton";

export default function App() {
  return (
    <div className="h-screen w-full">
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <Button className="m-1" rounded variant="primary">
          primary
        </Button>
        <Button className="m-1" rounded variant="secondary">
          secondary
        </Button>
        <Button className="m-1" rounded variant="success">
          success
        </Button>
        <Button className="m-1" rounded variant="danger">
          danger
        </Button>
        <Button className="m-1" rounded variant="warning">
          warning
        </Button>
        <Button className="m-1" rounded variant="info">
          info
        </Button>
        <Button className="m-1" rounded variant="light">
          light
        </Button>
        <Button className="m-1" rounded variant="dark">
          dark
        </Button>
        <Button className="m-1" rounded variant="primary-outline">
          primary-outline
        </Button>
        <Button className="m-1" rounded variant="secondary-outline">
          secondary-outline
        </Button>
        <Button className="m-1" rounded variant="success-outline">
          success-outline
        </Button>
        <Button className="m-1" rounded variant="danger-outline">
          danger-outline
        </Button>
        <Button className="m-1" rounded variant="warning-outline">
          warning-outline
        </Button>
        <Button className="m-1" rounded variant="info-outline">
          info-outline
        </Button>
        <Button className="m-1" rounded variant="light-outline">
          light-outline
        </Button>
        <Button className="m-1" rounded variant="dark-outline">
          dark-outline
        </Button>
        <Button className="m-1" disabled>
          disabled
        </Button>
      </div>
    </div>
  );
}
