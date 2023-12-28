import { memo, useMemo } from 'react';
import Heading from '../../UI/Heading';
import Table from '../../UI/Table';
import { USER_TABLE_CONFIG, CHART_DATA } from './const';
import Chart from '../../UI/Chart';

function UserProfile({ user }) {
  const data = useMemo(
    () =>
      Object.keys(user).reduce((acc, key) => {
        if (typeof user[key] === 'string') {
          acc.push({
            propertyName: key,
            value: user[key],
          });
        }
        return acc;
      }, []),
    [user],
  );

  return (
    <div className="mt-6 px-4 sm:px-6 relative flex-1 text-left">
      <Heading text="Token usage" size="xl" className="mb-4" />
      <Chart data={CHART_DATA} />
      <Heading text="User data" size="xl" className="mb-4" />
      <Table config={USER_TABLE_CONFIG} data={data} />
    </div>
  );
}

export default memo(UserProfile);
