export const questions = [{
    question: 'Największa planeta układu słonecznego to?',
    id: 1,
    answers: [
        { id: 1, answer: 'Saturn' }, 
        { id: 2, answer: 'Uran' },
        { id: 3, answer: 'Jowisz' }
    ],
    correctAnswer: 3,
    answered: null
},{
    question: 'Ile planet znajduję się w układzie słonecznym?',
    id: 2,
    answers: [
        { id:1, answer: '7' },
        { id:2, answer: '8' },
        { id:3, answer: '9' }
    ],
    correctAnswer: 2,
    answered: null
},{
    question: 'Przyjmiecie mnie do pracy?',
    id: 3,
    answers: [
        { id:1, answer: 'Tak' },
        { id:2, answer: 'Tak' },
        { id:3, answer: 'Tak' }
    ],
    correctAnswer: 1,
    answered: null
}];

export const answerTheQuestion = (questionId, answerId) => {
    questions.map( question => {
        if (question.id === questionId) {
            question.answered = answerId
        }           
    })
}   

export const areAnswersCorrect = () => {
    return questions.map( question => {
        return question.correctAnswer === question.answered
    }).every( (element) => {
        return ( element === true);
      })
}


