const deliveryService = require("../services/deliveryService");

const createDeliveryAddress = async (req, res) => {
  try {
    const { name, provinsi, kabupaten, kecamatan, kelurahan, detail } =
      req.body;
    const userId = req.user._id;

    const newAddress = await deliveryService.createDeliveryAddress({
      user: userId,
      name,
      provinsi,
      kabupaten,
      kecamatan,
      kelurahan,
      detail,
    });

    res.status(201).json({
      message: "Alamat pengiriman berhasil dibuat",
      data: newAddress,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getDeliveryAddresses = async (req, res) => {
  try {
    const userId = req.user._id;
    const addresses = await deliveryService.getDeliveryAddresses(userId);

    res.status(200).json({ addresses });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateDeliveryAddress = async (req, res) => {
  try {
    const addressId = req.params.addressId;
    const { name, provinsi, kabupaten, kecamatan, kelurahan, detail } =
      req.body;

    const updatedAddress = await deliveryService.updateDeliveryAddress(
      addressId,
      {
        name,
        provinsi,
        kabupaten,
        kecamatan,
        kelurahan,
        detail,
      }
    );

    res.status(200).json({
      message: "Alamat pengiriman berhasil diperbarui",
      data: updatedAddress,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const removeDeliveryAddress = async (req, res) => {
  try {
    const addressId = req.params.addressId;

    const deletedAddress = await deliveryService.removeDeliveryAddress(
      addressId
    );

    res.status(200).json({
      message: "Alamat pengiriman berhasil dihapus",
      data: deletedAddress,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createDeliveryAddress,
  getDeliveryAddresses,
  updateDeliveryAddress,
  removeDeliveryAddress,
};
