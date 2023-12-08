import React, { useState } from 'react';
import Header from './header/header';
import { Hero } from './hero/Hero';
import { FeedbackForm } from './form/Feedback';

export const App = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };
  return (
    <>
      <Header />
      <Hero openForm={openForm} />
      <FeedbackForm isOpen={isFormOpen} onClose={closeForm} />
    </>
  );
};
