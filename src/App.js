import {BrowserRouter as Router, Route, Routes,useLocation} from "react-router-dom";
import Home from './page/Home'
import './assets/icon/iconfont.css'
import routes from "./util/route/routes";
import AuthRoute from "./util/route/AuthRoute";
import Content from "./components/Content";
function App() {
  const isLogin = false
  return (
      <Router>
          <div className="App">
              <Routes>
                  <Route path={'/'} element={<Home/>}>
                          {
                              routes.main.map((route,index)=>{
                                  return <Route key={index} element={
                                      <AuthRoute key={index} auth={route.auth}>
                                          {route.element}
                                      </AuthRoute>
                                  } path={route.path}></Route>
                              })
                          }
                  </Route>
                  {
                      routes.App.map((route,index)=>{
                          return <Route key={index} path={route.path} element={
                             // <AuthRoute auth={route.auth}>
                             //     {route.element}
                             // </AuthRoute>
                              route.element
                          }
                          ></Route>
                      })
                  }
              </Routes>
          </div>
      </Router>

  );
}

export default App;
