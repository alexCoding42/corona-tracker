import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './assets/main.css';
import * as serviceWorker from "./serviceWorker";
import "./il8n";
import Loading from "./components/Loading/Loading";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();
