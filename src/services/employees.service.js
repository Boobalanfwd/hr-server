import Employee from "../models/employee.js";

const getAllEmployees = async () => {
  try {
    return await Employee.find();
  } catch (error) {
    throw new Error("Error fetching all employees");
  }
};

const getOneEmployee = async (id) => {
  try {
    const employee = await Employee.findById(id);
    if (!employee) {
      throw new Error("Employee not found");
    }
    return employee;
  } catch (error) {
    throw new Error("Error fetching employee");
  }
};

const createEmployee = async (data) => {
  try {
    return await Employee.create(data);
  } catch (error) {
    throw new Error("Error creating employee");
  }
};

const updateEmployee = async (id, updatedData) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });
    if (!updatedEmployee) {
      throw new Error("Employee not found");
    }
    return updatedEmployee;
  } catch (error) {
    throw new Error("Error updating employee");
  }
};

const deleteEmployee = async (id) => {
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(id);
    if (!deletedEmployee) {
      throw new Error("Employee not found");
    }
    return { message: "Employee deleted successfully" };
  } catch (error) {
    throw new Error("Error deleting employee");
  }
};

export {
  getAllEmployees,
  getOneEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
