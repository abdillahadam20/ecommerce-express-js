const mongoose = require("mongoose");

const DeliveryAddressSchema = new mongoose.Schema({
  name: { type: String, required: true },
  provinsi: { type: String, required: true },
  kabupaten: { type: String, required: true },
  kecamatan: { type: String, required: true },
  kelurahan: { type: String, required: true },
  detail: { type: String, required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const DeliveryAddress = mongoose.model(
  "DeliveryAddress",
  DeliveryAddressSchema
);

module.exports = DeliveryAddress;
