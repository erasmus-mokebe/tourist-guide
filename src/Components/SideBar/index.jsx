import SidebarSingle from "./../SidebarSingle";

const SideBar = ({location}) =>{

    console.log(location);

    return(
        <section id="sidebar" className="hidden sm:flex w-1/3 h-full bg-white justify-center">
            <div className="w-4/5">
                ej czemu
                <SidebarSingle img="src/img/places/david.jpg" name="David Sculpture" rating="2.3" type="restaurant" address="Aristoteleus Square"/>
            </div>
        </section>
    );
}
export default SideBar;