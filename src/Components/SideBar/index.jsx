import LocationsList from "../LocationsList";

const SideBar = (props) => {
    return (
        <section
            id="sidebar"
            className="hidden sm:flex w-[500px] h-full bg-white justify-center overflow-y-scroll scrollbar"
        >
            {props.children}
        </section>
    );
};
export default SideBar;
