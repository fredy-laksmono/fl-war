const UnitCard = (props) => {
    let toRender = <div>
    {props.name} <br/>
    {props.health}
</div>
    return toRender
}

export default UnitCard