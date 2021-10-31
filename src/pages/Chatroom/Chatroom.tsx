import React from 'react';
import firebase from 'firebase/app'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { auth, firestore } from "../../firebase"

interface Message {
    text: string,
    uid: string,
    photoURL: string,
    id: string
}

type ChatMessageProps = {
    message: Message,
    key: string
}

function ChatMessage(props: ChatMessageProps) {
    const { text, uid, photoURL } = props.message
    const messageClass = auth.currentUser != null && uid === auth.currentUser.uid ? 'sent flex-row-reverse text-white self-end' : 'received'
    return <div className={`message ${messageClass} flex items-center`}>
        <img src={photoURL} className="w-8 h-8 m-2 rounded-full shadow-lg bg-gray-500" />
        <p className="flex ml-1 h-auto text-md font-normal p-1 items-end rounded-md">{text}</p>
    </div>
}

function ChatRoom() {


    const messagesRef = firestore.collection('messages')
    const query = messagesRef.orderBy('createdAt').limit(25)

    const [messages]: [Message[] | undefined, boolean, Error | undefined] = useCollectionData<Message>(query, { idField: 'id' })

    const [formValue, setFormValue] = React.useState('')

    const dummy = React.useRef<HTMLDivElement>(null)

    const sendMessage = async (e: React.FormEvent) => {
        e.preventDefault()
        const user = auth && auth.currentUser && auth.currentUser;

        const uid = user && user.uid
        const photoURL = user && user.photoURL

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })

        setFormValue('')
        dummy.current && dummy.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="grid place-content-center border-4 border-blue-800 rounded-lg">
            <main className="bg-gray-800 p-4 w-full overflow-y-scroll flex flex-col">
                {
                    messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)
                }
                <div ref={dummy}></div>
            </main>
            <form onSubmit={sendMessage} className="w-full flex justify-center">
                <input
                    className="h-8 p-2 w-full focus:outline-none rounded-bl-lg"
                    value={formValue}
                    onChange={e => setFormValue(e.target.value)}
                />
                <button type="submit" className="w-16 font-bold tracking-wider text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">SEND</button>
            </form>
        </div>
    )
}

function Chatroom() {

    const fadeLogo = {
        hidden: {
            scale: .8,
            opacity: 0
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                delay: .6,
            }
        },
    }

    const fadeDesc = {
        hidden: {
            scale: .8,
            opacity: 0
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                delay: .8,
            }
        },
    }

    const fadeBottom = {
        hidden: {
            opacity: 0,
            y: 80,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: .6,
            }
        },
    }

    return (
        <div className="pt-20 bg-homeImg">

            <div className="grid w-full py-10 place-items-center">
                <h1 className="pb-2 text-5xl font-semibold tracking-wide font-carattere lg:text-6xl">
                    Chatroom
                </h1>
                <div className="inline-flex h-1 bg-indigo-500 rounded-full w-44"></div>
            </div>

            <div className="font-sourceSerifPro italic md:pl-12 pl-10 text-2xl">Ask your doubts and share your learning</div>

            <div className="font-sourceSerifPro flex justify-center items-center h-screen ">
                <ChatRoom />
            </div>
        </div>
    );
}

export default Chatroom;
