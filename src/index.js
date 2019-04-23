import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";
import App from "./App";
import { render } from 'react-snapshot';

import registerServiceWorker from './registerServiceWorker';

render(<App /> , document.getElementById('root'));

registerServiceWorker();
