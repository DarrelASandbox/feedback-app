import Card from './shared/Card';
import { useState } from 'react';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackForm = () => {
  const { addFeedback } = useContext(FeedbackContext);
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);

  const handleTextChange = (e) => setText(e.target.value);
  const minChars = text.trim().length <= 10;
  const minCharsMessage = 'Text must be at least 10 characters';

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = {
      text,
      rating,
    };
    addFeedback(newFeedback);
    setText('');
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            type='text'
            value={text}
            placeholder='Write a review'
            onChange={handleTextChange}
          />
          <Button type='submit' isDisabled={minChars}>
            Send
          </Button>
        </div>

        {text && minChars && <div className='message'>{minCharsMessage}</div>}
      </form>
    </Card>
  );
};
export default FeedbackForm;
