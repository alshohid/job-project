import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormContext } from '../Context/FormGlobalContext'

const ProjectInfoForm = () => {
  const [formData, setFormData] = FormContext({})
  const [formObj, setFormObj] = useState({
    pName: '',
    pDescription: '',
    pClient: '',
    pContractor: '',
  })
  const inputOnChange = (inputName, inputValue) => {
    setFormObj((formValue) => ({
      ...formValue,
      [inputName]: inputValue,
    }))
  }
  const navigate = useNavigate()
  const handleFormSubmit = (e) => {
    e.preventDefault()
    setFormData(formObj)
    navigate('/result')
  }

  return (
    <div className="bg-gradient-to-r from-white to-text-slate-500 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Project Name
            </label>
            <input
              value={formObj.pName}
              onChange={(e) => inputOnChange('pName', e.target.value)}
              type="text"
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500    "
              placeholder="Enter project name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Project Description
            </label>
            <textarea
              value={formObj.pDescription}
              onChange={(e) => inputOnChange('pDescription', e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 "
              rows="3"
              required
              placeholder="Enter project description"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Client Name
            </label>
            <input
              value={formObj.pClient}
              onChange={(e) => inputOnChange('pClient', e.target.value)}
              type="text"
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500  "
              placeholder="Enter client name"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Contractor
            </label>
            <input
              value={formObj.pContractor}
              onChange={(e) => inputOnChange('pContractor', e.target.value)}
              type="text"
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-200  "
              placeholder="Enter contractor"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none  "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProjectInfoForm
