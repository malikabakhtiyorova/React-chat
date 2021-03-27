import {ChatEngine} from "react-chat-engine";

import "./App.css";
import ChatFeed from './components/ChatFeed.jsx';

const App = () => {
    return (
        <ChatEngine
        height="100vh"
        projectID = "a30f5404-ef94-4cf8-ab6e-f69961632542"
        userName = "Utrujja"
        userSecret="12345"
        renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
         />
    )
}

export default App;