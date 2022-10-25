const UnitCard = (props) => {
    let toRender = <div className="card" id={props.data._id} onClick={props.onClick}>
    <div value={props.data._id}>Name: {props.data.name}</div>
    <div value={props.data._id}>Health: {props.data.health}</div>
</div>
    return toRender
}

export default UnitCard