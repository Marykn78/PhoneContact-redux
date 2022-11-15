import "./App.css";
import React from 'react';
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist"
import router from "./Routes/Routes";
import Form  from "./Context/ContextForm";

let persistor =persistStore(store)
function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
        <Form>
          <RouterProvider router={router} />
        </Form>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
