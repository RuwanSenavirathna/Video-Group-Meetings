import React, { createContext, useState } from 'react';

export const PollContext = createContext();

const PollProvider = ({children}) => {
  const [question, setQuestion] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [answers, setAnswers] = useState([
    { option: '', votes: 0 },
    { option: '', votes: 0 },
    { option: '', votes: 0 },
    { option: '', votes: 0 }
  ]);

  return (
    <PollContext.Provider value={{ 
      answers,
      setAnswers,
      question,
      setQuestion,
      isModalOpen,
      setIsModalOpen 
    }}>
      {children}
    </PollContext.Provider>
  );
};
  
export default PollProvider;