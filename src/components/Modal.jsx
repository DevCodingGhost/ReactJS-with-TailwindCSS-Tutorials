import PropTypes from "prop-types";

export const Modal = ({
  title,
  footer,
  children,
  width,
  onClose,
  ...props
}) => {
  return (
    <div
      id="modal-overlay"
      className="bg-black/75 absolute z-[99] w-screen h-screen"
    >
      <div
        id="modal"
        className="absolute z-[100] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#121212] text-gray-200 px-4 rounded-lg divide-y-2 divide-white/50 flex flex-col"
        style={{ width }}
      >
        <header className="flex items-center justify-between">
          {typeof title === "string" ? (
            <div className="text-2xl font-bold py-2">{title}</div>
          ) : (
            title
          )}
          <div
            id="close-btn"
            className="text-3xl font-semibold leading-4 font-mono align-middle text-center text-gray-400 hover:bg-white rounded-lg p-1.5 cursor-pointer"
            onClick={() => onClose()}
          >
            &times;
          </div>
        </header>
        <main className="py-3">{children}</main>
        {footer !== null && <footer>{footer}</footer>}
      </div>
    </div>
  );
};

Modal.defaultProps = {
  footer: null,
  width: 400,
};

Modal.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  footer: PropTypes.node,
  children: PropTypes.node.isRequired,
  width: PropTypes.number,
  onClose: PropTypes.func,
};
