const { Deck, User } = require("../models");

const createDeck = async (req, res) => {
  const createNewDeck = await Deck.create(req.body);
  const userData = await User.findByIdAndUpdate(
    req.body.user_id,
    {
      deck_id: createNewDeck.id
    },
    { new: true }
  );
  res.send({ createNewDeck, userData });
};

const getDeck = async (req, res) => {
  const deckData = await Deck.findById(req.params.deckId);
  res.send(deckData);
};

module.exports = {
  createDeck,
  getDeck
};
