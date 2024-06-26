import { useEffect, useRef, useState } from "react";

export const BottomDrawer = ({ children }) => {
  const [active, setActive] = useState(false);
  const drawer = useRef();

  useEffect(() => {
    const detectClick = () => setActive(true);
    const removePointerEvents = () => setActive(false);

    drawer.current.addEventListener("touchstart", detectClick);
    drawer.current.addEventListener("touchend", removePointerEvents);

    return () => {
      drawer.current?.removeEventListener("touchstart", detectClick);
      drawer.current?.removeEventListener("touchend", removePointerEvents);
    };
  }, []);

  return (
    <section
      className="absolute top-0 left-0 w-full h-full z-[9999] overflow-y-scroll snap-y"
      style={{ pointerEvents: active ? "auto" : "none" }}
    >
      <div className="h-[35%] snap-start" />
      <div className="h-[calc(65%-1.75rem)] snap-start" />
      <div
        className="min-h-screen bg-white pointer-events-auto rounded-t-xl"
        ref={drawer}
      >
        <div className="p-3">
          <span className="block rounded-full w-8 h-1 bg-gray-500 m-auto"></span>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
};
