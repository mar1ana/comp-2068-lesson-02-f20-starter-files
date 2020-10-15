import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import Code from '../../shared/Code';
import Layout from '../../shared/Layout';
const State = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <Layout title="Hooks: State">
      <Code>{`
          // State hook syntax
          const [state, setState] = useState(initialState);
        `}
      </Code>
      <div className="my-5">
        <ButtonGroup>
          <Button
            onClick={increment}
            variant="success"
          >+</Button>
          <Button disabled>{count}</Button>
          <Button
            onClick={decrement}
            variant="danger"
          >-</Button>
        </ButtonGroup>
      </div>
    </Layout>
  );
}
 
export default State;
