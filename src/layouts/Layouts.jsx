import {Outlet} from 'react-router-dom'
const Layout = ()=>{


  return(
    <> 
    <div className="App">
    
    <main>
          <Outlet />
    </main>
    </div>
    
    </>
  )
}
export default Layout;