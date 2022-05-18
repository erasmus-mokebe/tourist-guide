const Button = (props) => {
  return (
    <button className="flex justify-stretch items-center gap-4 px-5 py-3 h-full bg-[#24A229] rounded-lg text-white" onClick={props.onClick}>
      { props.children }
    </button>
  );
};

export default Button;