import React, {Component} from 'react'; 
import { QuestionnaireContainer, Answer, Question } from './questionnaire.s';
import {questions, Question as QuestionModel } from '../../questionnaireHandler/questionnaireHandler'

export class Questionnaire extends Component {
    
    constructor() {
        super();

        this.state = {
            activeQuestionId: 1,
            questions: questions
        }
    }

    
    onAnswerClick(activeQuestion, answerId) {
        
        this.setState({ 
            questions: this.state.questions.map(
                question => 
                question.id === this.state.activeQuestionId ?
                QuestionModel.answerQuestion(question, answerId) :
                question
            )
        }, () => {
            if (activeQuestion.id < this.state.questions.length) {
                this.setState({ activeQuestionId: this.state.activeQuestionId + 1 })
            } else if (activeQuestion.id === this.state.questions.length) {
                this.props.setCvAccess( QuestionModel.areCorrect(this.state.questions) )
            }
        })
    }
        
    render() {        
        const activeQuestion = QuestionModel.getQuestionById(this.state.questions, this.state.activeQuestionId);

        return(
            <QuestionnaireContainer>
                Pytanie { activeQuestion.id }/{ this.state.questions.length }
                <Question>
                    { activeQuestion.question }
                </Question>
                { activeQuestion.answers.map( (answer,key) => 
                        <Answer key={key} 
                        onClick={ () => this.onAnswerClick(activeQuestion, answer.id) }>
                            {answer.answer}
                        </Answer>
                    )
                }
            </QuestionnaireContainer>
        )
    }
}
