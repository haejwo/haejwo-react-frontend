import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Accounts/Login';
import Signup from './pages/Accounts/Signup';
import User from './pages/Accounts/User';
import Profile from './pages/Accounts/Profile';
import Home from './pages/Home/Home';
import Review from './pages/Review';
import MoveSelect from './pages/Move/MoveSelect';
import Less20 from './pages/Move/Less20';
import More20 from './pages/Move/More20';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <NotFound/>,
    children: [
      {index: true, element: <Home/>},
      {path: '/login', element: <Login/>},
      {path: '/signup', element: <Signup/>},
      {path: '/user', element: <User/>},
      {path: '/profile', element: <Profile/>},
      {path: '/move', element: <MoveSelect/>},
      {path: '/review', element: <Review/>},
      {path: '/less20', element: <Less20/>},
      {path: '/more20', element: <More20/>},
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
