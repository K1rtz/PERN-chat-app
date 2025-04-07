import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";
import useConversation from "../../zustand/useConversation";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations(); 


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!search) return;
    if(search.length<3){
      return toast.error("Search termmust be at least 3 characters long!");
    }

    const conversation  = conversations.find((c: ConversationType) =>{
      console.log(c.fullname.toLowerCase() + " xdd " + search)
      console.log( c.fullname.toLowerCase().includes(search.toLowerCase()))
      return c.fullname.toLowerCase().includes(search.toLowerCase())
    });
    
    if(conversation){
      setSelectedConversation(conversation);
      setSearch('');
    }else{
      console.log("xdd:" + conversation)
      toast.error("User not found!");
    }
  }

  return (
    <form className="flex items-center gap-2" onSubmit = {handleSubmit}>
        <input type="text" placeholder="Search..." className="input input-bordered rounded-fill"
        value = {search}
        onChange = {(e)=>{setSearch(e.target.value)}}
        />
        <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <IoSearch />
        </button>
    </form>
  )
}

export default SearchInput