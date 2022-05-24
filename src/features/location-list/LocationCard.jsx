import RatingStarFullIcon from '../../assets/icons/star_full.svg';
import ProfileImage from '../../assets/img/places/david.jpg';

export const LocationCard = ({ location }) => {
  return (
    <div className='text-sm mb-8'>
      <img src={ProfileImage} className='w-full overflow-hidden pb-4' />
      <div className='flex justify-between items-center'>
        <h3 className='text-lg'>{location?.name}</h3>
        <div className='flex'>
          <img src={RatingStarFullIcon} />
          <span>{location?.rating.score}</span>
        </div>
      </div>
      <div className='text-gray-500'>
        {location?.type}
        <span className='mx-4'>·</span>
        {location?.place.street}
      </div>
    </div>
  );
};
