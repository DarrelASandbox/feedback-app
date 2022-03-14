import { useContext, useState, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const RatingSelect = ({ select }) => {
  const { feedbackEdit } = useContext(FeedbackContext);
  const [selected, setSelected] = useState(10);

  const handleChange = (num) => () => {
    setSelected(num);
    select(num);
  };

  useEffect(() => {
    setSelected(feedbackEdit.item.rating);
  }, [feedbackEdit]);

  return (
    <ul className='rating'>
      {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
        <li key={num}>
          <input
            type='radio'
            id={`num${num}`}
            name='rating'
            onChange={handleChange(num)}
            checked={selected === num}
          />
          <label htmlFor={`num${num}`}>{`${num}`}</label>
        </li>
      ))}
    </ul>
  );
};
export default RatingSelect;
