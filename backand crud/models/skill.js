const mongoose = require('mongoose');

// تعريف الـ Schema الخاص بالمهارات [cite: 217]
const skillSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true // حقل إجباري [cite: 219]
  },
  level: { 
    type: String, 
    enum: ['beginner', 'intermediate', 'advanced'], // الخيارات المسموح بها فقط [cite: 220]
    required: true 
  },
  category: { 
    type: String, 
    required: true // حقل إجباري [cite: 221]
  },
  image: { 
    type: String // حقل اختياري لرابط الصورة [cite: 222]
  }
});

// تصدير النموذج (Model) لاستخدامه في ملفات أخرى
module.exports = mongoose.model('Skill', skillSchema);