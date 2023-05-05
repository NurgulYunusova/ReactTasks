import { Table, Row, Col, Spinner } from "reactstrap";
import axios from "axios";
import { useEffect, useState } from "react";

function UsersTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    axios
      .get("https://jsonplaceholder.typicode.com/usesrs")
      .then((res) => setUsers(res.data))
      .catch((error) => {
        setError(error);
        console.log(error);
      });
  }, []);

  return (
    <>
      {!loading && error ? <h1>An error occurred: {error.message}</h1> : <></>}

      {loading ? (
        <Spinner>Loading...</Spinner>
      ) : error == null ? (
        <Row>
          <Col xs={6}>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Company Name</th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.map((item) => {
                    return (
                      <tr key={item.id}>
                        <th scope="row">{item.id}</th>
                        <th>{item.name}</th>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.company.name}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </Col>
        </Row>
      ) : null}
    </>
  );
}

export default UsersTable;
