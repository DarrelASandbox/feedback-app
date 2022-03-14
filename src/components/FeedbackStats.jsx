const FeedbackStats = ({ feedback }) => {
  let average = Math.round(
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length
  ).toFixed(1);

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {+average || 0}</h4>
    </div>
  );
};
export default FeedbackStats;
