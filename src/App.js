import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutIconLink from './components/AboutIconLink';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import AboutPage from './pages/AboutPage';

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm('Delete feedback?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = Math.floor(Math.random() * 100_000);
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <BrowserRouter>
      <Header />
      <AboutIconLink />
      <div className='container'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          />
          <Route path='/about' element={<AboutPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
