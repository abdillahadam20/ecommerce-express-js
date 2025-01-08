const DeliveryAddress = require("../models/DeliveryAddress");

const createDeliveryAddress = async ({
  user,
  name,
  provinsi,
  kabupaten,
  kecamatan,
  kelurahan,
  detail,
}) => {
  try {
    const newDeliveryAddress = new DeliveryAddress({
      user,
      name,
      provinsi,
      kabupaten,
      kecamatan,
      kelurahan,
      detail,
    });

    await newDeliveryAddress.save();
    return newDeliveryAddress;
  } catch (error) {
    throw new Error("Gagal membuat alamat pengiriman: " + error.message);
  }
};

const getDeliveryAddresses = async (userId) => {
  try {
    return await DeliveryAddress.find({ user: userId });
  } catch (error) {
    throw new Error("Gagal mengambil alamat pengiriman: " + error.message);
  }
};

const updateDeliveryAddress = async (addressId, updatedData) => {
  try {
    const updatedAddress = await DeliveryAddress.findByIdAndUpdate(
      addressId,
      updatedData,
      { new: true }
    );
    return updatedAddress;
  } catch (error) {
    throw new Error("Gagal memperbarui alamat pengiriman: " + error.message);
  }
};

const removeDeliveryAddress = async (addressId) => {
  try {
    const deletedAddress = await DeliveryAddress.findByIdAndDelete(addressId);
    return deletedAddress;
  } catch (error) {
    throw new Error("Gagal menghapus alamat pengiriman: " + error.message);
  }
};

module.exports = {
  createDeliveryAddress,
  getDeliveryAddresses,
  updateDeliveryAddress,
  removeDeliveryAddress,
};
