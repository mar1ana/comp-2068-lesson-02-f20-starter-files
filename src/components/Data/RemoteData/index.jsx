import React, { Fragment, useEffect, useMemo, useState } from 'react';
import Layout from '../../shared/Layout';
import { Card, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const RemoteData = () => {
  const [data, setData] = useState([]);
  const users = useMemo(() => data, [data]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(resp => setData(resp.data));
  });

  return (
    <Layout title="Data: Remote">
      <Row className="my-5">
        {users.map((user, i) => (
          <Col key={i}>
            <Card className="my-2" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>
                  <h3>{user.name}</h3>
                  <small>{user.username}</small>
                </Card.Title>
                <hr />
                <Card.Text>
                  <strong>Address</strong>
                  {Object.entries(user.address).map(([key, value]) => (
                    typeof value === "string" ? (
                      <Fragment key={key}>
                        <strong>{key}:&nbsp;</strong>{value}<br/>
                      </Fragment>
                    ) : null
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Layout>
  );
}
export default RemoteData;
