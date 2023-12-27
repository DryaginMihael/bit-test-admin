import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPencilAlt,
  faTrash,
  faArrowDown,
  faArrowUp,
} from '@fortawesome/free-solid-svg-icons';

export const USERS_TABLE_CONFIG = {
  columns: [
    {
      key: 'email',
      title: 'Email',
      render: (text) => <strong>{text}</strong>,
    },
    {
      key: 'name',
      title: 'Name',
    },
    {
      key: 'role',
      title: 'Role',
    },
    {
      key: 'subscription',
      title: 'Subscription',
    },
    {
      key: 'tokens',
      title: 'Tokens',
      headRender: ({ sortType }) =>
        sortType === 'desc' ? (
          <FontAwesomeIcon
            className="ml-1 cursor-pointer"
            title="Ascending"
            icon={faArrowUp}
          />
        ) : (
          <FontAwesomeIcon
            className="ml-1 cursor-pointer"
            title="Descending"
            icon={faArrowDown}
          />
        ),
    },
    {
      key: 'actions',
      title: 'Actions',
      render: () => (
        <>
          <FontAwesomeIcon
            icon={faPencilAlt}
            className="px-1 text-sky-500 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faTrash}
            className="px-1 text-sky-500 cursor-pointer"
          />
        </>
      ),
    },
  ],
};

export const PAGE_SIZE = 5;
export const TOTAL_USERS = 10;
