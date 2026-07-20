import { useState, useEffect } from "react";
import api from "../data/db";
import { toast } from "react-toastify";

const useAllPostData = () => {
  const [allPost, setAllPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {

      try {
        const response = await api.get("/posts/allPost");
        const allPosts = await response.data;
  
        setAllPost(allPosts);
      } catch (error) {
        toast.error(error?.message?.response?.data);
      }
    }

    fetchData();
  }, []);

  return { allPost };
}

export default useAllPostData;