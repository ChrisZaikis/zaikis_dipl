import { Rating } from "react-simple-star-rating";
import { Form } from "react-bootstrap";
import { Fragment } from "react";

const RatingFilterComponent = ({ setRatingsFromFilter }) => {
  return (
    <>
      <span className="fw-bold">Εκτίμηση</span>
      {Array.from({ length: 5 }).map((_, idx) => (
        <Fragment key={idx}>
          <Form.Check type="checkbox" id={`check-api-${idx}`}>
            <Form.Check.Input
              type="checkbox"
              isValid
              onChange={(e) =>
                setRatingsFromFilter((items) => {
                  return { ...items, [5 - idx]: e.target.checked };
                })
              }
            />
            <Form.Check.Label style={{ cursor: "pointer" }}>
              <Rating readonly size={20} initialValue={5 - idx} />
            </Form.Check.Label>
          </Form.Check>
        </Fragment>
      ))}
    </>
  );
};

export default RatingFilterComponent;
