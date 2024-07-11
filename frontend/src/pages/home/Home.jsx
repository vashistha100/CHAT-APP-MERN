import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

function Home() {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-8 border border-gray-100 ">
      <Sidebar />
      <MessageContainer />
    </div>
  );
}

export default Home;
