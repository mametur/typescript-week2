interface QuestionResponse {
            "category": string,
            "id": string,
            "correctAnswer": string,
            "incorrectAnswers": string[],
            "question": string,
            "tags": string[],
            "type": string,
            "difficulty": string,
            "regions": string[]
}
export default QuestionResponse;