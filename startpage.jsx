import React from 'react';

const StartPage = ({ onPageChange }) => {
  const handleStartClick = () => {
    onPageChange('search');
  };

  return (
    <div className="start">
      <h1>Welcome to Recipe Search</h1>
      <button onClick={handleStartClick} className="start-button">
        Start
      </button>
    </div>
  );
};

export default StartPage;




