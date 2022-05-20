import { useSelector } from 'react-redux';
import SidebarSingle from './../SidebarSingle';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const SideBar = ({ location }) => {
  const opened = useSelector(state => state.sideBar.opened);

  const sideBar = (<section id='sidebar' className='flex w-full sm:w-1/3 h-full bg-white justify-center z-20'>
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
</section>)

  return <>{opened && sideBar}</>

};
export default SideBar;
