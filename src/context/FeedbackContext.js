import { createContext, useEffect, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const response = await fetch('http://localhost:4000/feedback');
    const data = await response.json();

    setFeedback(data);
    setIsLoading(false);
  };

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
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
