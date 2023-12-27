function Table({ data, config }) {
  const { columns, handlers, options } = config;

  return (
    <table className="min-w-full text-nowrap overflow-hidden rounded-lg">
      <thead className="bg-dark">
        <tr className="text-xs font-medium text-gray-500 tracking-wider">
          {columns.map((column) => (
            <th
              key={column.key}
              scope="col"
              className="px-6 py-3"
              onClick={column.key === 'tokens' ? handlers?.onSort : null}
            >
              {column.title}
              {!!column.headRender && column.headRender(options)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-800 whitespace-nowrap text-sm text-gray-100">
        {data.map((item) => (
          <tr key={item.id} className="cursor-pointer">
            {columns.map((column) => (
              <td
                key={column.key}
                className="px-6 py-4 whitespace-nowrap"
                onClick={
                  handlers?.onClick ? () => handlers.onClick(item) : null
                }
              >
                {column.render
                  ? column.render(item[column.key], item)
                  : item[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
