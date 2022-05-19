import { useSelector } from 'react-redux';
import SidebarSingle from './../SidebarSingle';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const SideBar = ({ location }) => {
  const opened = useSelector(state => state.sideBar.opened);

  const sideBar = (<section id='sidebar' className='absolute top-0 bottom-0 left-0 right-0 border-box sm:static flex sm:w-1/3 h-full bg-white justify-center'>
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
