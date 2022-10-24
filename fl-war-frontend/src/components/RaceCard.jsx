const RaceCard = (props) => {
    console.log("this is race card data",props.data)
    let toRender = (<div>
        {props.data.name}
    </div>)
    return toRender
}

export default RaceCard