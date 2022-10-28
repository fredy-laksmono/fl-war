const UnitCard = (props) => {
    let toRender = <div className="card" id={props.data._id} value={props.data.name} onClick={props.unitSelect}>
    <div>Name: {props.data.name}</div>
    <div>Health: {props.data.health}</div>
    <div>Armor: {props.data.armor}</div>
    <div>shield: {props.data.shield}</div>
    <div>Cost: {props.data.cost}</div>
    
</div>
    return toRender
}

export default UnitCard