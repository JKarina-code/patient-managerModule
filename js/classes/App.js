import {appointmentData,newAppointment} from '../functions.js'
import {
    petInput,
    ownerInput,
    telephoneInput,
    dateInput,
    hourInput,
    symptomsInput,
    formAppointment
  } from "../selectors.js";

class App {
  constructor() {
    this.initApp();
  }

  initApp() {
    petInput.addEventListener("change", appointmentData);
    ownerInput.addEventListener("change", appointmentData);
    telephoneInput.addEventListener("change", appointmentData);
    dateInput.addEventListener("change", appointmentData);
    hourInput.addEventListener("change", appointmentData);
    symptomsInput.addEventListener("change", appointmentData);

    //Form new appointment
    formAppointment.addEventListener("submit", newAppointment);
  }
}

export default App;