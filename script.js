const surveyLabel = document.getElementById('survey-question-label');
const surveyInput = document.getElementById('survey-question-input');
const surveyResults = document.getElementById('survey-results');

const survey = {
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
  const randomIndex = Math.floor(Math.random() * survey.questions.length);

  surveyLabel.innerHTML = survey.questions[randomIndex];
};

const displaySurveyResults = () => {
  // Update the results div
  surveyResults.innerHTML = JSON.stringify(survey);
};

const onSurveyFormSubmit = (event) => {
  event.preventDefault();

  // Store the value from the form in the survey object
  const answerObject = {
    question: surveyLabel.innerHTML,
    answer: surveyInput.value,
  };

  survey.answers.push(answerObject);

  displaySurveyResults();
  showRandomQuestion();

  // Clear the input field
  surveyInput.value = '';
};

const clearSurveyResults = (event) => {
  survey.answers = [];

  displaySurveyResults();
};

// On page load
showRandomQuestion();
