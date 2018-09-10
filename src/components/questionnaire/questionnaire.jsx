import React, {Component} from 'react'; 
import { QuestionnaireContainer, Answer, Question } from './questionnaire.s';
import {questions, 
        answerTheQuestion,
        areAnswersCorrect
} from '../../questionnaireHandling/questionnaireHandling'

export class Questionnaire extends Component {
    constructor() {
        super();

        this.state = {
            activeQuestion: 0,
        }
    }
    onAnswerClick(questionId, answerId) {
        answerTheQuestion(questionId, answerId)
        if (this.state.activeQuestion < 2){
            this.setState({ activeQuestion: this.state.activeQuestion + 1 })
        }
        else if (this.state.activeQuestion === 2) {
            this.props.setCvAccess( areAnswersCorrect() )
        }
    }
        

    render() {
        console.log(this.state)
        return(
            <QuestionnaireContainer>
                Pytanie {this.state.activeQuestion + 1}/3
                <Question>
                    { questions[this.state.activeQuestion].question }
                </Question>
                {   questions[this.state.activeQuestion].answers.map( (answer,key) => 
                        <Answer key={key} 
                        onClick={ () => this.onAnswerClick(questions[this.state.activeQuestion].id, answer.id) }>
                            {answer.answer}
                        </Answer>
                    )
                }
            </QuestionnaireContainer>
        )
    }
}
