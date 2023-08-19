import React, { useState, useRef } from 'react'
import Papa from 'papaparse'
import findXMInValue from '../Utils/XMinimum'
import findMaxValue from '../Utils/XandYMaxValue'
import TableComponent from './TableComponent'
import { useReactToPrint } from 'react-to-print'

import { FormContext } from '../Context/FormGlobalContext'
import BarChartComponent from './BarChartComponent'
import { useNavigate } from 'react-router-dom'

const FormComponent = () => {
  const [formData, setFormData] = FormContext()
  const [csvAllData, setCSVAllData] = useState(null)
  const [csvData, setCSVData] = useState(null)

  const [maxX, setMaxX] = useState('')
  const [minX, setMinX] = useState('')
  const [maxY, setMaxY] = useState('')
  const [minY, setMinY] = useState('')
  const [maxZ, setMaxZ] = useState('')
  const [minZ, setMinZ] = useState('')

  const handleCSVUpload = (e) => {
    const file = e.target.files[0]
    Papa.parse(file, {
      header: true,
      complete: (result) => {
        const data = result.data
        setCSVAllData(data)
        let filterSixData = data.filter((data) => data.KP < 6)
        setCSVData(filterSixData)

        const xValues = filterSixData.map((item) => parseFloat(item.X))
        const yValues = filterSixData.map((item) => parseFloat(item.Y))
        const zValues = filterSixData.map((item) => parseFloat(item.Z))

        const minXValue = findXMInValue(xValues)
        const minYValue = findXMInValue(yValues)
        const minZValue = findXMInValue(zValues)

        const maxXValue = findMaxValue(xValues)
        const maxYValue = findMaxValue(yValues)
        const maxZValue = findMaxValue(zValues)

        setMinX(minXValue)
        setMinY(minYValue)
        setMinZ(minZValue)
        setMaxX(maxXValue)
        setMaxY(maxYValue)
        setMaxZ(maxZValue)
      },
    })
  }

  const componentPDF = useRef()
  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: 'FinalResult',
    onAfterPrint: () => alert('Data saved in PDF'),
  })

  return (
    <div>
      <div className="w-full mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-semibold mb-4">Upload CSV File</h1>
        <label htmlFor="csvUpload" className="block mb-2">
          Choose a CSV file:
        </label>
        <input
          type="file"
          id="csvUpload"
          accept=".csv"
          className="border rounded-lg py-2 px-4 w-full focus:outline-none focus:border-blue-500"
          onChange={handleCSVUpload}
        />
      </div>

      <div className="grid grid-flow-row lg:grid-cols-2 gap-3 bg-slate-50">
        <div className="shadow-md">
          {csvData && <TableComponent csvData={csvData} />}
        </div>
        <div className="shadow-md">
          {csvData && <BarChartComponent data={csvData} />}
        </div>
      </div>
      {csvData && (
        <div>
          <div ref={componentPDF}>
            <div className="bg-gray-100 p-8">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl  mb-2">
                  <span className="text-gray-700 font-lg font-semibold  ">
                    Project Name:{' '}
                  </span>
                  {formData.pName}{' '}
                </h2>
                <span className="text-gray-700 font-medium">Description</span>
                <p className="text-gray-600 mb-4">{formData.pDescription} </p>
                <div className="flex items-center space-x-4 mb-2">
                  <span className="text-gray-700 font-medium">Client: </span>
                  <span className="text-gray-600"> {formData.pClient}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700 font-medium">Contractor:</span>
                  <span className="text-gray-600">{formData.pContractor} </span>
                </div>
              </div>
            </div>
            <table className="min-w-full divide-y divide-gray-200">
              <caption className="text-gray-500 text-lg mb-2">
                {' '}
                Result Table{' '}
              </caption>

              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    X maximum
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    X minimum
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Y maximum
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Y minimum
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Z maximum
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Z minimum
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">{maxX}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{minX}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{maxY} </td>
                  <td className="px-6 py-4 whitespace-nowrap">{minY} </td>
                  <td className="px-6 py-4 whitespace-nowrap">{maxZ} </td>
                  <td className="px-6 py-4 whitespace-nowrap">{minZ} </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-10 text-center">
            <button
              onClick={generatePDF}
              className="btn btn-primary rounded-sm  mx-auto"
            >
              DownLoad PDF
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default FormComponent
