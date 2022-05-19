const CardSingle = props => {
  return (
    <div className='bg-stone-200 rounded-sm'>
      <img src={props.img} />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <button className='bg-lime-500 text-white'>Start this path</button>
    </div>
  );
};
export default CardSingle;
