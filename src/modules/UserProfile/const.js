export const USER_TABLE_CONFIG = {
  columns: [
    {
      key: 'propertyName',
      title: 'Name',
    },
    {
      key: 'value',
      title: 'Value',
    },
  ],
};

export const CHART_DATA = Array.from({ length: 30 }).map((_, i) => ({
  name: `${i} янв 2023`,
  value: Math.round(Math.random() * 200) + 400,
}));
