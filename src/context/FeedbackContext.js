import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    { id: 1, text: 'Feedback1', rating: 10 },
    { id: 2, text: 'Feedback2', rating: 7 },
    { id: 3, text: 'Feedback3', rating: 3 },
  ]);

  const addFeedback = (newFeedback) => {
    newFeedback.id = Math.floor(Math.random() * 100_000);
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm('Delete feedback?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // When we call updateFeedback the updatedItem does not contain the id of the the feedback.
  // So spreading both item and updateItem, merges the two objects into one new object with any duplicate key value pairs
  // from the second object overwriting the key value pairs in the first object.
  const updateFeedback = (id, updatedItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id
          ? {
              ...item,
              ...updatedItem,
            }
          : item
      )
    );
    setFeedbackEdit({
      item: {},
      edit: false,
    });
  };

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
