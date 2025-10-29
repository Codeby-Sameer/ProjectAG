import React, { createContext, useContext, useState } from 'react';

const MultiFormModalContext = createContext();

export const useMultiFormModal = () => {
  const context = useContext(MultiFormModalContext);
  if (!context) {
    throw new Error('useMultiFormModal must be used within a MultiFormModalProvider');
  }
  return context;
};

export const MultiFormModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentForm, setCurrentForm] = useState(null);
  const [formData, setFormData] = useState({});

  const openModal = (formType, initialData = {}) => {
    setCurrentForm(formType);
    setFormData(initialData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentForm(null);
    setFormData({});
  };

  const updateFormData = (data) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  return (
    <MultiFormModalContext.Provider value={{
      isModalOpen,
      currentForm,
      formData,
      openModal,
      closeModal,
      updateFormData
    }}>
      {children}
    </MultiFormModalContext.Provider>
  );
};