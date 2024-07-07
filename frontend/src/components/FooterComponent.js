import { Container, Row, Col } from "react-bootstrap";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

const FooterComponent = () => {
  // const currentYear = new Date().getFullYear();
  return (
    // //{" "}
    // <footer>
    //   //{" "}
    //   <Container fluid>
    //     //{" "}
    //     <Row className="mt-5">
    //       //{" "}
    //       <Col className=" text-white text-center py-3">
    //         // Copyright&copy; {currentYear} Χρήστος Ζαΐκης Διπλωματική
    //         εργασία ΕΑΠ // <br />
    //         //{" "}
    //         <Container className="fs-1 ">
    //           // <AiFillInstagram className="ms-2" />
    //           // <AiFillFacebook className="ms-2" />
    //           // <FaTiktok className="ms-2" />
    //           // <TfiYoutube className="ms-2" />
    //           //{" "}
    //         </Container>
    //         //{" "}
    //       </Col>
    //       //{" "}
    //     </Row>
    //     //{" "}
    //   </Container>
    //   //{" "}
    //   <>
    // </footer>

    <footer>
      <div className="social text-bg-dark overflow-hidden download">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 text-center fs-4">
              <div className="row video-points px-6 mt-5"></div>
              <p className="lead">
                Μείνετε συνδεδεμένοι και γίνετε μέλος της κοινότητάς μας. Για
                οποιαδήποτε απορία, μη διστάσετε να επικοινωνήσετε μαζί μας.
              </p>
              <div className=" justify-content-center ">
                <div className="fs-1  ">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillInstagram className="ms-2 text-white product-social  " />
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillFacebook className="ms-2 text-white product-social" />
                  </a>
                  <a
                    href="https://www.tiktok.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaTiktok className="ms-2 text-white product-social" />
                  </a>
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <TfiYoutube className="ms-2 text-white product-social" />
                  </a>
                </div>
              </div>
              <div className="row video-points px-6 mt-5"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-top border-primary bg-dark text-white  download">
        <div className="container">
          <div className="row">
            <div className="col-md-4 md-2"></div>
            <div className="col-md-6 offset-md-3 text-center">
              <p className=" p-5">
                {" "}
                Copyright &copy;2023 Χρήστος Ζαΐκης - All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
