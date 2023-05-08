import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import { useEffect, useState } from "react";
import axios from "axios";

function UsersPosts() {
  const params = useParams();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${params.id}/posts`)
      .then((res) => setPosts(res.data))
      .catch((error) => console.log(error));
  }, [params.id]);

  const removeProduct = (id) => {
    let filteredProducts = posts.filter((q) => q.id != id);
    setPosts(filteredProducts);
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${params.id}/posts`)
      .then((res) => setPosts(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Layout>
        <Row>
          {posts &&
            posts.map((post) => (
              <>
                <Col xs={3} style={{ display: "inline-grid" }}>
                  <Card
                    className="my-2"
                    color="dark"
                    inverse
                    style={{
                      width: "18rem",
                    }}
                  >
                    <CardBody>
                      <CardTitle tag="h5">{post.title}</CardTitle>
                      <CardText>{post.body}</CardText>
                      <div
                        className="buttons"
                        style={{ display: "flex", gap: 10 }}
                      >
                        <Button color="primary">Edit</Button>
                        <Button
                          color="danger"
                          onClick={() => removeProduct(post.id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </>
            ))}
        </Row>
      </Layout>
    </>
  );
}

export default UsersPosts;
