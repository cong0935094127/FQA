// src/pages/HomePage.js
import React, { useState } from 'react';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [questions] = useState([
    { id: 1, title: 'Câu hỏi 1', description: 'Mô tả câu hỏi 1' },
    { id: 2, title: 'Câu hỏi 2', description: 'Mô tả câu hỏi 2' },
    // Thêm nhiều câu hỏi hơn nếu cần
  ]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredQuestions = questions.filter(question =>
    question.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Trang Chủ</h1>
      <input
        type="text"
        placeholder="Tìm kiếm câu hỏi..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredQuestions.map(question => (
          <li key={question.id}>
            <a href={`/questions/${question.id}`}>{question.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
