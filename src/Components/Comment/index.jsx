const Comment = (props) => (
    <section>
        <div>
            <img src={props.img}/>
            <div>
                <h5>{props.name}</h5>
                <span>{props.date}</span>
                <div>
                    <img src={props.rating}/>
                </div>
            </div>
        </div>
        <p>{props.opinion}</p>
    </section>    
)