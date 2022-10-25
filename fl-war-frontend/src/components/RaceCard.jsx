const RaceCard = (props) => {
    let toRender = (<div>
        <button value={props.data.name} id={props.data._id} onClick={props.onClick}>{props.data.name}</button>
    </div>)
    return toRender
}

export default RaceCard