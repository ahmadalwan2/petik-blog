import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardTitle,
} from "react-bootstrap";
import news_image from "../../../assets/hero-img.svg";

const Home = () => {
  const categories = ["Teknologi", "Fashion", "Otomotif", "Sport"];
  return (
    <div className="d-flex min-vh-100 flex-column">
      <div className="bg-primary text-light py-5 flex-fill d-flex align-items-center">
        <Container className="flex-fill d-flex align_items-center">
          <Row className="w-100 align-items-center">
            {/* ini kiri hero : Teks dan CTA */}
            <Col md="6" className="mb-4 mb-md-0">
              <h1>Selamat Datang di PeTIK Blog</h1>
              <p className="lead">
                Pesantren Teknologi Informasi dan Komunikasi (PeTIK) adalah
                lembaga pendidikan yang fokus pada pengembangan keterampilan
                IT,khususnya web development,mobile development, dan jaringan.
              </p>
              <p>
                Bergabunglah dengan kami dan tingkatkan keahlianmu di dunia
                digital bersama mentor dan praktisi industri!
              </p>
              <Button variant="light" size="lg" href="/posts" className="">
                Pelajai lebih lanjut!
              </Button>
            </Col>
            {/* Kanan hero : Gambar */}
            <Col md="6">
              <img src={news_image} alt="img" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Popular categories Section */}
      <Container className="my-5">
        <Row className="text-center mb-5">
          <Col>
            <h2 className="fw-bol">Kategori Terpopuler</h2>
            <p className="text-muted">Eksplor kategori yang menarik</p>
          </Col>
        </Row>
        <Row className="g-4 justify-content-center">
          {categories.map((category, index) => (
            <Col md={3} key={index}>
              <Card className="text-center shadow-sm category-card">
                <CardBody>
                  <CardTitle className="fw-bold">{category}</CardTitle>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
