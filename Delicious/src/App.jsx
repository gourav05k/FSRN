// import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import { Outlet } from 'react-router-dom'
import myuserContext from './utils/myuserContext'
import { useContext, useState } from 'react'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'

/**
 * Header
 * Nav Bar
 * Body
 * Filters
 * Cards
 * Footer
 */

function App() {

  const [userName, setUserName] = useState("Gourav");
  return (
    <>
      {/* provide the access to appStore to entire appn */}
      <Provider store={appStore}>
        <myuserContext.Provider value={{ userName, setUserName }}>      {/*providing the user context to entire appn.*/}
          <Header />
          <Outlet />
          <Footer />
        </myuserContext.Provider>
      </Provider>
    </>
  )
}

export default App