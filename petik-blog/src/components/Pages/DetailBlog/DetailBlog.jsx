import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";
import MyNavbar from "../../Mynavbar/MyNavbar.jsx";
import Footer from "../../Footer/Footer.jsx";
import {
  Card,
  Col,
  Container,
  Row,
  CardBody,
  CardText,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

const DetailBlog = () => {
  const [post, setPost] = useState("");
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postResponse = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`,
        );

        const commentRespone = await axios.get(
          `https://jsonplaceholder.typicode.com/comments`,
        );

        console.log(commentRespone);
        console.log(postResponse);

        setPost(postResponse.data);
        setComments(commentRespone.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      
      <Container className="mt-4 mb-5">
        <Row className="justify-content-center">
          <Col md="8">
            <Card className=" mb-4 shadow-sm">
              <CardBody>
                <CardTitle tag="h3">{post.title}</CardTitle>
                <CardText className="text-muted">{post.body}</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <h4>Komentar</h4>
        <ListGroup>
          {comments
            .filter((comment) => comment.postId === Number(id))
            .map((comment) => (
              <ListGroupItem key={comment.id} className="mb-2">
                <b>{comment.name}</b>
                <p className="text-muted small">{comment.email}</p>
                <p>{comment.body}</p>
              </ListGroupItem>
            ))}
        </ListGroup>
      </Container>
  
    </div>
  );
};

export default DetailBlog;
