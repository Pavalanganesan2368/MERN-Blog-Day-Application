import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DataContext } from "../../../Context/ContextData";

const Post = () => {
  const { allPost, post, handleDelete, handleEdit } = useContext(DataContext);
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const { id } = useParams();
  const posts = allPost.find((posts) => posts._id === id);
  
  const navigate = useNavigate();

  const handleDeleteClick = (id) => {
    navigate("/");
    handleDelete(id);
    
  };

  const handleEditClick = (item) => {
    handleEdit(item);
    navigate("/form");
  };
  return (
    <main className="flex items-center flex-col p-4 justify-start flex-1">
      <h1 className="text-2xl font-bold my-3 text-center">Post Dashboard</h1>

      <section className="p-3 w-full h-90 overflow-auto border-2 rounded-2xl border-gray-600">
        <p className="text-2xl font-bold my-2">Post Title:</p>
        <p className="text-2xl">{posts?.postName}</p>
        <p className="text-2xl font-bold my-2">Post Description:</p>
        <p className="text-2xl">{posts?.postDescription}</p>
      </section>

      {posts.user === currentUser.id && (
        <section className="p-2 mt-3 flex gap-2">
          <button
            className="btn bg-red-500 text-lg p-2"
            onClick={() => handleDeleteClick(posts._id)}
          >
            Delete Post
          </button>
          <button
            className="btn bg-blue-500 text-lg p-2"
            onClick={() => handleEditClick(posts._id)}
          >
            Update Post
          </button>
        </section>
      )}
    </main>
  );
};

export default Post;
