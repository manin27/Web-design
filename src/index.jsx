import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";
import Politic from './Page/Politic';
import Agreement from './Page/Agreement';
import Main from './Page/Main';
import { createStore } from "redux";
import allReducers from './reducers';
import { Provider } from "react-redux";

const store = createStore(allReducers);

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <App/>
    },
    {
      path:"politic/",
      element: <Politic />,
      errorElement: <App/>
    },
    {
      path: "agreement/",
      element: <Agreement />,  
      errorElement: <App/>      
    }      
  ]);

ReactDOM.createRoot(document.getElementById('App')).render(
    <Provider store = {store} >
      <React.StrictMode>
          <RouterProvider router={router} />
      </React.StrictMode>
    </Provider>
);

