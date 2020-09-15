const surveyLabel = document.getElementById('survey-question-label');
const surveyInput = document.getElementById('survey-question-input');
const surveyResults = document.getElementById('survey-results');

// Object with two properties
const survey = {
  currentQuestion: '',
  questions: [
    'What is your name?',
    'What is your favorite color?',
    'Do you have a pet?',
    'How old are you?',
    'Do you love Javascript?',
  ],
  answers: [],
};

const showRandomQuestion = () => {
  // Get random index for array
  const randomIndex = Math.floor(Math.random() * survey.questions.length);

  // Update current question in our survey
  survey.currentQuestion = survey.questions[randomIndex];

  // Show the current question
  surveyLabel.innerHTML = survey.currentQuestion;
};

const onSurveyFormSubmit = (event) => {
  event.preventDefault();

  // Create a new object for the answer
  const answer = {};
  answer.question = survey.currentQuestion;
  answer.answer = surveyInput.value;

  // Add the answer to our survey answers
  survey.answers.push(answer);

  // Clear the input
  surveyInput.value = '';

  displaySurveyResults();
  showRandomQuestion();
};

const clearSurveyResults = () => {
  survey.answers = [];

  displaySurveyResults();
};

const displaySurveyResults = () => {
  surveyResults.innerHTML = `Survey Results: ${JSON.stringify(survey.answers)}`;
};

// Similar to how to pick a suspects favorite weapon
const shuffleSurveyResponses = () => {
  survey.answers.forEach((value) => {
    // Get random index for array
    const randomIndex = Math.floor(Math.random() * survey.questions.length);

    // Update current question in our survey
    value.question = survey.questions[randomIndex];

    displaySurveyResults();
  });
};

showRandomQuestion();
