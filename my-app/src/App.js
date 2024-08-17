import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import QuestionList from './components/QuestionList';

function App() {
  const [questions] = useState([
    { title: 'What is React?', description: 'React is a JavaScript library for building user interfaces.' },
    { title: 'How to use useState?', description: 'useState is a hook that allows you to have state variables in functional components.' }
    // Thêm nhiều câu hỏi hơn tại đây
  ]);

  const handleSearch = (query) => {
    // Thêm logic tìm kiếm tại đây
  };

  return (
    <div>
      <Header />
      <div style={styles.container}>
        <SearchBar onSearch={handleSearch} />
        <QuestionList questions={questions} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px'
  }
};

export default App;
