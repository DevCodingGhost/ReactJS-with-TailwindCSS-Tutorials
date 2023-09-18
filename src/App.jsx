import { Modal } from "./components/Modal";
import Portal from "./components/Portal";

export default function App() {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <Portal>
        <Modal>
          Modal 1
          <Portal>
            <Modal>Modal 2</Modal>
          </Portal>
        </Modal>
      </Portal>
    </div>
  );
}
