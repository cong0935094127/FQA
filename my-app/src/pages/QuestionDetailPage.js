// src/pages/QuestionDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

function QuestionDetailPage() {
  const { questionId } = useParams();
  
  // Giả sử dữ liệu câu hỏi và trả lời được lưu trữ cục bộ hoặc lấy từ API
  const question = {
    id: questionId,
    title: `Câu hỏi ${questionId}`,
    description: `Chi tiết câu hỏi ${questionId}`,
    answers: [
      'Trả lời 1',
      'Trả lời 2',
      // Thêm nhiều trả lời hơn nếu cần
    ],
  };

  return (
    <div>
      <h1>{question.title}</h1>
      <p>{question.description}</p>
      <h2>Các câu trả lời:</h2>
      <ul>
        {question.answers.map((answer, index) => (
          <li key={index}>{answer}</li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionDetailPage;
