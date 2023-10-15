import { redirect,RouterProvider} from "react-router-dom";

import './assets/icon/iconfont.css'
import router from "./util/route/routes";
import store from "./util/store/store";


function App() {
  return (
      // 路由配置
      <RouterProvider router={router}>
      </RouterProvider>
      // <Router>
      //     <div className="App">
      //         <Routes>
      //             <Route path={'/'} element={<Home/>}>
      //                     {
      //                         routes.main.map((route,index)=>{
      //                             return <Route key={index} element={
      //                                 <AuthRoute key={index} auth={route.auth}>
      //                                     {route.element}
      //                                 </AuthRoute>
      //                             } path={route.path}></Route>
      //                         })
      //                     }
      //             </Route>
      //             {
      //                 routes.App.map((route,index)=>{
      //                     return <Route key={index} path={route.path} element={
      //                        // <AuthRoute auth={route.auth}>
      //                        //     {route.element}
      //                        // </AuthRoute>
      //                         route.element
      //                     }
      //                     ></Route>
      //                 })
      //             }
      //         </Routes>
      //     </div>
      // </Router>

  );
}

export default App;
