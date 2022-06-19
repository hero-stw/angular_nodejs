import Category from "../models/category";
import Book from "../models/books";

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find().exec();
    res.json(categories);
  } catch (error) {
    res.json({ message: "Can not find any category" });
  }
};

export const getCategory = async (req, res) => {
  try {
    const category = await Category.findOne({ _id: req.params.id }).exec();
    const books = await Book.find({ category }).select("-category").exec();
    res.json({ category, books });
  } catch (error) {
    res.json({ message: "Can not find any category" });
  }
};

export const addCategory = async (req, res) => {
  try {
    const category = await new Category(req.body).save();
    res.json(category);
  } catch (error) {
    res.json({ message: "Can not add category" });
  }
};
export const updateCategory = async (req, res) => {
  try {
    const condition = { _id: req.params.id };
    const update = { $set: req.body };
    const option = { new: true };
    const category = await Category.findOneAndUpdate(
      condition,
      update,
      option
    ).exec();
    res.status(200).json(category);
  } catch (err) {
    res.status(400).json({
      message: "Can not update category",
    });
  }
};
export const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete({
      _id: req.params.id,
    }).exec();
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ message: "Can not delete category" });
  }
};
