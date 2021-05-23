import React, { useState } from 'react';
import { IdentityModal, useIdentityContext } from "react-netlify-identity-widget";


const AuthStatusView: React.FC = () => {
    const [dialog, setDialog] = useState(false);
    const identity = useIdentityContext();

 const name =
   (identity &&
     identity.user &&
     identity.user.user_metadata &&
     identity.user.user_metadata.full_name) ||
     "World";
    
    const onLogOut = () => {
        setDialog(false)
        identity.logoutUser()
    }

    
  return (
    <>
      <header>
        {identity && identity.isLoggedIn ? (
          <>
            <h1> Hello {name}</h1>
            <button onClick={()=>onLogOut()}>Log out</button>
          </>
        ) : (
          <>
            <h1>Hey, try again!</h1>
            <button onClick={() => setDialog(true)}>Log in</button>
          </>
        )}
        <IdentityModal
          showDialog={dialog}
          onCloseDialog={() => setDialog(false)}
          onLogin={(user) => console.log("hello ", user?.user_metadata)}
          onSignup={(user) => console.log("welcome ", user?.user_metadata)}
          onLogout={() => console.log("bye ", name)}
        />
      </header>
    </>
  );
};

export default AuthStatusView;
