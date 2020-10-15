import React, { Fragment, useMemo } from 'react';
import Layout from '../../shared/Layout';
import { Card, Row, Col } from 'react-bootstrap';
import data from './data.json';
const LocalData = () => {
  const users = useMemo(() => data, []);
  return (
    <Layout title="Data: Local">
      <Row className="my-5">
        {users.map((user, i) => (
          <Col key={i}>
            <Card className="my-2" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Header>
                  <h3>{user.name}</h3>
                  <small>{user.username}</small>
                </Card.Header>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Layout>
  );
}
export default LocalData;
