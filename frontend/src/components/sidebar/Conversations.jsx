import React from "react";
import UserList from "./UserList";

function Conversations() {
  return (
    <div className="py-2 flex flex-col overflow-auto">
      <UserList />
      <UserList />
      <UserList />
      <UserList />
      <UserList />
    </div>
  );
}

export default Conversations;
