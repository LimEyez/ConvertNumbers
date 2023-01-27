import { useEffect, useState } from "react"
import Message from "./Message";
import store_chat from "../Stores/store_chat";

export default function Chat({ server }) {
    const [updateChat, setUpdateChat] = useState(true);
    const arrayOfChat = store_chat.getState().messages;

    useEffect(() => {
        const input = document.getElementById('textMessage');
        const btn = document.getElementById('sendMessage');
        let hash = store_chat.getState().hash;

        const getChat = async () => {
            const getChatFromDB = await server.getMessages(hash);
            if (getChatFromDB.messages) {
                store_chat.dispatch({ type: 'hash', value: getChatFromDB.hash });
                store_chat.dispatch({ type: 'save', value: getChatFromDB.messages.reverse() });
                setUpdateChat(!updateChat);
            }
            else {
                setTimeout(getChat, 1000);
            }
        }

        getChat();

        btn.addEventListener('click', () => {
            server.sendMessage(input.value);
            input.value = '';
        })
        input.addEventListener('keyup', event => {
            if (event.keyCode === 13) {
                server.sendMessage(input.value);
                input.value = '';
            }
        })
    })

    return (
        <div id="chat_block">
            <header>
                <input placeholder="Your message" id="textMessage"></input>
                <button id="sendMessage">Send</button>
            </header>
            <div id='chat'>{
                arrayOfChat.map((message) => {
                    return (
                        <Message
                            key={arrayOfChat.indexOf(message)}
                            userName={message.name}
                            message={message.message}
                            date={message.date}
                        ></Message>
                    )
                })
            }
            </div>
        </div>
    )
}