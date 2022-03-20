import React from "react";
import { Route } from "react-router-dom";
import PostList from "./pages/PostList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Write from "./pages/Write";
import Post from "./pages/Post";

const App = () => {
  return (
    <>
    <Route component={PostList} path={['/@:username','/']}exact />
    <Route component={Login} path={["/login"]} />
    <Route component={Register} path={["/register"]} />
    <Route component={Write} path={["/write"]} />
    <Route component={Post} path={["/@:username/:postId"]} />
    </>
  );
};

export default App;
