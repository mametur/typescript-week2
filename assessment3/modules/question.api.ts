import QuestionResponse from '../types/QuestionResponse'
const  fetchQuestion = async ():Promise<QuestionResponse> => {
    // Fetch a question from thehttps://the-trivia-api.com/api/questions?limit=5 API
   const response = await fetch('https://the-trivia-api.com/api/questions');
   const questions = await response.json();
       
    return questions;
}

export default fetchQuestion;