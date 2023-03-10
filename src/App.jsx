import { useState } from "react";
import { Button } from "./components/AdvancedButton";
import { Modal } from "./components/Modal";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="h-screen w-full">
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 flex flex-col items-center justify-center">
        <Button onClick={() => setModalOpen(true)}>Open Modal</Button>

        {modalOpen && (
          <Modal
            // title="String Title"
            title={<div className="text-3xl">Custom Title</div>}
            // onClose={() => setModalOpen(false)}
            closeBtn={false}
            footer={
              <div className="flex gap-2 justify-end py-2">
                <Button variant="success" onClick={() => setModalOpen(false)}>
                  OK
                </Button>
                <Button variant="danger" onClick={() => setModalOpen(false)}>
                  Cancel
                </Button>
              </div>
            }
          >
            Modal Content
          </Modal>
        )}
      </div>
    </div>
  );
}
