import { useContext, useState, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from './shared/Card';

const FeedbackForm = () => {
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);

  const minCharsMessage = 'Text must have at least 10 characters';

  const handleTextChange = ({ target: { value } }) => {
    if (value === '') setBtnDisabled(true);
    else if (value.trim().length < 10) setBtnDisabled(true);
    else setBtnDisabled(false);

    setText(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = {
      text,
      rating,
    };
    if (feedbackEdit.edit === true)
      updateFeedback(feedbackEdit.item.id, newFeedback);
    else addFeedback(newFeedback);

    setText('');
    setBtnDisabled(true);
  };

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(true);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={setRating} selected={rating} />
        <div className='input-group'>
          <input
            type='text'
            value={text}
            placeholder='Write a review'
            onChange={handleTextChange}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>

        {btnDisabled && <div className='message'>{minCharsMessage}</div>}
      </form>
    </Card>
  );
};
export default FeedbackForm;
