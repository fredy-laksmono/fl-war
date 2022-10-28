const RaceCard = (props) => {
    let toRender = (<div className="race-card-wrapper">
        <div className="race-card-body">
            <label className="race-name" value={props.data.name} id={props.data._id}>{props.data.name}</label>
            <div className="race-card-description">{props.data.description}</div>
        </div>
        <div>
            <button className="click-able" value={props.data.name} id={props.data._id} onClick={props.onClick}>Select</button>
        </div>
        
    </div>)
    return toRender
}

export default RaceCard