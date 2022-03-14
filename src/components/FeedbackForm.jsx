import Card from './shared/Card';
import { useState } from 'react';
import Button from './shared/Button';

const FeedbackForm = () => {
  const [text, setText] = useState('');

  const handleTextChange = (e) => setText(e.target.value);
  const minChars = text.trim().length <= 10;
  const minCharsMessage = 'Text must be at least 10 characters';

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        {/* @todo - rating select component */}
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
