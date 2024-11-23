import {
  createEmployee,
  deleteEmployee,
  getAllEmployees,
  getOneEmployee,
  updateEmployee,
} from "../services/employees.service.js";

const getAll = async (req, res) => {
  try {
    const employee = await getAllEmployees();
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOne = async (req, res) => {
  try {
    const employee = await getOneEmployee(req.params.id);
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const create = async (req, res) => {
  try {
    const newEmployee = await createEmployee(req.body, req.file);
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const alteredEmployee = await updateEmployee(req.params.id, req.body);
    res.status(200).json(alteredEmployee);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const remove = async (req, res) => {
  try {
    const removeEmployee = await deleteEmployee(req.params.id);
    res.status(200).json(removeEmployee);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export { getAll, getOne, create, remove, update };
