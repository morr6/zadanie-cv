export const questions = [{
    question: 'Największa planeta układu słonecznego to?',
    id: 1,
    answers: [
        { id: 1, answer: 'Saturn' }, 
        { id: 2, answer: 'Uran' },
        { id: 3, answer: 'Jowisz' }
    ],
    correctAnswerId: 3,
    answerId: null
},{
    question: 'Ile planet znajduję się w układzie słonecznym?',
    id: 2,
    answers: [
        { id:1, answer: '7' },
        { id:2, answer: '8' },
        { id:3, answer: '9' }
    ],
    correctAnswerId: 2,
    answerId: null
},{
    question: 'Przyjmiecie mnie do pracy?',
    id: 3,
    answers: [
        { id:1, answer: 'Tak' },
        { id:2, answer: 'Tak' },
        { id:3, answer: 'Tak' }
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


