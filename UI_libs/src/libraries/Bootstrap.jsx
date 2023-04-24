import { Alert } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Bootstrap() {
  return (
    <Container className="p-4 bg-secondary text-white flex-column justify-content-around">
      <h2 className="h1 text-center">Lorem, ipsum.</h2>
      <h3 className="h3 text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, ad.
      </h3>
      <Alert variant="primary" className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.
      </Alert>
      <iframe
        className="mx-auto d-block"
        width="560"
        height="360"
        src="https://www.youtube.com/embed/1w7OgIMMRc4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Container>
  );
}
