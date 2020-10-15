import React, { useState, useMemo } from 'react';
import Code from '../../shared/Code';
import Layout from '../../shared/Layout';

const computeLongCalc = () => {
  console.log("calculating..");
  let final = 0;
  for (let i = 0; i <= 100000000; i++) final += i;
  return final;
};
const Memo = () => {
  const [count, setCount] = useState(0);
  const longCalc = useMemo(() => computeLongCalc(), []);

  return (
    <Layout title="Hooks: Memo">
      <Code>{`
          // Effect hook syntax
          const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
        `}
      </Code>

      <div className="my-5">
        {longCalc}
        <button onClick={() => setCount(count + 1)}></button>
        {count}
      </div>
    </Layout>
  );
}
 
export default Memo;
