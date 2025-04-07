import useGetMessages from "../../hooks/useGetMessages"
import Message from "./Message"
import useListenMessages from "../../hooks/useListenMessages"
import useScrollDown from "../../hooks/useScrollDown";

function Messages() {
  const {loading, messages} = useGetMessages();
  useListenMessages();

  const ref = useScrollDown(messages) as React.MutableRefObject<HTMLDivElement>;
  return (
    <div className="px-4 flex-1 overflow-auto" ref={ref}>
      {loading && <p>Loading...</p>}
      {!loading && messages.map((message) => (
        <Message key={message.id} message={message} />  
      ))
    }
      {!loading && messages.length===0 && (
        <p className="text-center text-white">Send a message to start the conversation!</p>
      )}
    </div>
  )
}

export default Messages