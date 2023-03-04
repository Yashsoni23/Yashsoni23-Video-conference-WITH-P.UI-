import React from 'react'
import { useState } from 'react'
import { useFirebase } from '../context/firebase';

const FireChatRoom = () => {
    const firebase = useFirebase();
    const [text, setText] = useState("");
    const time = new Date();
    const sendMsg = (e) => {
        e.preventDefault();
        firebase.sendMessage(text,time);
        firebase.getMessages();
    }
    return (
        <>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={sendMsg}>Sent</button>

        </>
    )
}

export default FireChatRoom