import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    gender: { type: String, required: true },
    mobile_number: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    date_of_birth: { type: Date },
    department: { type: String },
    position: { type: String },
    salary: { type: Number },
    joined_date: { type: Date, required: true },
    resigning_date: { type: Date, required: true },
    address: { type: String },
  },
  { timestamps: true }
);

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;
