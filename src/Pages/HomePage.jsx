import React from 'react'
import { Link } from 'react-router-dom'
const HomePage = () => {
  return (
    <div className=" container mx-auto">
      <header className="bg-cover bg-center h-96 flex items-center">
        <div className="container mx-auto text-center ">
          <h1 className="text-4xl font-bold mb-4">Fueling the Future</h1>
          <p className="text-lg mb-6">
            Providing reliable energy solutions worldwide.
          </p>
          <Link
            to="/form"
            className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            Go to Form
          </Link>
        </div>
      </header>
    </div>
  )
}

export default HomePage
