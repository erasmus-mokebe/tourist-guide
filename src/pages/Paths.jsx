import { PathCard } from '../features/paths/PathCard';

const Paths = () => (
  <main className='grid grid-cols-3 gap-12 mx-12 mt-10'>
    {new Array(10).fill(null).map((_, id) => (
      <PathCard
        key={id}
        img='src/assets/img/paths/beach.jpg'
        name='pp'
        description='It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
      />
    ))}
  </main>
);

export default Paths;
