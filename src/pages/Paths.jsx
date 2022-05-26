import { PathCard } from "../features/paths/PathCard";
import { PathsNavigation } from "../features/navigation/PathsNavigation";

import PathImage from "../assets/img/paths/beach.jpg";

export const Paths = () => (
  <>
    <PathsNavigation />
    <main className="grid grid-cols-1 lg:grid-cols-3 gap-12 mx-12">
      {new Array(10).fill(null).map((_, id) => (
        <PathCard
          key={id}
          img={PathImage}
          name="pp"
          description="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        />
      ))}
    </main>
  </>
);
