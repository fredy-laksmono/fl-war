const RaceCard = (props) => {
    let toRender = (<div className="race-card">
        <button value={props.data.name} id={props.data._id} onClick={props.onClick}>{props.data.name}</button>
        <p>{props.data.description}</p>
    </div>)
    return toRender
}

export default RaceCard