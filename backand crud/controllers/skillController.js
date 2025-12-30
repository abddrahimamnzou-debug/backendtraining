const Skill = require('../models/skill');

// 1. إنشاء مهارة جديدة (Create)
exports.createSkill = async (req, res) => {
    try {
        const { name, level, category, image } = req.body;
        const newSkill = new Skill({ name, level, category, image });
        await newSkill.save();
        res.status(201).json(newSkill); // 201 تعني تم الإنشاء بنجاح
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 2. جلب جميع المهارات (Read All)
exports.getAllSkills = async (req, res) => {
    try {
        const skills = await Skill.find();
        res.status(200).json(skills);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 3. جلب مهارة واحدة عن طريق ID (Read One)
exports.getSkillById = async (req, res) => {
    try {
        const skill = await Skill.findById(req.params.id);
        if (!skill) return res.status(404).json({ message: 'Skill not found' });
        res.status(200).json(skill);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 4. تعديل مهارة (Update)
exports.updateSkill = async (req, res) => {
    try {
        const updatedSkill = await Skill.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true } // باش يرجع لينا البيانات الجديدة بعد التعديل
        );
        res.status(200).json(updatedSkill);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 5. حذف مهارة (Delete)
exports.deleteSkill = async (req, res) => {
    try {
        await Skill.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Item deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};