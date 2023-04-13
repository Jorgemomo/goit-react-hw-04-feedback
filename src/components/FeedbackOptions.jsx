import PropTypes from 'prop-types';
import { Btn } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, buttonClick }) => (
  <div>
    {options.map(option => (
      <Btn type="button" key={option} onClick={() => buttonClick(option)}>
        {option}
      </Btn>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onBtnClick: PropTypes.func.isRequired,
};
export default FeedbackOptions;
