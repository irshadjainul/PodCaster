import categoryModel from "../models/categoryModel.js";

const addCategory = async (req, res) => {
  try {
    const { categoryName } = req.body;
    const newCategory = new categoryModel({ categoryName });
    await newCategory.save();
    return res.status(200).json({ message: "Category Added" });
  } catch (error) {
    console.log(error);
  }
};

export default addCategory;
