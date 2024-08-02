const ObjectId = require("mongodb").ObjectId;

const reviews = [
  {
    comment:
      "Τέλειο προϊόν.Το αγοράσα πριν έξι(6) μήνες και είμαι πολύ Ευχαριστημένος.",
    rating: 5,
    user: { _id: ObjectId(), name: "Νίκος Γ." },
  },
  {
    comment: "Φοβερό προϊόν.Το αγοράσα προχθές και είμαι πολύ Ευχαριστημένη.",
    rating: 5,
    user: { _id: ObjectId(), name: "Μαρία Β." },
  },
  {
    comment:
      "Πολυ Καλό προϊόν.Το αγοράσα πρίν έναν χρόνο και είμαι πολύ Ευχαριστημένος.",
    rating: 5,
    user: { _id: ObjectId(), name: "Δημήτρης Α." },
  },
  {
    comment: " Καλό προϊόν.Το αγοράσα εχθές και είμαι πολύ Ευχαριστημένη.",
    rating: 4,
    user: { _id: ObjectId(), name: " Βασιλική Τ." },
  },
  {
    comment: "Μέτριο προϊόν.Το αγοράσα πριν ένα μήνα.",
    rating: 3,
    user: { _id: ObjectId(), name: "Μιχάλης Ε." },
  },
];

module.exports = reviews;
