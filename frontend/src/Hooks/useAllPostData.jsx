import { useState, useEffect } from "react";
import api from "../data/db";
import { toast } from "react-toastify";

const useAllPostData = () => {
  const [allPost, setAllPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {

      try {
        const token = localStorage.getItem("user");
        const response = await api.get("/posts/allPost", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const allPosts = await response.data;
  
        setAllPost(allPosts);
        location.reload();
      } catch (error) {
        toast.error(error?.message?.response?.data);
      }
    }

    fetchData();
  }, []);

  return { allPost };
}

export default useAllPostData;