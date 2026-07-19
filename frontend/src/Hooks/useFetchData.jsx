import { useState, useEffect } from "react";
import api from "../data/db";
import { toast } from "react-toastify";

const useFetchData = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token')
        const response = await api.get("/posts", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const data = await response.data;
        setPost(data);
      } catch (error) {
        toast.error(error?.response?.data?.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { post, setPost, setLoading, loading };
};

export default useFetchData;