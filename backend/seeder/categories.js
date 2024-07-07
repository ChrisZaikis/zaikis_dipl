const categories = [
  {
    name: "Computers",
    description:
      "Στο Κατάστημα μας μπορείς να βρεις laptops επώνυμων κατασκευαστών και να συγκρίνεις εύκολα και γρήγορα τις μοναδικές δυνατότητές τους.",
    image: "/images/computers-category.png",
    attrs: [
      { key: "RAM", value: ["1 TB", "2 TB", "4 TB"] },
      { key: "color", value: ["blue", "red", "green", "black"] },
    ],
  },
  {
    name: "Tablets",
    description:
      "Στο Κατάστημα μας μπορείς να βρεις Tblets επώνυμων κατασκευαστών και να συγκρίνεις εύκολα και γρήγορα τις μοναδικές δυνατότητές τους.",
    image: "/images/tablets-category.png",
  },
  {
    name: "Monitors",
    description:
      "Στο Κατάστημα μας μπορείς να βρεις Οθώνες επώνυμων κατασκευαστών και να συγκρίνεις εύκολα και γρήγορα τις μοναδικές δυνατότητές τους.",
    image: "/images/monitors-category.png",
  },
  {
    name: "Games",
    description:
      "Κονσόλες | Για εσένα που θεωρείς το gaming... εμπειρία, το Κατάστημα μας είναι ο Νο1 προορισμός! Εδώ θα βρεις αμέτρητες επιλογές.",
    image: "/images/games-category.png",
  },
  {
    name: "Printers",
    description:
      "Ανακάλυψε Εκτυπωτές - Πολυμηχανήματα στις καλύτερες τιμές της αγοράς μόνο στο Κατάστημα μας. Δες μεγάλη ποικιλία από Εκτυπωτές.",
    image: "/images/printers-category.png",
  },
  {
    name: "Software",
    description:
      "Στο Κατάστημα μας μπορείς να βρεις Software για να αναβαθμίσεις τον υπολογιστή σου και να αυξησεις τις δυνατότητες του.",
    image: "/images/software-category.png",
  },
  {
    name: "Cameras",
    description:
      "Η φωτογραφία μπορεί να σημαίνει πολλά: Χόμπι, επάγγελμα, τέχνη. Εδώ θα βρείτε τις καλύτερες φωτογραφικές μηχανές στις πιο συμφέρουσες τιμές.  ",
    image: "/images/camera-category.png",
  },
  {
    name: "Books",
    description:
      "«Ξεφύλλισε» τα καλύτερα βιβλία: Ανακάλυψε όλα τα Best Seller Βιβλία. Οι καλύτερες προτάσεις σε περιμένουν! Μόνο στο κατάστημα μας. ",
    image: "/images/books-category.png",
    attrs: [{ key: "genre", value: ["movie", "comedy", "thriller"] }],
  },
  {
    id: 1,
    name: "Movies",
    description:
      "Αμερικανικές και κορεάτικες περιπέτειες δράσης, γαλλικά δικαστικά δράματα, ελληνική επαρχία, ταινίες τρόμου, animation και υπερήρωες.",
    image: "/images/movies-category.png",
  },
];

module.exports = categories;
