import React from 'react';
import Code from '../../shared/Code';
import Layout from '../../shared/Layout';
import UserProvider from './UserProvider';
import Login from './Login';
import Logout from './Logout';
import Display from './Display';


const Context = () => {
  return (
    <Layout title="Hooks: Context">
      <Code>{`
          // Effect hook syntax
          const value = useContext(MyContext);
        `}
      </Code>
      <UserProvider>
        <div className="my-5">
          <Login/>
          <Logout/>
          <Display/>
        </div>
      </UserProvider>
    </Layout>
  );
}
 
export default Context;
