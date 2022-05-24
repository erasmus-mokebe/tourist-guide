import RightArrowIcon from '../../assets/icons/right-arrow.svg';

export const PathCard = props => (
  <div className='bg-stone-100 rounded-lg'>
    <img src={props.img} className='w-full' />
    <h3 className='my-8 mx-8 font-medium'>{props.name}</h3>
    <p className='mx-8 my-5'>{props.description}</p>
    <div className='my-10 mx-10'>
      <button className='flex  gap-10 px-5 py-3 h-full justify-between bg-[#24A229] rounded-lg text-white w-full'>
        <span className='whitespace-nowrap m-0 '>Start this path</span>
        <img src={RightArrowIcon} alt='explore thessaloniki' />
      </button>
    </div>
  </div>
);
