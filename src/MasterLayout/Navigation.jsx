import styles from './Navigation.module.css'
import { NavLink } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Loader from '../LoaderUtil/Loader'
const HomePage = lazy(() => import('../Pages/HomePage'))
const FormPage = lazy(() => import('../Pages/FormPage'))
const ResultPage = lazy(() => import('../Pages/ResultPage'))

const Navigation = () => {
  return (
    <>
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Suspense
            fallback={
              <div>
                <Loader />
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/form" element={<FormPage />} />
              <Route path="/result" element={<ResultPage />} />
            </Routes>
          </Suspense>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay">
            {' '}
          </label>

          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content mr-2 shadow-lg z-20">
            <h1 className="text-yellow-900 text-xl mb-4 font-semibold">
              {' '}
              Oil & Gas
            </h1>
            <li className={styles.margin}>
              <NavLink to="/">Home </NavLink>
            </li>
            <li className={styles.margin}>
              <NavLink to="/form">Form</NavLink>
            </li>
            <li className={styles.margin}>
              <NavLink to="/result">Result</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navigation
