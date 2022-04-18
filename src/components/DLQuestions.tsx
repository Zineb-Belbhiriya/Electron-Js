import React, { useState } from 'react';
import BackBtn from '../shared/BackBtn';
import AnswerCard from './AnswerCard';
import CountDown from './CountDown';
import CandidateInfo from './CandidateInfo';
import { useNavigate } from 'react-router';

function DLQuestions({ subject, data }: any) {
  const [QuestionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(32);
  // know when the quiz is over
  const [showResult, setShowResult] = useState(false);
  // timer to skip to the next question
  const [delay, setDelay] = useState(30);
  const navigate = useNavigate();

  // @ts-ignore
  // get all questions for the current subject
  const testQuestion = data?.filter((item: any) => item.vehicletype === subject);
  // get the current question
  const question = testQuestion[QuestionNumber];
  // get the answer array for the current question
  const answers = question.answer;

  const handleClick = (answer: any) => {
    if (answer === question.correctanswer) {
      setScore(score + 1);
    }

    if (QuestionNumber < testQuestion.length - 1) {
      setQuestionNumber(QuestionNumber + 1);
    } else if (score > 30) {
      setShowResult(true);
    } else {
      navigate('/');
    }
  };

  // @ts-ignore
  setTimeout(() => {
    if (QuestionNumber < testQuestion.length - 1) {
      setQuestionNumber(QuestionNumber + 1);
    } else {
      setShowResult(true);
    }
  }, 30000);

  // @ts-ignore
  return (
    <div className="mx-9 flex flex-col justify-between h-screen">
      {/* if the quiz still running */}
      {!showResult && question && (
        <>
          <div className="flex justify-between items-center items-center m-4 bg-gray-100 p-4 rounded-md">
            <BackBtn />
            {/* reset the CountDown timer depends on the question number */}
            <CountDown QuestionNumber={QuestionNumber} delay={delay} />
            {/*  show current question number */}
            {QuestionNumber + 1}/{testQuestion.length}
          </div>
          <div>
            <div className="p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg" role="alert">
              <span className="font-medium">Question {QuestionNumber + 1}</span>: {question.question}
            </div>

            {/* pass the answer array to the AnswerCard component */}
            <AnswerCard answers={answers} handleClick={handleClick} />
          </div>
        </>
      )}
      {showResult && <CandidateInfo score={score} />}
    </div>
  );
}

export default DLQuestions;
