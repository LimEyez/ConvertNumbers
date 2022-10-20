import { useEffect, useState } from "react"
import Message from "./Message";
import store_chat from "../Stores/store_chat";
export default function Chat({ server }) {

    const [updateChat, setUpdateChat] = useState(true);
    const arrayOfChat = store_chat.getState().array;
    useEffect(() => {
        const input = document.getElementById('textMessage');
        const btn = document.getElementById('sendMessage');
        const chat = document.getElementById('chat');


        setInterval(() => {
            const getChat = async () => {
                const chat = await server.getChat().then(data => { return data });
                if (chat && chat[chat.length - 1].date !== store_chat.getState().date) {
                    store_chat.dispatch({ type: 'date', value: chat[chat.length - 1].date });
                    store_chat.dispatch({ type: 'save', value: chat.reverse() });
                }
            }
            //Получение чата
            getChat();
            //Отслеживание изменения чата
        }, 1000);
        store_chat.subscribe(() => {
            setUpdateChat(!updateChat);
        })

        // const getChat = async () => {
        //     const chat = await server.getChat().then(data => { return data });
        //     if (chat) {
        //         store_chat.dispatch({ type: 'save', value: chat.reverse() });
        //     }
        // }

        btn.addEventListener('click', () => {
            chat.scrollTo(0, chat.scrollHeight);
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