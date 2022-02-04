import PropTypes from 'prop-types';

const APPEARANCE = {
  default: {
    default: 'bg-white text-gray-900 border-gray-200',
    disabled: {
      true: 'opacity-75 cursor-not-allowed',
      false: 'hover:bg-gray-50',
    },
  },
  primary: {
    default: 'bg-blue-600 text-white border-blue-600',
    disabled: {
      true: 'opacity-75 cursor-not-allowed',
      false: 'hover:bg-blue-700 hover:border-blue-700',
    },
  },
  success: {
    default: 'bg-green-600 text-white border-green-600',
    disabled: {
      true: 'opacity-75 cursor-not-allowed',
      false: 'hover:bg-green-700 hover:border-green-700',
    },
  },
  danger: {
    default: 'bg-red-600 text-white border-red-600',
    disabled: {
      true: 'opacity-75 cursor-not-allowed',
      false: 'hover:bg-red-700 hover:border-red-700',
    },
  },
  warning: {
    default: 'bg-amber-500 text-white border-amber-500',
    disabled: {
      true: 'opacity-75 cursor-not-allowed',
      false: 'hover:bg-amber-600 hover:border-amber-600',
    },
  },
  subtle: {
    default: 'bg-transparent text-gray-900 border-transparent',
    disabled: {
      true: 'opacity-75 cursor-not-allowed',
      false: 'hover:bg-gray-400/25',
    },
  },
  link: {
    default: 'bg-transparent text-blue-600 border-transparent',
    disabled: {
      true: 'opacity-75 cursor-not-allowed',
      false: 'hover:underline',
    },
  },
};

const SPACING = {
  large: 'h-12 px-6',
  default: 'h-9 px-4',
  compact: 'h-7 px-4',
};

const CoreButton = (props) => {
  const containerClasses = `
    flex gap-2 inline-flex justify-center items-center select-none
    text-base font-medium rounded focus:outline-none border
    ${APPEARANCE[props.appearance].default}
    ${APPEARANCE[props.appearance].disabled[Boolean(props.isDisabled)]}
    ${SPACING[String(props.spacing)]}
    ${props.classes}
  `;

  return (
    <button className={containerClasses} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

CoreButton.propTypes = {
  appearance: PropTypes.oneOf([
    'default',
    'primary',
    'success',
    'danger',
    'warning',
    'subtle',
    'link',
  ]),
  spacing: PropTypes.oneOf(['large', 'default', 'compact']),
  isDisabled: PropTypes.bool,
  classes: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

CoreButton.defaultProps = {
  appearance: 'default',
  spacing: 'default',
  isDisabled: false,
  onClick: () => {},
};

export default CoreButton;
