const Deck = (props) =>{
    let toRender = <div> Deck
    </div>
    if (!props.deckId){
        toRender = <div>
            <button>Create new deck</button>
        </div>
    }
    return toRender
}

export default Deck