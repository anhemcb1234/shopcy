import {
  Axios
} from "./Axios";

function getHome() {
  return Axios.get("/api/home");
}

export const someService = {
  getHome
};
