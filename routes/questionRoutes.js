const express = require('express');
const generateQuestionPaper = require('../controllers/questionController');

const router = express.Router();

router.post('/generate-paper', generateQuestionPaper);

module.exports = router;
