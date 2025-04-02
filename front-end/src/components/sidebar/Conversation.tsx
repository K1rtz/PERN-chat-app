import useConversation from "../../zustand/useConversation";

function Conversation({conversation} : {conversation : any}) {


    const { setSelectedConversation, selectedConversation } = useConversation();
    const isSelected = selectedConversation?.id === conversation.id;

  return (<>

    <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${isSelected? 'bg-sky-500' : ""}`}
    onClick = {() => setSelectedConversation(conversation)}
    >
        <div className='avatar online'>
            <div className="w-12 rounder-full">
                <img src="https://cdn1.iconfinder.com/data/icons/business-and-finance-flat/512/business_businessman_worker_employee_woman-512.png" alt="user avatar" />
            </div>
        </div>
        <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
                <p className="font-bold text-gray-200"> John Doe</p>
                <span className="text-xl">🎃</span>
            </div>
        </div>
    </div>
    <div className="divider my-0 py-0 h-1" />
  </>
  )
}

export default Conversation