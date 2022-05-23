const Icon = props => (
  <div
    className='flex justify-center items-center gap-2 lg:w-8 h-8 py-1 px-6 lg:p-1 rounded-full cursor-pointer'
    style={{ backgroundColor: props.color }}
  >
    <img className='w-3/5 h-3/5' src={props.img} alt={props.alt} />
    <span className='lg:hidden text-white whitespace-nowrap'>{props.alt}</span>
  </div>
);

export default Icon;
