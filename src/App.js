import './App.css';
import RegisterWithReactBootstrap from './components/RegisterWithReactBootstrap';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Main from './layout/Main';
import Login from './components/Login';

// const auth = getAuth(app);

// const handleRegister = (event) => {
//   event.preventDefault();
//   // target full form ke pabe mane form er moddhe ja ache
//   const email = event.target.email.value;
//   const password = event.target.password.value;
//   console.log(email, password);
// }

// const handleEmailBlur = (event) => {
//   console.log(event.target.value)
// }

// const handlePasswordChange = (event) => {
//   console.log(event.target.value)
// }

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element:<RegisterWithReactBootstrap></RegisterWithReactBootstrap>
      },
      {
        path: '/register',
        element:<RegisterWithReactBootstrap></RegisterWithReactBootstrap>
      },
      {
        path: '/login',
        element:<Login></Login>
      },
    ]
  }
])

function App() {
  return (
    <div>
      {/* <form onSubmit={handleRegister}>
        // onChange sathe sathe output dekhay jotobar input dewa hobe totobar onBlur sathe sathe dekhay na focus jekhane thake oikhane dekhay
        <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder="email" />
        <br />
        <input onChange={handlePasswordChange} type="password" name="password" id="" placeholder="password" />
        <br />
        <button type="submit">Register</button>
      </form> */}
      {/* <RegisterWithBootstrap></RegisterWithBootstrap> */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;