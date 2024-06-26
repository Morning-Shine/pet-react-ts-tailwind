import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { TModalProps } from './type';
import { IoMdClose } from 'react-icons/io';
import classNames from 'classnames';

const Modal: React.FC<TModalProps> = (props) => {
  const { children, onClose, size } = props;
  let top;
  switch (size) {
    case 'sm':
      top = 'top-56';
      break;
    case 'md':
      top = 'top-24';
      break;
  }

  const handleKeypress = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const onCloseHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeypress);
    return () => {
      window.removeEventListener('keydown', handleKeypress);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const render = (
    <div
      className="fixed top-0 w-full h-full bg-[rgba(26,26,26,0.5)] dark:bg-[rgba(26,26,26,0.7)]"
      onClick={(e) => onCloseHandler(e)}
    >
      <div
        className={classNames(
          'h-100 w-min bg-white dark:bg-black bg-opacity-100 mx-auto p-5 rounded-md relative',
          top
        )}
      >
        <div className="absolute top-2 right-2 text-black dark:text-white hover:text-red-600 hover:dark:text-red-800">
          <IoMdClose
            className="cursor-pointer"
            onClick={onClose}
          />
        </div>
        {children}
      </div>
    </div>
  );

  return <>{createPortal(render, document.body)}</>;
};

export default Modal;
