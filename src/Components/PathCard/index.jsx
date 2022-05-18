import CardImg from './beach.svg';
const Card = () =>{
    return(
        <div className = "bg-stone-200 rounded-sm">
            
            <img src={CardImg} alt="Beach"/>
            
            <h4>AAAAAAAA</h4>
            <p>It has survived not only five centuries,
                 but also the leap into electronic typesetting, remaining essentially unchanged. 
                 It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
                 with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            <button className="bg-lime-500 text-white">Start this path</button>
            
        </div>
    )
}
export default Card;

