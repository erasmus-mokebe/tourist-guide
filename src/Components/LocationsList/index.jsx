import SidebarSingle from "./../SidebarSingle";

const places = [
    {
        id: "0",
        img: "src/assets/img/places/david.jpg",
        name: "David Sculpture",
        rating: "2.3",
        type: "restaurant",
        address: "Aristoteleus Square",
    },
    {
        id: "1",
        img: "src/assets/img/places/david.jpg",
        name: "David Sculpture",
        rating: "2.3",
        type: "restaurant",
        address: "Aristoteleus Square",
    },
    {
        id: "2",
        img: "src/assets/img/places/david.jpg",
        name: "David Sculpture",
        rating: "2.3",
        type: "restaurant",
        address: "Aristoteleus Square",
    },
    {
        id: "3",
        img: "src/assets/img/places/david.jpg",
        name: "David Sculpture",
        rating: "2.3",
        type: "restaurant",
        address: "Aristoteleus Square",
    },
    {
        id: "4",
        img: "src/assets/img/places/david.jpg",
        name: "David Sculpture",
        rating: "2.3",
        type: "restaurant",
        address: "Aristoteleus Square",
    },
];

const LocationsList = () => (
    <div className="w-4/5" style={{ direction: "ltr" }}>
        {places.map((place) => (
            <SidebarSingle
                key={place.id}
                img={place.img}
                name={place.name}
                rating={place.rating}
                type={place.type}
                address={place.address}
            />
        ))}
    </div>
);

export default LocationsList;
