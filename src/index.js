import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import Layout from "./pages/Layout";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <Layout />
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
