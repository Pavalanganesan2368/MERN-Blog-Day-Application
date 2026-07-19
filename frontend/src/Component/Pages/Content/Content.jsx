import React, { useContext } from "react";
import { DataContext } from "../../../Context/ContextData";
import SearchInputComponent from "./SearchInputComponent";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const Content = () => {
  const { post, searchPost, loading } = useContext(DataContext);
  return (
    <main className="flex-1">
      <SearchInputComponent />
      <ul className="flex-1 flex-col h-100 gap-3 p-3 overflow-y-auto">
        {searchPost?.length === 0
          ? 
          (
            <div className="flex items-center justify-center h-90 font-bold text-2xl">
              {!loading && <p>Items Not Found</p>}
              {loading &&
                <section className="flex flex-col items-center text-blue-400 gap-2">
                  <div className="loading loading-spinner loading-xl"></div>
                  <p>Loading...</p>
                </section> 
              }
            </div>
          )
          : 
          ( 
            searchPost?.map((posts) => (
              <li key={posts?._id} className="my-2 border-b-2 border-gray-700">
                <Link to={`/${posts?._id}`}>
                  <h1 className="text-2xl font-bold mb-2">{posts?.postName}</h1>
                </Link>
                <p className="text-gray-400 my-2">{format(new Date(posts?.postDate), "dd/MM/yyyy hh:mm a")}</p>
                <p className="text-gray-400 mb-2">
                  {posts?.postDescription.length >= 25
                    ? `${posts?.postDescription.substring(0, 25)}...`
                    : posts?.postDescription}
                </p>
              </li>
            ))
          )}
      </ul>
    </main>
  );
};

export default Content;
