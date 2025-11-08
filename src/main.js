import { body } from "./components/body-content.js";
import { header } from "./components/header.js";

import "./style.css";

document.querySelector("#app").append(header(), body());
