const SidebarSingle = (props) => {
    return (
        <div className="text-sm mb-8">
            <img src={props.img} className="w-full overflow-hidden pb-4" />
            <div className="flex justify-between items-center">
                <h3 className="text-lg">{props.name}</h3>
                <div className="flex">
                    <img src="src/assets/icons/star_full.svg" />
                    <span>{props.rating}</span>
                </div>
            </div>
            <div className="text-gray-500">
                {props.type}
                <span className="mx-4">·</span>
                {props.address}
            </div>
        </div>
    );
};

export default SidebarSingle;
