const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true }, // e.g. "Languages", "Frameworks", "Tools"
    level: { type: Number, min: 1, max: 5, default: 3 }, // 1-5 proficiency
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Skill', skillSchema);
