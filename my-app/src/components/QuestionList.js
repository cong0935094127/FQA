import React from 'react';
import QuestionItem from './QuestionItem';

function QuestionList({ questions }) {
  return (
    <div style={styles.list}>
      {questions.map((question, index) => (
        <QuestionItem key={index} question={question} />
      ))}
    </div>
  );
}

const styles = {
  list: {
    marginTop: '20px'
  }
};

export default QuestionList;
