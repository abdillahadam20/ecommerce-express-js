const OrderStatus = require("../models/OrderStatus");

const createOrderStatus = async (status) => {
  const newOrderStatus = new OrderStatus({ status });
  await newOrderStatus.save();
  return newOrderStatus;
};

const getOrderStatusById = async (statusId) => {
  return await OrderStatus.findById(statusId);
};

const getAllOrderStatuses = async () => {
  return await OrderStatus.find();
};

const updateOrderStatus = async (statusId, status) => {
  return await OrderStatus.findByIdAndUpdate(
    statusId,
    { status },
    { new: true }
  );
};

const deleteOrderStatus = async (statusId) => {
  return await OrderStatus.findByIdAndDelete(statusId);
};

module.exports = {
  createOrderStatus,
  getOrderStatusById,
  getAllOrderStatuses,
  updateOrderStatus,
  deleteOrderStatus,
};
