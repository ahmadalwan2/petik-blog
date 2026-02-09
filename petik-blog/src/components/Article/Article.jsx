import { useEffect, useState } from "react";
import Search from "../Search/Search.jsx";
import axios from "axios";
import { NavLink } from "react-router-dom";
import {
  Col,
  Container,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

const Article = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPost, setFilteredPost] = useState(posts);
  const [postTotal, setPostTotal] = useState(posts.length);
  const [authors, setAuthors] = useState([]);

  // useEffect(() => {
  // ini side effect : contoh untuh pengambilan data
  // console.log("Komponen dipasang atau data diubah");
  // return () => {
  //   // clean up : membersihkan effect
  //   console.log("membersihkan sebelum komponen dilepas");
  // };

  //   setFilteredPost(posts);
  //   setPostTotal(posts.length);
  // }, [filteredPost]);
  // efek berjalan jika data pada array beerubah, jika array kosong
  // maka hanya berjalan sekali saat komponen pertama kali dimuat(mout)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsResponse = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
        );

        const userResponse = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
        );
        console.log(postsResponse);
        console.log(userResponse);

        setFilteredPost(postsResponse.data);
        setPostTotal(postsResponse.data.length);
        setPosts(postsResponse.data);
        setAuthors(userResponse.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const onChangeSearch = (searchTerm) => {
    const filteredData = posts.filter((post) => {
      return post.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredPost(filteredData);
    setPostTotal(filteredData.length);
  };

  return (
    <div>
      <Container className="mt-4">
        <Row className="mb-3">
          <Col>
            <Search totalPost={postTotal} onSearchChange={onChangeSearch} />
          </Col>
        </Row>
        <Row>
          {filteredPost.map((post) => {
            const author = authors.find((user) => user.id === post.userId);
            return (
              <Col md="6" lg="4" className="mb-4">
                <Card
                  body
                  color="light"
                  outline
                  className="h-100 w-100 shadow-sm"
                  style={{
                    width: "18rem",
                  }}
                >
                  <CardBody>
                    <CardTitle tag="h5">
                      <NavLink to={`/posts/${[post.id]}`}>{post.title}</NavLink>
                    </CardTitle>

                    <CardText>
                      Author : <b>{author ? author.name : "unknown"}</b>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Article;
// state ada 3 bagian
// 1.wadahnya
// 2.variable yang mengubah nilai dalam wadah
// 3.nilai default
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// search digunakn sebagai wadah pengumpul data
// setSearch digunakan sebagai tolss yang mengupdate wadah search melalui inputan user
// useState(""); yaitu value default dari wadah search
