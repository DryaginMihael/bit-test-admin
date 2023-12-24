import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import plot from '../assets/plot.png';
import history from '../assets/history.png';

function Drawer({ isOpen, onClose, user }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
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
          <div className="relative w-screen max-w-md">
            <div className="h-full flex flex-col py-6 bg-blue-gray shadow-xl overflow-y-scroll">
              <div className="px-4 sm:px-6">
                <div className="flex items-start justify-between">
                  <h2 className="text-lg font-medium" id="slide-over-heading">
                    {user.email}
                  </h2>
                  <div className="ml-3 h-7 flex items-center">
                    <button
                      className="rounded-md text-white hover:text-gray-100 focus:outline-none"
                      type="button"
                      onClick={onClose}
                    >
                      <span className="sr-only">Close panel</span>
                      <FontAwesomeIcon icon={faXmark} size="xl" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-6 relative flex-1 px-4 sm:px-6 text-left">
                <h2 className="text-xl font-bold text-left">
                  Использование токенов
                </h2>
                <img src={plot} alt="График использования токенов" />
                <img src={history} alt="История операций" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Drawer;
