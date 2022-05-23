const Icon = (props) => (
  <div
    className="flex justify-center items-center gap-2 sm:w-8 h-8 px-5 sm:px-0 rounded-full cursor-pointer"
    style={{backgroundColor: props.color}}
  >
    <img className="w-3/5 h-3/5" src={props.img} alt={props.alt} />
    <span className="sm:hidden text-white font-semibold whitespace-nowrap">{props.alt}</span>
  </div>
);

export default Icon;