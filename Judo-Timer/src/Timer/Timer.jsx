import PropTypes from "prop-types";
import "./Timer.css"

function Timer(props) {
    return (
      <div className='Timer-container'>
        <span>{props.minutes}</span>
        <span>:</span>
        <span>{props.seconds}</span>
      </div>
    )
  }

  Timer.propTypes = {
    minutes: PropTypes.string.isRequired,
    seconds: PropTypes.string.isRequired,
  };
  
  export default Timer;