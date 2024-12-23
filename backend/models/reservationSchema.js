import mongoose from "mongoose";
import validator from "validator";
// import isEmail from "validator/lib/isemail";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First name must contain at least 3 characters buddy!"],
    maxLength: [20, "First name cannot exceed more than 20 character buddy!"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last name must contain at least 3 characters buddy!"],
    maxLength: [20, "Last name cannot exceed more than 20 character buddy!"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid Email!"],
  },
  Phone: {
    type: String,
    required: true,
    minLength: [10, "Phone number must contain only 10 digits buddy!"],
    maxLength: [10, "Phone number must contain only 10 digits buddy!"],
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
