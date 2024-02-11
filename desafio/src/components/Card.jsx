const Card = (props) => {
/*console.log(props)*/

    return (
        <>
            <img src={props.img} alt=""></img>
            <h2>{props.name}</h2>
            <p>{props.information}</p>
            <button>{props.btn}</button>
        </>
    )
}

export default Card