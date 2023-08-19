const TableComponent = ({ csvData }) => {
  return (
    <div className="p-4">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              KP column
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              X column
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Y column
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Z column
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {csvData &&
            csvData.map((row, index) => {
              return (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{row.KP}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.X}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.Y} </td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.Z} </td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default TableComponent
