const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
    plateNumber: { type: String, required: true, unique: true },
    capacity: { type: Number, required: true },
    status: { type: String, enum: ['available', 'in use'], default: 'available' },
}, { timestamps: true });

module.exports = mongoose.model('Vehicle', VehicleSchema);

