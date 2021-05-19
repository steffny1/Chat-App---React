import React from "react"; //importing React to handle error "react must be in scope when using JSX"
import { ChatEngine, ChatEngineWrapper } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed";
import "./App.css";
import LoginForm from "./components/LoginForm";

const App = () => {
  //check if user login details is found in localStorage and if not logged in, display login form
  if (!localStorage.getItem("username")) return <LoginForm />;
  // ChatEngine details are from https://chatengine.io/
  return (
    <ChatEngineWrapper>
      <ChatEngine
        height="100vh"
        projectID="6c436c7a-bc63-413a-854b-b994d4eab694"
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </ChatEngineWrapper>
  );
};

export default App;
