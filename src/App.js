import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutIconLink from './components/AboutIconLink';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import { FeedbackProvider } from './context/FeedbackContext';
import AboutPage from './pages/AboutPage';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <AboutIconLink />
      <FeedbackProvider>
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />
            <Route path='/about' element={<AboutPage />}></Route>
          </Routes>
        </div>
      </FeedbackProvider>
    </BrowserRouter>
  );
};

export default App;
