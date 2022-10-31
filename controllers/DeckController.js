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

const updateDeck = async (req, res) => {
  const deckData = await Deck.updateOne({ _id: req.params.deckId }, req.body);
  res.send(deckData);
};

const deleteDeck = async (req, res) => {
  const deckData = await Deck.findById(req.params.deckId);
  const userData = await User.findByIdAndUpdate(
    deckData.user_id,
    {
      $unset: { deck_id: 1 }
    },
    { new: true }
  );
  const deletedDeckData = await Deck.deleteOne({ _id: req.params.deckId });
  res.send(deletedDeckData);
};

module.exports = {
  createDeck,
  getDeck,
  updateDeck,
  deleteDeck
};
