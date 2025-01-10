const orderStatusService = require("../services/orderStatusService");

const createOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const newOrderStatus = await orderStatusService.createOrderStatus(status);

    res.status(201).json({
      message: "Status pesanan berhasil dibuat",
      orderStatus: newOrderStatus,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getOrderStatusById = async (req, res) => {
  try {
    const statusId = req.params.statusId;
    const orderStatus = await orderStatusService.getOrderStatusById(statusId);

    res.status(200).json({ orderStatus });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllOrderStatuses = async (req, res) => {
  try {
    const orderStatuses = await orderStatusService.getAllOrderStatuses();

    res.status(200).json({ orderStatuses });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const statusId = req.params.statusId;
    const { status } = req.body;
    const updatedOrderStatus = await orderStatusService.updateOrderStatus(
      statusId,
      status
    );

    res.status(200).json({
      message: "Status pesanan berhasil diperbarui",
      orderStatus: updatedOrderStatus,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteOrderStatus = async (req, res) => {
  try {
    const statusId = req.params.statusId;
    await orderStatusService.deleteOrderStatus(statusId);

    res.status(200).json({
      message: "Status pesanan berhasil dihapus",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createOrderStatus,
  getOrderStatusById,
  getAllOrderStatuses,
  updateOrderStatus,
  deleteOrderStatus,
};
