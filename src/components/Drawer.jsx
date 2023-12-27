import { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Heading from '../UI/Heading';

function Drawer({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 bg-black bg-opacity-25 transition-opacity"
        onKeyDown={onClose}
        onClick={onClose}
      />
      <section
        className="absolute inset-y-0 right-0 sm:pl-10 max-w-full flex"
        aria-labelledby="slide-over-heading"
      >
        <div className="relative w-screen max-w-md h-full flex flex-col py-6 bg-blue-gray shadow-xl overflow-y-scroll px-4 sm:px-6">
          <div className="flex items-start justify-between">
            <Heading text={title} size="lg" />
            <div className="ml-3 h-7 flex items-center">
              <button
                className="rounded-md hover:text-gray-100 focus:outline-none"
                type="button"
                onClick={onClose}
              >
                <span className="sr-only">Close panel</span>
                <FontAwesomeIcon icon={faXmark} size="xl" />
              </button>
            </div>
          </div>
          {children}
        </div>
      </section>
    </div>
  );
}

export default memo(Drawer);
