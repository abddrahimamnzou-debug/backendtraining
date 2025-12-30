const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const skillController = require('./controllers/skillController');

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✔ MongoDB connected'))
    .catch(err => console.error('Connection error:', err));

// Routes
app.post('/api/skills', skillController.createSkill);
app.get('/api/skills', skillController.getAllSkills);
app.get('/api/skills/:id', skillController.getSkillById);
app.put('/api/skills/:id', skillController.updateSkill);
app.delete('/api/skills/:id', skillController.deleteSkill);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});





