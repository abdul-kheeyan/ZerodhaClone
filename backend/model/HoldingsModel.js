const mongoose = require("mongoose");
const HoldingsSchema = require("../schemas/HoldingsSchema");

// ❌ new model() nahi hota
// ✅ direct mongoose.model()
const HoldingsModel = mongoose.model("holding", HoldingsSchema);

module.exports = { HoldingsModel };
