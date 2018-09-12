export const questions = [{
    question: 'The largest planet in the Solar System is?',
    id: 1,
    answers: [
        { id: 1, answer: 'Saturn' }, 
        { id: 2, answer: 'Uranus' },
        { id: 3, answer: 'Jupiter' }
    ],
    correctAnswerId: 3,
    answerId: null
},{
    question: 'How many planets are in the Solar System?',
    id: 2,
    answers: [
        { id:1, answer: '7' },
        { id:2, answer: '8' },
        { id:3, answer: '9' }
    ],
    correctAnswerId: 2,
    answerId: null
},{
    question: 'Which of these planets is closest to the Sun?',
    id: 3,
    answers: [
        { id:1, answer: 'Mercury' },
        { id:2, answer: 'Venus' },
        { id:3, answer: 'Mars' }
    ],
    correctAnswerId: 1,
    answerId: null
}];

export const Question = {    
    answerQuestion: (question, answerId) => {
      return {
          ...question,
          answerId
      }
    },
    areCorrect: (questions) => {
        return questions.every(question => 
            question.correctAnswerId === question.answerId
        )
    },
    getQuestionById: (questions, id) => {
        return questions.find(question => question.id === id);
    }
  }


