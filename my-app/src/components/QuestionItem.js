import React from 'react';

function QuestionItem({ question }) {
  return (
    <div style={styles.item}>
      <h3>{question.title}</h3>
      <p>{question.description}</p>
    </div>
  );
}

const styles = {
  item: {
    padding: '10px',
    borderBottom: '1px solid #ccc'
  }
};

export default QuestionItem;
