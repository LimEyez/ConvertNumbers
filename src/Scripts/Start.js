import Checking from "./Logic/Checking";
import store from "../Stores/store";
import store2 from "../Stores/store2";
const Start = ({ id_convert, id_number }, server) => {
  store.dispatch({ type: 'clear' });
  const sys = store2.getState().sys;
  const params = { id_number, id_convert, sys };
  const number = document.getElementById(id_number).value;
  const params_to_backend = { number, sys };
  const checking = new Checking(params);
  let result = null;

  if (sys === '16' || sys === '8' || sys === '2') {
    result = checking.checking_sys() ? result = server.convert(params_to_backend) : null;
  }
  else {
    result = checking.checking() ? result = server.convert(params_to_backend) : null;
  }
  if (result) {
    result.then((result) => {
      if (result.text === "Всё нормально?!?") {
        store.dispatch({ type: "text", value: result.text });
      }
      else {
        for (let key in result) {
          store.dispatch({ type: key, value: result[key] });
        }
      }
    })
  }
}

export default Start