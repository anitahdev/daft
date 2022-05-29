import React from "react";

function Home() {
  return (
    <>
      <div style={{ marginLeft: 50, color: 'purple' }}>
        <h1>welcome to my website</h1>
      </div>
      <div
        style={{
          fontSize: 46,
          color: "white",
          backgroundImage: `url("https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1856&q=80")`,
          width: 1265,
          height: 650,
        }}
      ></div>
    </>
  );
}

export default Home;
