import { memo, useMemo } from 'react';
import plot from '../../assets/plot.png';
import Heading from '../../UI/Heading';
import Table from '../../UI/Table';
import USER_TABLE_CONFIG from './const';

function UserProfile({ user }) {
  const data = useMemo(
    () =>
      Object.keys(user)
        .map((key) =>
          typeof user[key] === 'string'
            ? {
                propertyName: key,
                value: user[key],
              }
            : null,
        )
        .filter((item) => !!item),
    [user],
  );

  return (
    <div className="mt-6 relative flex-1 px-4 sm:px-6 text-left">
      <Heading text="Token usage" size="xl" />
      <img src={plot} alt="Token usage plot" />
      <Heading text="User data" size="xl" className="mb-2" />
      <Table config={USER_TABLE_CONFIG} data={data} />
    </div>
  );
}

export default memo(UserProfile);
