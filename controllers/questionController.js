const questionData = require('../utils/questionData');

const generateQuestionPaper = (req, res) => {
  try{
    const { totalMarks, difficultyPercentages } = req.body;
    
    // Filter questions based on difficulty level
    const easyQuestions = questionData.filter((question) => question.difficulty === "Easy");
    const mediumQuestions = questionData.filter((question) => question.difficulty === "Medium");
    const hardQuestions = questionData.filter((question) => question.difficulty === "Hard");

    //count of question to be generated
    const easyCount = ((difficultyPercentages.Easy/100) * totalMarks) / 5;
    const mediumCount = ((difficultyPercentages.Medium/100) * totalMarks) / 10;
    const hardCount = ((difficultyPercentages.Hard/100) * totalMarks) / 15;

    // Check if there are sufficient questions available
    if (easyQuestions.length < easyCount || mediumQuestions.length < mediumCount || hardQuestions.length < hardCount) {
      throw new Error("Total questions in the datastore are not sufficient to generate the paper.");
    }
  
    //Checking if provided percentage distribution is correct
    if(difficultyPercentages.Easy+difficultyPercentages.Medium+difficultyPercentages.Hard !== 100){
      throw new Error("Invalid difficulty percentages. Total percentage exceeds or is below 100%.");
    }
    if(!Number.isInteger(easyCount) || !Number.isInteger(mediumCount) || !Number.isInteger(hardCount)){
      throw new Error("Distribution of percentages is not valid.");
    }

    // Generate the question paper based on the specified distribution
    const questionPaper = [
      ...getRandomSubset(easyQuestions, easyCount),
      ...getRandomSubset(mediumQuestions, mediumCount),
      ...getRandomSubset(hardQuestions, hardCount),
    ];

    res.json(questionPaper);
  }catch (error) {
    res.status(500).json({ error: error.message });
  }
};
  
function getRandomSubset(array, count) {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

module.exports = generateQuestionPaper;
