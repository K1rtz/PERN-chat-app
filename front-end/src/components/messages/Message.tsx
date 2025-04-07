import { useContext } from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime";

const Message = ({message}: {message: MessageType}) => {

  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();
  const fromMe = message?.senderId === authUser?.id
  const chatClass = fromMe? "chat-end" : "chat-start";
  const img = fromMe ? authUser?.profilePic : selectedConversation?.profilePic
  const bubbleBg = fromMe ? "bg-blue-500" : "";

  return (
    <div className={`chat ${chatClass}`}>
        <div className=" hiddne md:block chat-image avatar">
            <div className="w-6 md:w-10 rounded-full">
                <img src={img} alt="Tailwind CSS chat bubble component" />
            </div>
        </div>
        <p className={`chat-bubble text-white ${bubbleBg} text-sm md:text-md`}>{message.body}</p>
        <span className="chat-footer opacity-50 text-xs flex gap-1 items-center">{extractTime(message.createdAt)}</span>
    </div>
  )
}

export default Message