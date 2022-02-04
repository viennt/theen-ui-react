import PropTypes from 'prop-types';
import CoreButton from '../Core/CoreButton';

/**
 * A button triggers an event or action. They let users know what will happen next.
 */
const TButton = (props) => {
  return (
    <CoreButton
      appearance={props.appearance}
      spacing={props.spacing}
      isDisabled={props.isDisabled}
      classes={props.classes}
      onClick={props.onClick}
    >
      <span className={props.isLoading ? 'opacity-0' : ''}>
        {props.children}
      </span>
      {props.isLoading && (
        <span className="flex absolute">
          <svg
            className="animate-spin"
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path>
          </svg>
        </span>
      )}
    </CoreButton>
  );
};

TButton.propTypes = {
  /**
   * The base styling to apply to the button
   */
  appearance: PropTypes.oneOf([
    'default',
    'primary',
    'success',
    'danger',
    'warning',
    'subtle',
    'link',
  ]),
  /**
   * Set the amount of padding in the button
   */
  spacing: PropTypes.oneOf(['large', 'default', 'compact']),
  /**
   * Set if the button is disabled
   */
  isDisabled: PropTypes.bool,
  /**
   * Conditionally show a spinner over the top of a button
   */
  isLoading: PropTypes.bool,
  /**
   * Add a classes to the button
   */
  classes: PropTypes.string,
  /**
   * Handler to be called on click. The second argument can be used to track analytics data. See the tutorial in the analytics-next package for details
   */
  onClick: PropTypes.func,
  /**
   * Use this slot to place content inside the button
   */
  children: PropTypes.node,
};

TButton.defaultProps = {
  appearance: 'default',
  spacing: 'default',
  isDisabled: false,
  isLoading: false,
  onClick: () => {},
};

export default TButton;
