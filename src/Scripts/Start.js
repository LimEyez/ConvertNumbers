import Conversion from "../Scripts/Сonversion";
import store from "../Stores/store";
import store2 from "../Stores/store2";
const Start = ({ id_convert, id_number }) => {
  store.dispatch({ type: 'clear' });
  const sys = store2.getState().sys;
  const convesion = new Conversion({ id_number, id_convert, sys });

  if (sys === '16' || sys === '8' || sys === '2') {
    convesion.checking_sys()
  }
  else {
    convesion.checking();
  }
}

export default Start