/* eslint-disable react/jsx-key */
// import { Col, Row, Spinner, Table } from "reactstrap";
// import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { Col, Row, Spinner, Table } from "reactstrap";
import UserData from "../components/UserData";
import Layout from "../components/Layout";

function Users() {
  let initialState = {
    data: undefined,
    error: undefined,
    loading: false,
  };

  const [datas, setDatas] = useState(initialState);
  useEffect(() => {
    setDatas((oldData) => ({
      ...oldData,
      loading: true,
      error: undefined,
      data: undefined,
    }));

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(({ data }) => {
        setDatas((oldData) => ({
          ...oldData,
          data: data,
          loading: false,
          error: undefined,
        }));
      })
      .catch((err) => {
        setDatas({ data: undefined, loading: false, error: err.toString() });
      });
  }, []);

  return (
    <Layout>
      <Row>
        <Col>
          <div>
            {datas.error && <h5 color="red">Error occured ....</h5>}
            {datas.loading && <Spinner />}
            {datas.data && (
              <Table dark>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>email</th>
                    <th>companyName</th>
                    <th>button</th>
                  </tr>
                </thead>
                <tbody>
                  <UserData data={datas.data} />
                </tbody>
              </Table>
            )}
          </div>
        </Col>
      </Row>
    </Layout>
  );
}

export default Users;
