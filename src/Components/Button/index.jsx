const Button = (props) => {
  return (
    <button className="w-32 py-1 bg-teal-400 rounded text-white" onClick={props.onClick}>
      { props.children }
    </button>
  );
};

export default Button;