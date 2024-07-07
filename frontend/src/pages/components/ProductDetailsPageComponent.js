import {
  Row,
  Col,
  Container,
  Image,
  ListGroup,
  Form,
  Button,
  Alert,
  Card,
} from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import AddedToCartMessageComponent from "../../components/AddedToCartMessageComponent";

import ImageZoom from "js-image-zoom";
import { useEffect, useState, useRef } from "react";
import MetaComponent from "../../components/MetaComponent";
import ContentCarouselComponent from "../../components/ContentCarouselComponent";
import { useParams } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import "../../scss/button.scss";

const ProductDetailsPageComponent = ({
  getContent,
  addToCartReduxAction,
  reduxDispatch,
  getProductDetails,
  userInfo,
  writeReviewApiRequest,
  name,
  description,
  price,
  productId,
  images,
}) => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [showCartMessage, setShowCartMessage] = useState(false);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [productReviewed, setProductReviewed] = useState(false);
  const [contentBased, setContentBased] = useState([]);

  useEffect(() => {
    getContent()
      .then((data) => {
        setContentBased(data);
      })
      .catch((er) => {
        setError(
          er.response.data.message ? er.response.data.message : er.response.data
        );
        console.log(
          er.response.data.message ? er.response.data.message : er.response.data
        );
      });
  }, [getContent]);

  const messagesEndRef = useRef(null);

  const addToCartHandler = () => {
    reduxDispatch(addToCartReduxAction(id, quantity));
    setShowCartMessage(true);
  };

  useEffect(() => {
    if (productReviewed) {
      setTimeout(() => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  }, [productReviewed]);

  useEffect(() => {
    if (product.images) {
      var options = {
        // width: 400,
        // zoomWidth: 500,
        // fillContainer: true,
        // zoomPosition: "bottom",
        scale: 2,
        offset: { vertical: 0, horizontal: 0 },
      };

      product.images.map(
        (image, id) =>
          new ImageZoom(document.getElementById(`imageId${id + 1}`), options)
      );
    }
  });

  useEffect(() => {
    getProductDetails(id)
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((er) =>
        setError(
          er.response.data.message ? er.response.data.message : er.response.data
        )
      );
  }, [id, productReviewed]);

  const sendReviewHandler = (e) => {
    e.preventDefault();
    const form = e.currentTarget.elements;
    const formInputs = {
      comment: form.comment.value,
      rating: form.rating.value,
    };
    if (e.currentTarget.checkValidity() === true) {
      writeReviewApiRequest(product._id, formInputs)
        .then((data) => {
          if (data === "review created") {
            setProductReviewed("Η Αξιολόγηση σας Προστέθηκε με Επιτυχία!");
          }
        })
        .catch((er) =>
          setProductReviewed(
            er.response.data.message
              ? er.response.data.message
              : er.response.data
          )
        );
    }
  };

  return (
    <>
      <MetaComponent title={product.name} description={product.description} />
      <Container>
        <AddedToCartMessageComponent
          showCartMessage={showCartMessage}
          setShowCartMessage={setShowCartMessage}
        />
        <Row className="mt-5">
          {loading ? (
            <h2>Φόρτωση λεπτομερειών προϊόντος ...</h2>
          ) : error ? (
            <h2>{error}</h2>
          ) : (
            <>
              <Col style={{ zIndex: 1 }} md={4}>
                {product.images
                  ? product.images.map((image, id) => (
                      <div key={id}>
                        <div key={id} id={`imageId${id + 1}`}>
                          <Image
                            className="shadow  rounded"
                            crossOrigin="anonymous"
                            fluid
                            src={`${image.path ?? null}`}
                          />
                        </div>
                        <br />
                      </div>
                    ))
                  : null}
              </Col>
              <Col md={8}>
                <Row>
                  <Col md={12}>
                    <ListGroup className=" p-3 mb-5  body">
                      <div>
                        <h2>{product.name}</h2>
                      </div>
                      <div className="mb-3 ">
                        <Rating
                          readonly
                          size={20}
                          initialValue={product.rating}
                        />{" "}
                        ({product.reviewsNumber})Αξιολογήσεις
                      </div>

                      {/* <ListGroup.Item>
                        Τιμή: <span className="fw-bold">€{product.price}</span>
                      </ListGroup.Item> */}
                      <div className="mb-3">{product.description}</div>
                    </ListGroup>
                  </Col>
                  <Col md={6}>
                    <ListGroup>
                      {/* <ListGroup.Item>
                        Τιμή: <span className="fw-bold">€{product.price}</span>
                      </ListGroup.Item> */}

                      <Col md={11}>
                        <ListGroup.Item className="rounded border-secondary mb-1  text-secondary fs-6">
                          <HiOutlineBuildingStorefront
                            color="green"
                            className="fs-4 mb-1 me-1 "
                          />
                          Διαθέσιμο στο Κατάστημα παραλαβή σε 20'
                        </ListGroup.Item>
                      </Col>
                      <Col md={7}>
                        <ListGroup.Item
                          className=" text-success mb-1 fs-6"
                          variant="success rounded  border-body"
                        >
                          <TbTruckDelivery className="fs-4 me-2" />
                          {product.count > 0
                            ? "Διαθέσιμο για Αποστολή"
                            : "Εκτός αποθέματος"}
                        </ListGroup.Item>
                      </Col>
                      <Col md={3} className="fs-4 mb-1 text-black">
                        <ListGroup className=" body ">
                          <Form.Select
                            className="body text-secondary"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            aria-label="Default select example"
                          >
                            {[...Array(product.count).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </Form.Select>
                        </ListGroup>
                      </Col>
                      <Form.Group className="  text-black">
                        <span className="fw-bold fs-4  align-bottom">
                          €{product.price}.00
                        </span>
                        <Form.Group>
                          <button
                            onClick={addToCartHandler}
                            className="button-77"
                          >
                            <Form.Group>
                              <BsCart3 className="fs-5 mb-2 me-3" />
                              {""}Απόκτησε το
                            </Form.Group>
                          </button>
                        </Form.Group>
                      </Form.Group>
                    </ListGroup>
                  </Col>
                </Row>

                <Row>
                  <Col className="mt-4 ">
                    <hr />
                    <h4>Αξιολογήσεις</h4>
                    <ListGroup className="p-3 mb-5">
                      {product.reviews &&
                        product.reviews.map((review, idx) => (
                          <Form.Group className="body" key={idx}>
                            <hr />
                            {review.user.name} <br />
                            <Rating
                              readonly
                              size={20}
                              initialValue={review.rating}
                            />
                            <br />
                            {review.createdAt.substring(0, 10)} <br />
                            {review.comment}
                          </Form.Group>
                        ))}
                      <div ref={messagesEndRef} />
                    </ListGroup>
                  </Col>
                </Row>
                <hr />
                {!userInfo.name && (
                  <Alert variant="danger">
                    Συνδεθείτε πρώτα για να γράψετε μια Αξιολόγηση
                  </Alert>
                )}

                <Form onSubmit={sendReviewHandler}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <h3>Γράψτε μια Αξιολόγηση</h3>
                    <Form.Control
                      className=" bg-white "
                      name="comment"
                      required
                      as="textarea"
                      placeholder="Γράψτε μια Αξιολόγηση ..."
                      value={description}
                      disabled={!userInfo.name}
                      rows={5}
                    />
                  </Form.Group>
                  <Form.Select
                    className=" bg-white "
                    name="rating"
                    required
                    disabled={!userInfo.name}
                    aria-label="Default select example"
                  >
                    <option value="">Η βαθμολογία σας</option>
                    <option value="5">5 (Πολύ Καλό)</option>
                    <option value="4">4 (Καλό)</option>
                    <option value="3">3 (Μέτριο)</option>
                    <option value="2">2 (Κακό)</option>
                    <option value="1">1 (Πολύ Κακό)</option>
                  </Form.Select>
                  <button
                    disabled={!userInfo.name}
                    type="submit"
                    className="button-77 p-4 mt-3 mb-3"
                  >
                    Υποβάλλω
                  </button>{" "}
                  {productReviewed}
                </Form>
              </Col>
            </>
          )}
        </Row>
      </Container>
      <Container>
        <Card.Body>
          <ContentCarouselComponent contentBased={contentBased} />
        </Card.Body>
      </Container>
    </>
  );
};

export default ProductDetailsPageComponent;
