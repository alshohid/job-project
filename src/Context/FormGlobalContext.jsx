import { createContext, useContext, useState } from 'react'

const FormData = createContext()
const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({})

  return (
    <div>
      <FormData.Provider value={[formData, setFormData]}>
        {children}
      </FormData.Provider>
    </div>
  )
}
const FormContext = () => useContext(FormData)
export { FormDataProvider, FormContext }
