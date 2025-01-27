// app/components/ServerComponent.server.js

import React from "react";

const ServerComponent = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/5");
  const data = await response.json();

  return (
    <div>
      <h1>Server-Side Component</h1>
      <p>Title: {data.title}</p>
      <p>Body: {data.body}</p>
    </div>
  );
};

export default ServerComponent;
