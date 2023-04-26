class Appointments {
  constructor() {
    this.appointments = [];
  }

  addAppointment(appointment) {
    this.appointments = [...this.appointments, appointment];
  }

  deleteAppointment(id) {
    this.appointments = this.appointments.filter(
      (appointment) => appointment.id !== id
    );
  }

  editAppointment(appointmentUpdate) {
    this.appointments = this.appointments.map((appointment) =>
      appointment.id === appointmentUpdate.id ? appointmentUpdate : appointment
    );
  }
}

export default Appointments;
