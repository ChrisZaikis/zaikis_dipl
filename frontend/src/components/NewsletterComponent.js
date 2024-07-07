function NewsletterComponent() {
  return (
    <section id="newsletter" className="newsletter  ">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-6 offset-md-3 d-flex flex-column align-items-center text-center">
            <h2 className="fw-bold"> ΕΓΓΡΑΦΗ NEWSLETTER</h2>
            <p>
              Μείνετε ενημερωμένοι με τα τελευταία μας νέα και ανακοινώσεις.
              Εγγραφείτε στο δικό μας ενημερωτικό δελτίο και ακολουθήστε μας στα
              μέσα κοινωνικής δικτύωσης για πολύτιμες πληροφορίες και
              συναρπαστικές ενημερώσεις.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 offset-md-3 d-flex flex-column align-items-center text-center">
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Εισάγετε Ηλεκτρονική Διεύθυνση"
              />
              <button
                className="btn btn-primary text-white rounded-0"
                type="button"
              >
                Υποβάλλω
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterComponent;
