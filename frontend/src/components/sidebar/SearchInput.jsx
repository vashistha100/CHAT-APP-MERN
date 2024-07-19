import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversation from "../../hooks/useGetConversation";
import toast from "react-hot-toast";
function SearchInput() {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;
    if (search.length < 3) {
      return toast.error(`Search term must be atleast 3 character long`);
    }

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

if(conversation){
  setSelectedConversation(conversation)
  setSearch('');

}else toast.error('No such user found')


  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 mt-2 mx-auto p-4"
    >
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered input-info w-full max-w-xs"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="btn btn-circle btn-outline">
        <IoSearchSharp />
      </button>
    </form>
  );
}

export default SearchInput;
