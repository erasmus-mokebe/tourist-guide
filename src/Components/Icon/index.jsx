const Icon = (props) => (
  <div
    className="flex justify-center items-center w-8 h-8 rounded-full cursor-pointer"
    style={{backgroundColor: props.color}}
  >
    <img className="w-3/5 h-3/5" src={props.img} alt={props.alt ?? "an icon"} />
  </div>
);

export default Icon;