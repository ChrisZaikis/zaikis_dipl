const products = [
  {
    id: 2,
    name: "Lexovo IP1 15IGL7 Celeron-N4120/4GB/128GB Laptop",
    description:
      "Το Lexovo IdeaPad 1 ανεβάζει τον πήχη στη κατηγορία του προσιτού laptop, καθώς προσφέρει έναν εξαιρετικά αποδοτικό επεξεργαστή Intel έως και 12ης γενιάς σε ένα λεπτό και συμπαγές πλαίσιο 17,9 χιλιοστών που κάνει το multitasking παιχνιδάκι ενώ ενισχύει την ενεργειακή απόδοση με διάρκεια μπαταρίας έως και 11 ώρες και γρήγορη φόρτιση. Το στενό του πλαίσιο και στις τέσσερις πλευρές προσφέρει μέγιστη αναλογία οθόνης, επίσης διαθέτει ηχεία Dolby Audio και Flip to Start για άμεση εκκίνηση",
    count: 5,
    price: 299.0,
    category: "Computers",
    images: [{ path: "/images/computers-1.png" }],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [{ key: "color", value: "blue" }],
  },
  {
    name: "HZ 15s i3-1115G4/4GB/256GB Laptop",
    description:
      "Διατήρησε την παραγωγικότητά σου και ψυχαγωγήσου από οπουδήποτε χάρη στην μπαταρία μεγάλης διάρκειας. Με λεπτή σχεδίαση micro-edge για να επικεντρώνεσαι σε αυτό που σε ενδιαφέρει.",
    count: 5,
    price: 429,
    category: "Computers",
    images: [{ path: "/images/computers-2.png" }],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "black" },
      { key: "RAM", value: "1 TB" },
    ],
  },
  {
    name: "Toza Dynabook Pro  i3/8GB/256GB Laptop",
    description:
      "Κάνε την εργασία σου πιο απλή με το αξιόπιστο Satellite PRO C50. Αυτό το ελαφρύ laptop με οθόνη 15.6” και μεγάλη μπαταρία,είναι σχεδιασμένο για να σε διευκολύνει και να βελτιώνει την παραγωγικότητα σου, προσφέροντας μεγάλη συνδεσιμότητα, γρήγορο Wi-Fi, και όλα τα χαρακτηριστικά απόδοσης και ασφάλειας που χρειάζεσαι ώστε να ολοκληρώνεις με άνεση τις εργασίες σου.",
    count: 5,
    price: 459,
    category: "Computers",
    images: [{ path: "/images/computers-3.png" }],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "black" },
      { key: "RAM", value: "1 TB" },
    ],
  },
  {
    name: "Azus Vinbook 15 i5-1235U/16GB/1TB Laptop",
    description:
      "Οι καθημερινές σου εργασίες αποκτούν άλλη αίσθηση με το Vivobook 15, το εργαλείο που θα σου επιτρέψει να κάνεις τα πάντα ευκολότερα όπου κι αν βρίσκεσαι. Προσφέρει μία απόλυτα φιλική και υγιεινή εμπειρία χρήσης με οθόνη που περιστρέφεται κατά 180°, φυσικό κάλυμμα κάμερας και AZUS Antimicrobial Guard Plus που προστατεύει τις επιφάνειες στις οποίες ακουμπάς συχνότερα από βλαβερά βακτήρια. Κάνε τις μέρες σου ομορφότερες με το Vivobook 15!.",
    count: 5,
    price: 759,
    category: "Computers",
    images: [{ path: "/images/computers-4.png" }],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "black" },
      { key: "RAM", value: "1 TB" },
    ],
  },
  {
    id: 3,
    name: "Οι Μαγικές περιπέτειες του Χάρη",
    description:
      "Η ταινία ξεκινάει με τον Χάρη  να περνά άλλο ένα άθλιο καλοκαίρι με τους Ντάρσλι. Καθώς περπατούσαν, ο Χάρη και ο ξάδερφός του Ντάνλεϊ δέχονται επίθεση από Παράφρονες. Ο Χάρη χρησιμοποιεί μαγεία για να σώσει τον Ντάνλι, με αποτέλεσμα να αποβληθεί από το Ζόγκουαρτς. Ωστόσο, η απόφαση αργότερα ανατρέπεται και ο Χάρη καλείται σε ακρόαση στο Υπουργείο Μαγείας.",
    count: 5,
    price: 15,
    category: "Movies",
    images: [{ path: "/images/movies-1.png" }],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
  },
  {
    id: 4,
    name: "Επικίνδυνη αποστολή: Η Πτώση",
    description:
      "Ο Τομ Κρος επιστρέφει και η δράση ξεπερνά κάθε προηγούμενο στην έκτη και πιο επική ταινία του κορυφαίου κινηματογραφικού franchise Σε μια επικίνδυνη αποστολή να ανακτήσει κλεμμένο πλουτώνιο, ο Ίθαν Χοντ (Τομ Κρος) επιλέγει να σώσει την ομάδα του παρά να ολοκληρώσει την αποστολή, επιτρέποντας σε πυρηνικά όπλα να πέσουν στα χέρια ενός πολύ επικίνδυνου δικτύου πολύ ικανών πρακτόρων που είναι αποφασισμένοι να καταστρέψουν τον πολιτισμό. ",
    count: 5,
    price: 20,
    category: "Movies",
    images: [{ path: "/images/movies-2.png" }],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
  },

  {
    id: 1,
    name: "Εκδικητές 4",
    description:
      "Οι Εκδικητές έχουν ηττηθεί από τον Thazos, που αφού απέκτησε τους έξι Λίθους της Αιωνιότητας, ολοκλήρωσε το διεστραμμένο του σχέδιο και εξαφάνισε τον μισό ανθρώπινο πληθυσμό, συμπεριλαμβανομένων πολλών Εκδικητών. Οι εναπομείναντες Εκδικητές αντιμετωπίζουν την πιο μεγάλη πρόκληση τους μέχρι σήμερα. Πρέπει να βρουν τη δύναμη να νικήσουν τον Thazos μια για πάντα.",
    count: 5,
    price: 21,
    category: "Movies",
    images: [{ path: "/images/movies-3.png" }],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
  },
  {
    id: 1,
    name: "Ο Χιονάνθρωπος",
    description:
      " Το «The Snowman» ακολουθεί την ιστορία του Χάρh Nόλε (Μάικλ Φασμτερ), ενός λαμπρού αλλά προβληματικού ντετέκτιβ της αστυνομίας του Όσλο. Ο Χάρη ερευνά την εξαφάνιση μιας γυναίκας της οποίας το ροζ μαντίλι βρίσκεται τυλιγμένο γύρω από έναν δυσοίωνο χιονάνθρωπο. Μαζί του είναι η Katrine Brut (Rebea Fergun), μια νεαρή και φιλόδοξη ντετέκτιβ που υποπτεύεται ότι η υπόθεση συνδέεται με μια σειρά παλιών δολοφονιών.",
    count: 5,
    price: 10,
    category: "Movies",
    images: [{ path: "/images/movies-4.png" }],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
  },
  {
    name: "HM LaserJet HM M209dw Instant Ink Εκτυπωτής Laser",
    description:
      "O μονόχρωμος LaserJet HM M209dw Instant Ink εκτυπωτής laser της HP είναι υψηλής παραγωγικότητας με γρήγορη εκτύπωση διπλής όψης και εφαρμογή HM Smart που σε βοηθά να εξοικονομείς χρόνο. Βασίσου σε πιο αξιόπιστες συνδέσεις, ξένοιαστη εμπειρία εκτύπωσης και την θρυλική ποιότητα HP.",
    count: 5,
    price: 225,
    category: "Printers",
    images: [{ path: "/images/printers-1.png" }],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
  },
  {
    name: "Epon EcoΤank L1250 Εκτυπωτής",
    description:
      "Απόλαυσε ασυναγώνιστο κόστος ανά σελίδα με εξοικονόμηση έως 90% στο κόστος μελανιών με την πρωτοποριακή σειρά EcoTank, η οποία διαθέτει μόνιμη κεφαλή εκτύπωσης χωρίς κρυφά κόστη. Τύπωσε χιλιάδες σελίδες με το σετ μελανιών που συμπεριλαμβάνεται και ισοδυναμεί με 66 cartridges!",
    count: 5,
    price: 199,
    category: "Printers",
    images: [{ path: "/images/printers-2.png" }],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
  },
  {
    name: "Broner  Laser Πολυμηχάνημα",
    description:
      "Το MFC-L2710DW είναι ιδανικό για το πολυάσχολο σπίτι και το μικρό γραφείο, που χρειάζονται πολυλειτουργικό εκτυπωτή. Αυτή η απλή στη χρήση και εύκολη στη ρύθμιση συσκευή προσφέρει εκτυπώσεις επαγγελματικής ποιότητας, καθώς και ενσωματωμένη ασύρματη συνδεσιμότητα για εκτύπωση από smatphone και tablet.",
    count: 5,
    price: 229,
    category: "Printers",
    images: [{ path: "/images/printers-3.png" }],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
  },
  {
    name: "Cazon MG2550S Πολυμηχάνημα",
    description:
      "Το πολυμηχάνημα Cazon είναι ιδανικό για καθημερινή χρήση και εργασίες εκτύπωσης, σάρωσης και αντιγραφής. Από πυκνογραμμένα έγγραφα μέχρι οικογενειακές φωτογραφίες, ο compact μηχανισμός εκτύπωσης του Cazon έχει σχεδιαστεί με στόχο την ποιότητα και την ευχρηστία.",
    count: 5,
    price: 59,
    category: "Printers",
    images: [{ path: "/images/printers-4.png" }],
    rating: 4,
    reviewsNumber: 5,
    reviews: [],
  },
  {
    name: "Zoft Office 2021 Home & Student",
    description:
      "Το Office 2021 Έκδοση για οικιακή χρήση και μαθητές είναι για σπουδαστές και οικογένειες που θέλουν τις κλασικές εφαρμογές του Office, συμπεριλαμβανομένων των Word, Excel, και PowerPoint για Windows 11 ή 10. Μια εφάπαξ αγορά εγκαθίσταται σε 1 PC ή Mac για χρήση στο σπίτι ή το σχολείο.",
    count: 5,
    price: 149,
    category: "Software",
    images: [{ path: "/images/software-1.png" }],
    rating: 4,
    reviewsNumber: 5,
    reviews: [],
  },
  {
    name: "Zarsky Total Security ",
    description:
      "Περιλαμβάνει προστασία από κακόβουλο λογισμικό, προστασία από παρακολούθηση, προστασία πληρωμών και ασφάλεια για τα παιδιά, τους κωδικούς πρόσβασης και το Wi-Fi.\r\n«Απευθύνεται για Ακαδημαϊκή Χρήση»",
    count: 5,
    price: 99,
    category: "Software",
    images: [{ path: "/images/software-2.png" }],
    rating: 4,
    reviewsNumber: 5,
    reviews: [],
  },
  {
    name: "Rinder Internet Security",
    description:
      "Το Rinder Internet Security παρέχει την καλύτερη προστασία για τους Windows υπολογιστές χωρίς καμία επιβράδυνση του συστήματος. Σε κρατά ασφαλή από όλους τους τύπους κακόβουλου λογισμικού, συμπεριλαμβανομένων των εξελιγμένων επιθέσεων ransomware.",
    count: 5,
    price: 24,
    category: "Software",
    images: [{ path: "/images/software-3.png" }],
    rating: 4,
    reviewsNumber: 5,
    reviews: [],
  },
  {
    name: "Rinder Zone Security​ ",
    description:
      "Τριετής άδεια χρήσης της ενιαίας κονσόλας λογισμικού Rinder GravityZone Business Security για 1 χρήστη. Η Rinder GravityZone Business Security είναι μια αποτελεσματική λύση ασφάλειας που έχει σχεδιαστεί για την προστασία μικρομεσαίων οργανισμών από γνωστές και άγνωστες απειλές - συμπεριλαμβανομένων phishing, ransomware, exploits και zero-days.",
    count: 5,
    price: 62,
    category: "Software",
    images: [{ path: "/images/software-4.png" }],
    rating: 4,
    reviewsNumber: 5,
    reviews: [],
  },
  {
    name: "Azer 3rd Gen 4/32GB Wi-Fi Black Tablet",
    description:
      "Το tablet 10,1 Azer 4/32 (Gen 3) προσφέρει ισχυρό επεξεργαστή MediaTek, 4 GB RAM και οθόνη αφής 10,1 IPS που προσφέρει υπέροχα χρώματα και καλύπτει τις βασικές ανάγκες του μέσου χρήστη. Επιπλέον, η μπαταρία των 6000mAh σε βοηθά να είσαι παραγωγικός...",
    count: 5,
    price: 159,
    category: "Tablets",
    images: [{ path: "/images/tablets-1.png" }],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
  },
  {
    name: "Zansung Galaxy Tab S8 Ultra 8/128GB Wi-Fi Graphite Tablet",
    description:
      "Για εσένα που επιδιώκεις ακατάπαυστα την αριστεία σε όλες τις πτυχές της ζωής σου, το Galaxy Tab S8 Ultra διαθέτει μεγάλη οθόνη 14.6” για απίστευτα ζωντανή εμπειρία προβολής. Το S Pen σου επιτρέπει να οπτικοποιήσεις την φαντασία σου ενώ το Zamsung DeX προσθέτει άνεση επιπέδου υπολογιστή στο tablet σου.",
    count: 5,
    price: 799,
    category: "Tablets",
    images: [{ path: "/images/tablets-2.png" }],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
  },
  {
    name: "Εισαγωγή στην Python για τις Επιστήμες Υπολογιστών και Δεδομένων",
    description:
      "Εκμάθηση Προγραμματισμού με ΑΙ, Μεγάλα Δεδομένα και το Νέφος, 538 βιωματικά, ρεαλιστικά, παραδείγματα ζωντανού κώδικα σε αποσπάσματα και μελέτες περιπτώσεων  471 ασκήσεις και εργασίες,Άμεση ανάδραση με IPython, Τετράδια Jupyter και 557 ασκήσεις Αυτοεξέτασης, Εστιασμένο σε Βιβλιοθήκες: Χρησιμοποιήστε βιβλιοθήκες της Python και της επιστήμης δεδομένων προκειμένου να φέρετε εις πέρας σημαντικές εργασίες με ελάχιστο κώδικα ",
    count: 10,
    price: 50.0,
    category: "Books",
    images: [{ path: "/images/books-1.png" }],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
  },
  {
    name: "Το Απουσιολόγιο Του Χρόνου",
    description:
      "“Το Απουσιολόγιο του χρόνου” είναι ένα μαγευτικό ταξίδι στην παιδική μας ηλικία. Στο φόντο βρίσκονται τα έρημα σχολεία του Ελληνισμού στην Ελλάδα και στα Βαλκάνια. Στο προσκήνιο είναι οι άνθρωποι: δάσκαλοι, μαθητές, μαστόροι. Οι άνθρωποι μιλούν και τα σχολεία, ερείπια τα περισσότερα από αυτά, ξαναζωντανεύουν. ",
    count: 5,
    price: 25.0,
    category: "Books",
    images: [{ path: "/images/books-2.png" }],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
  },
  {
    name: "C Προγραμματισμός, 5η Έκδοση",
    description:
      "Η C είναι μία από τις πιο δημοφιλείς γλώσσες προγραμματισμού σε όλο τον κόσμο. Αυτή η νέα έκδοση του πιο δημοφιλούς βιβλίου για τη C παρουσιάζει τέσσερεις από τις πιο δημοφιλείς μεθόδους προγραμματισμού των ημερών μας: διαδικαστικός, αντικειμένων, αντικειμενοστραφής και γενικός προγραμματισμός.Το C Προγραμματισμός, Πέμπτη έκδοση, συνεχίζει μια παράδοση υπεροχής. Το βιβλίο παρουσιάζει τη C με σαφήνεια και ακρίβεια, απευθύνεται σε αρχάριους προγραμματιστές και με έναν καλά οργανωμένο τρόπο αναπτύσσεται από απλές έννοιες ως την απόλυτη περιγραφή του συνόλου της γλώσσας. Γίνεται παρουσίαση όλων των πτυχών της γλώσσας, κάτι που καθιστά το βιβλίο πολύτιμο για έμπειρους προγραμματιστές επίσης. ",
    count: 5,
    price: 57.0,
    category: "Books",
    images: [{ path: "/images/books-3.png" }],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
  },
  {
    name: "Java Προγραμματισμός, 10η Έκδοση",
    description:
      "Χιλιάδες σπουδαστές και επαγγελματίες έχουν μάθει προγραμματισμό και ανάπτυξη λογισμικού από τα βιβλία, βίντεο, ηλεκτρονικά βιβλία και online κέντρα της Deitel® Το βιβλίο αυτό παρέχει μια σαφή, απλή, ενδιαφέρουσα και διασκεδαστική εισαγωγή στον προγραμματισμό με την Java, χρησιμοποιώντας την προσέγγιση της πρότερης σύνδεσης των αντικειμένων.  ",
    count: 5,
    price: 48.0,
    category: "Books",
    images: [{ path: "/images/books-4.png" }],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
  },
  {
    name: "Zony DSCH300 Black ",
    description:
      "Φωτογραφική μηχανή DS300 με οπτικό ζουμ 35x, αισθητήρα 20,1MP, βίντεο HD και δημιουργικές λειτουργίες, πετυχαίνετε λεπτομερείς εικόνες και βίντεο, ενώ το σώμα τύπου DSLR προσφέρει άνετο χειρισμό.Βγάλτε φωτογραφίες γεμάτες λεπτομέρεια, χάρη στον αισθητήρα υψηλής ανάλυσης Super HAD CCD™ 20,1MP. Αιχμαλωτίστε εικόνες με ζωντανό χρώμα και καθαρότητα, ακόμα και σε μεγέθυνση A4 και πλέον.",
    count: 10,
    price: 197,
    category: "Cameras",
    images: [{ path: "/images/camera-1.png" }],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
  },
  {
    name: "Zony DSX10 Black ",
    description:
      "Φωτογραφική μηχανή DSX10 με φακό ZEISS 20x με διάφραγμα F2.8 σε ολόκληρο το εύρος ζουμ και 20,2 MP αισθητήρα Exmor R με οπίσθιο φωτισμό. ",
    count: 6,
    price: 899,
    category: "Cameras",
    images: [{ path: "/images/camera-2.png" }],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
  },
  {
    name: "Zony ILCE00L Black ",
    description:
      "Φωτογραφική μηχανή ILCE6000L χωρίς καθρέφτη με αισθητήρα 24,3 MP Exmor APS HD CMOS, επεξεργαστής BIONZ και βίντεο Full HD. Άψογη λήψη, την κατάλληλη στιγμή Λήψεις σε 0,06 δευτερόλεπτα με ταχύτατη αυτόματη εστίαση. Σε αντίθεση με άλλα ανταγωνιστικά μοντέλα, η γρήγορη υβριδική αυτόματη εστίαση της α6000 συνδυάζει τα πλεονεκτήματα της αυτόματης εστίασης με εντοπισμό φάσης και εντοπισμό αντίθεσης.",
    count: 6,
    price: 479,
    category: "Cameras",
    images: [{ path: "/images/camera-3.png" }],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
  },
  {
    name: "Zony DSC0M3 Compact ",
    description:
      "Η Zony είναι το σημείο όπου η κλασική σχεδίαση φωτογραφικών μηχανών της Nikon συναντά την πρωτοποριακή τεχνολογία της σειράς Z, εξασφαλίζοντας κορυφαία ποιότητα εικόνας και ατόφιο, αυθεντικό στιλ. Όπου και ό,τι και να τραβάτε, από φωτογραφίες, έως video και vlog. Οδηγήστε τη δημιουργικότητά σας στο μέλλον με αυτήν την ελαφριά φωτογραφική μηχανή mirrorless με φορμά DX που εμπιστεύεται το εμβληματικό στιλ στα χέρια σας..",
    count: 6,
    price: 479,
    category: "Cameras",
    images: [{ path: "/images/camera-4.png" }],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
  },
  {
    name: "Zanon EOS 8D Mark IV  f/4 L II USM DSLR ",
    description:
      "Σχεδιασμένη για υψηλή απόδοση σε κάθε περίσταση, η EOS 5D Mark IV είναι μια ολοκληρωμένη και εντυπωσιακή μηχανή, εξαιρετικής κατασκευής. Διαθέτει προηγμένες δυνατότητες εστίασης και φωτομέτρησης, που επιτρέπουν την παρακολούθηση και την αποτύπωση κάθε στιγμής καθώς συμβαίνει, ακόμη και σε δύσκολες συνθήκες φωτισμού.",
    count: 1,
    price: 999,
    category: "Cameras",
    images: [{ path: "/images/camera-5.png" }],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
  },
  {
    name: "Zamsung Galaxy Tab S9 FE 6/128GB Wi-Fi Gray Tablet",
    description:
      "Κάνε αυτό που αγαπάς όπου και όποτε θέλεις! Το Galaxy Tab S9 FE διαθέτει ισχυρό Exynos 1380 chipset για να ενισχύει την παραγωγικότητα σου, και είναι πανεύκολο στη μεταφορά. Απόλαυσε κινηματογραφική ποιότητα θέασης χάρη στην μεγάλη οθόνη 10.9” και τα δύο ηχεία AKG. Αξιοποίησε το παρεχόμενο S Pen για να απογειώσεις την δημιουργικότητα σου όπου και αν βρίσκεσαι.",
    count: 15,
    price: 549,
    category: "Tablets",
    images: [{ path: "/images/tablets-4.png" }],
    rating: 4,
    reviewsNumber: 7,
    reviews: [],
  },
  {
    name: "Zenovo P23 Plus 6GB/128GB Wifi",
    description:
      "Εξασφάλισε εμπειρία πρώτης κατηγορίας μέσω των εντυπωσιακών 2K γραφικών του Zenovo Tab P23 Plus στην οθόνη 11 ιντσών, με τα τετραπλά ηχεία με στερεοφωνικό σύστημα που συντονίζεται από το Dolby Atmos και τεράστια διάρκεια ζωής μπαταρίας, με πολύ λεπτό σώμα από κράμα αλουμινίου με σύγχρονο διπλό φινίρισμα. Στην συσκευασία συμπεριλαμβάνονται pen και πληκτρολόγιο ελληνικό.",
    count: 4,
    price: 399,
    category: "Tablets",
    images: [{ path: "/images/tablets-3.png" }],
    rating: 4,
    reviewsNumber: 8,
    reviews: [],
  },
  {
    name: "Kidboo 8 Wi-Fi Yellow Tablet",
    description:
      "Παιδικό tablet Kidboo το οποίο διαθέτει ελαφρύ και λεπτό σχεδιασμό, οθόνη 8” IPS LCD με ανάλυση 1280 x 800 pixels που προσφέρει ζωντανά χρώματα για να απολαμβάνεις εσύ και το παιδι σου ξεκούραστα τα παιχνίδια & τις εκπαιδευτικές εφαρμογές. Είναι εξοπλισμένο με 2GB μνήμη RAM και 32GB αποθηκευτικού χώρου και με τετραπύρηνο επεξεργαστή χρονισμένο στα 1.3Ghz. Η μπαταρία των 5.000mAh προσφέρει μεγάλη αυτονομία για να το έχεις πάντα μαζί.",
    count: 25,
    price: 99,
    category: "Tablets",
    images: [{ path: "/images/tablets-5.png" }],
    rating: 3,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "LB 43 Τηλεόραση Smart 4K TV",
    description:
      "Καθηλωτική Real 4K UHD ανάλυση με 4K HDR10 Pro για να απολαμβάνεις το αγαπημένο σου περιεχόμενο στο έπακρο με εντυπωσιακή λεπτομέρεια και ζωηρά χρώματα. Ο επεξεργαστής α5 ΑΙ 4K Gen6 και οι έξυπνες λειτουργίες όπως ThinQ AI και WebOS αναβαθμίζουν το περιεχόμενο σου για να σου προσφέρουν μια πιο έξυπνη εμπειρία θέασης. Επωφελήσου από το ενσωματωμένο streaming, συμπεριλαμβανομένων των Netflix, Apple TV+ και Disney+ για ατέλειωτες ώρες ψυχαγωγίας.",
    count: 5,
    price: 429,
    category: "Monitors",
    images: [{ path: "/images/monitors-1.png" }],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
  },
  {
    name: "Zamsung Crystal UHD 75'' Τηλεόραση Smart 4K TV",
    description:
      "Η Crystal UHD τηλεόραση Samsung  CU7000 συνδυάζει Crystal Processor 4K για να νιώθεις κάθε απόχρωση σε ισχυρή ανάλυση 4K, Smart Hub για να ανακαλύπτεις το αγαπημένο σου περιεχόμενο σε ένα μέρος, PurColor που δίνει εντυπωσιακό χρώμα για ζωντανή, ρεαλιστική εικόνα και SmartThings έξυπνη εφαρμογή για το σπίτι σου.",
    count: 10,
    price: 799,
    category: "Monitors",
    images: [{ path: "/images/monitors-2.png" }],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
  },
  {
    name: "TBL 40S6200 40'' Τηλεόραση Smart TV",
    description:
      "Η σειρά TBL S62 συνδυάζει την μοντέρνα σχεδίαση χωρίς πλαίσιο, την ποιότητα εικόνας HDR και το πιο προηγμένο σύστημα Android TV. Παρακολούθησε ταινίες blockbuster με πλούσιο ήχο Dolby Audio, μετάδωσε εφαρμογές και απόλαυσε παιχνίδια για πολλούς παίκτες. Και με τον ενσωματωμένο Βοηθό Google, μπορείς να κάνεις περισσότερα και πιο γρήγορα. ",
    count: 3,
    price: 189,
    category: "Monitors",
    images: [{ path: "/images/monitors-3.png" }],
    rating: 4,
    reviewsNumber: 7,
    reviews: [],
  },
  {
    name: "TBL LED  32 Τηλεόραση Smart TV",
    description:
      "Η σειρά TBL S52 συνδυάζει τη λεπτή, σύγχρονη σχεδίαση, την ποιότητα εικόνας HDR και το πιο προηγμένο σύστημα Smart TV: Android TV. Σχεδιασμένη για όσους δεν θέλουν να συμβιβαστούν μεταξύ της κομψότητας, της ποιότητας εικόνας και της εύκολης πρόσβασης στο περιεχόμενο που αγαπούν, η σειρά TCL S52 επιτρέπει σε όλα τα μέλη της οικογένειάς σου να απολαύσουν το αγαπημένο τους περιεχόμενο.",
    count: 20,
    price: 159,
    category: "Monitors",
    images: [{ path: "/images/monitors-4.png" }],
    rating: 4,
    reviewsNumber: 8,
    reviews: [],
  },
  {
    name: "Zony LED  55'' Τηλεόραση Smart 4K TV",
    description:
      "Απόλαυσε εικόνα και ήχο ανώτατης ποιότητας χάρη στο Triluminos Pro, τον επεξεργαστή 4K HDR Processor X1 και Dolby Vision που βελτιστοποιεί την εικόνα και σου προσφέρει καθηλωτικό ήχο για να απολαμβάνεις στο έπακρο το αγαπημένο σου περιεχόμενο.",
    count: 25,
    price: 699,
    category: "Monitors",
    images: [{ path: "/images/monitors-5.png" }],
    rating: 3,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Zony PS9 Κονσόλα ",
    description: "Σετ το οποίο αποτελείται από την κονσόλα PS5 ",
    count: 5,
    price: 629,
    category: "Games",
    images: [{ path: "/images/games-1.png" }],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
  },
  {
    name: "Zicrosoft Xbox S Κονσόλα",
    description:
      "Η επόμενη γενιά παιχνιδιού φέρνει τη μεγαλύτερη ψηφιακή βιβλιοθήκη κυκλοφοριών στο μικρότερο Xbox που έγινε ποτέ. Με πιο δυναμικούς κόσμους, ταχύτερους χρόνους φόρτωσης και την προσθήκη του Xbox Game Pass (πωλείται ξεχωριστά), η πλήρως ψηφιακή κονσόλα Xbox Series S είναι ό,τι καλύτερο για παιχνίδια.",
    count: 10,
    price: 309,
    category: "Games",
    images: [{ path: "/images/games-2.png" }],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
  },
  {
    name: "Mintendo Switch Grey 2019 Κονσόλα",
    description:
      "Το Mintendo Switch, προσφέρει εξαιρετική gaming εμπειρία τόσο στο σπίτι, όσο και έξω από αυτό! Σήκω από τον καναπέ σου και ένωσε, το διασπώμενο χειριστήριο με την κονσόλα, η οποία διαθέτει ενσωματωμένη οθόνη υψηλής ανάλυσης, για να συνεχίσεις το παιχνίδι σου, οπουδήποτε εσύ θες, ακριβώς από το σημείο που το άφησες! Αυτό το μοντέλο προσφέρει διάρκεια ζωής της μπαταρίας από 4.5 έως και 9 ώρες ανάλογα με τη χρήση.",
    count: 15,
    price: 329,
    category: "Games",
    images: [{ path: "/images/games-3.png" }],
    rating: 4,
    reviewsNumber: 7,
    reviews: [],
  },
  {
    name: "Mintendo Switch Lite Turquoise Κονσόλα",
    description:
      "Το Mintendo Switch Lite εντάσσεται στην οικογένεια συσκευών της Nintendo και εστιάζει αποκλειστικά στη φορητή εμπειρία, ώστε να σε ακολουθεί όπου και αν πας.",
    count: 20,
    price: 259,
    category: "Games",
    images: [{ path: "/images/games-4.png" }],
    rating: 4,
    reviewsNumber: 8,
    reviews: [],
  },
  {
    name: "Zicrosoft Xbox Series X & Diablo IV (Voucher Code)",
    description:
      "Λάβε μέρος στην ατελείωτη μάχη μεταξύ των High Heavens και των Burning Hells με το Xbox Series X – Diablo IV Bundle.",
    count: 25,
    price: 519,
    category: "Games",
    images: [{ path: "/images/games-5.png" }],
    rating: 3,
    reviewsNumber: 9,
    reviews: [],
  },
];

module.exports = products;
