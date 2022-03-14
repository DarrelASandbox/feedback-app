import FeedbackItem from './FeedbackItem';

export const FeedbackList = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.length === 0) return 'No feedback.';

  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default FeedbackList;
