import ProductCarouselComponent from "../../components/ProductCarouselComponent";
import CategoryCardComponent from "../../components/CategoryCardComponent";
import { Row, Container, Card, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import MetaComponent from "../../components/MetaComponent";
import HeroHeaderComponent from "../../components/HeroHeaderComponent";
import StatsComponent from "../../components/StatsComponent";
import ExpertiseComponent from "../../components/ExpertiseComponent";
import VideoComponent from "../../components/VideoComponent";
import NewsletterComponent from "../../components/NewsletterComponent";

const HomePageComponent = ({ categories, getBestsellers }) => {
  const [mainCategories, setMainCategories] = useState([]);
  const [bestSellers, setBestsellers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getBestsellers()
      .then((data) => {
        setBestsellers(data);
      })
      .catch((er) => {
        setError(
          er.response.data.message ? er.response.data.message : er.response.data
        );
        console.log(
          er.response.data.message ? er.response.data.message : er.response.data
        );
      });
    setMainCategories((cat) =>
      categories.filter((item) => !item.name.includes("/"))
    );
  }, [categories, getBestsellers]);

  return (
    <>
      <MetaComponent />
      {/* <CarouselHome /> */}
      <HeroHeaderComponent />
      <ProductCarouselComponent bestSellers={bestSellers} />
      <StatsComponent />
      <VideoComponent />

      <Container>
        <Row xs={2} md={3}>
          {mainCategories.map((category, idx) => (
            <CategoryCardComponent key={idx} category={category} idx={idx} />
          ))}
        </Row>
        {error}
      </Container>

      <ExpertiseComponent />
      <NewsletterComponent />
    </>
  );
};

export default HomePageComponent;
