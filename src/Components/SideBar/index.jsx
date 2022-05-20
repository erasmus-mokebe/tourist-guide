import LocationsList from "../LocationsList";

const SideBar = ({ content }) => {
    return (
        <section
            id="sidebar"
            className="hidden sm:flex w-1/3 h-full bg-white justify-center overflow-y-scroll scrollbar"
        >
            {content}
        </section>
    );
};
export default SideBar;
