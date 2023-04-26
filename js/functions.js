import Appointments from "./classes/Appointments.js";
import UI from "./classes/UI.js";

import {
  petInput,
  ownerInput,
  telephoneInput,
  dateInput,
  hourInput,
  symptomsInput,
  formAppointment,
} from "./selectors.js";

const ui = new UI();
const manageAppointments = new Appointments();

//Appointment in object
const appointmentObj = {
  pet: "",
  owner: "",
  telephone: "",
  date: "",
  hour: "",
  symptoms: "",
};

let editing = false;

//Data of appointment
export function appointmentData(e) {
  appointmentObj[e.target.name] = e.target.value;
}

export function newAppointment(e) {
  e.preventDefault();
  const { pet, owner, telephone, date, hour, symptoms } = appointmentObj;

  //Field validation
  if (
    pet === "" ||
    owner === "" ||
    telephone === "" ||
    date === "" ||
    hour === "" ||
    symptoms === ""
  ) {
    ui.printAlert("All fields are required", "error");

    return;
  }

  if (editing) {
    manageAppointments.editAppointment({ ...appointmentObj });
    ui.printAlert("Edited successful");
    formAppointment.querySelector('button[type="submit"]').textContent =
      "Create Appointment";
    editing = false;
  } else {
    //Get ID
    appointmentObj.id = Date.now();
    //New appointment
    manageAppointments.addAppointment({ ...appointmentObj });
  }

  // Restart the object
  restartObj();

  // Resetting the inputs
  formAppointment.reset();

  ui.printAppointments(manageAppointments);
}

export function restartObj() {
  (appointmentObj.pet = ""),
    (appointmentObj.owner = ""),
    (appointmentObj.telephone = ""),
    (appointmentObj.date = ""),
    (appointmentObj.hour = ""),
    (appointmentObj.symptoms = "");
}

export function deleteAppointment(id) {
  manageAppointments.deleteAppointment(id);

  ui.printAlert("The appointment delete successful");

  ui.printAppointments(manageAppointments);
}

export function loadEdition(appointment) {
  const { pet, owner, telephone, date, hour, symptoms, id } = appointment;

  //Fill the inputs
  petInput.value = pet;
  ownerInput.value = owner;
  telephoneInput.value = telephone;
  dateInput.value = date;
  hourInput.value = hour;
  symptomsInput.value = symptoms;

  //fill the object
  appointmentObj.pet = pet;
  appointmentObj.owner = owner;
  appointmentObj.telephone = telephone;
  appointmentObj.date = date;
  appointmentObj.hour = hour;
  appointmentObj.symptoms = symptoms;
  appointmentObj.id = id;
  formAppointment.querySelector('button[type="submit"]').textContent =
    "Save Changes";

  editing = true;
}
