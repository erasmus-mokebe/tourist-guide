import SidebarSingle from './../SidebarSingle';
import SideComment from '../SideComment';
import CommentsList from '../CommentsList';

const SideBar = () => {

  return (
    <section id='sidebar' className='hidden sm:flex w-1/3 h-full bg-white justify-center'>
      <div className='w-4/5'>
        <SidebarSingle
          img='src/assets/img/places/david.jpg'
          name='David Sculpture'
          rating='2.3'
          type='restaurant'
          address='Aristoteleus Square'
        />
        <SidebarSingle
          img='src/assets/img/places/david.jpg'
          name='David Sculpture'
          rating='2.3'
          type='restaurant'
          address='Aristoteleus Square'
        />
        
      </div>
     
    </section>
  );
};
export default SideBar;
