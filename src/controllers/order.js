import Orders from "../models/orders";

export const getOrders = async (req, res) => {
  try {
    const orders = await Orders.find().exec();
    res.json(orders);
  } catch (error) {
    res.json({ message: "Can not find any order" });
  }
};

export const getOrder = async (req, res) => {
  try {
    const order = await Orders.findOne({ _id: req.params.id }).exec();
    // const books = await order.populate("products.product").execPopulate();
    res.json(order);
  } catch (error) {
    res.json({ message: "Can not find any order" });
  }
};

export const updateOrderStatus = async (req, res) => {
  try {
    const order = await Orders.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { status: req.body.status } },
      { new: true }
    ).exec();
    return res.status(200).json(order);
  } catch (error) {
    return res.status(500).send("Change order status failed");
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const order = await Orders.findOneAndDelete({
      _id: req.params.id,
    }).exec();
    return res.status(201).json(order);
  } catch (error) {
    return res.status(500).send("Delete order failed");
  }
};

export const createClientOrder = async (req, res) => {
  try {
    const order = await new Orders(req.body).save();
    res.status(201).json(order);
  } catch (error) {
    return res.status(500).send("Create order failed");
  }
};
