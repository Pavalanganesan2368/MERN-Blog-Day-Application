import { createContext, useEffect, useRef, useState } from "react";
import api from "../data/db";
import useFetchData from "../Hooks/useFetchData";
import { format } from "date-fns"
import { toast } from "react-toastify";
import useAllPostData from "../Hooks/useAllPostData";

export const DataContext = createContext({});

export const ContextData = ({ children }) => {
  const { post, setPost, loading, setLoading } = useFetchData();
  const [editId, setEditId] = useState(null);
  const [searchPost, setSearchPost] = useState([]);
  const [searchAllPost, setSearchAllPost] = useState([]);
  const [searchType, setSearchType] = useState("");
  const [searchAllPostType, setSearchAllPostType] = useState("");
  const { allPost } = useAllPostData();  

  const [form, setForm] = useState({
    postName: "",
    postDescription: "",
  });

  const handleAdd = async (postInclude) => {
    try {
      const token = localStorage.getItem("token");
      const response = await api.post('/posts/post', postInclude, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setPost(prev => [...prev, response.data]);
      const emptyForm = {
        postName: "",
        postDescription: "",
      }
      setForm(emptyForm);
      toast.success("Post Added Successfully!");
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
      // location.reload();
    }
  } 

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const deletePost = post.filter(post => post._id !== id);
      await api.delete(`/posts/post/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setPost(deletePost);
      toast.success("Post Deleted Successfully!");
      // location.reload();
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  const handleEdit = (id) => {
    const foundPost = post.find(post => post._id === id);
    if (!foundPost) {
      toast.error("Edit Post not found");
      return;
    }
    const formEdit = {
      postName: foundPost.postName,
      postDescription: foundPost.postDescription,
      postDate: foundPost.postDate
    }

    setForm(formEdit);
    setEditId(id);
  }
  
  const handleUpdate = async () => {
    try {
      const editedPost = { ...form };
      const token = localStorage.getItem('token');
      await api.put(`/posts/${editId}`, editedPost, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const updatedPost = post.map(post => post._id === editId ? { ...post, ...editedPost } : post);
      setPost(updatedPost);
      toast.success("Post Updated Successfully.");
      setEditId(null);
      // location.reload();
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const filterSearch = post.filter((item) => {
      if (!item) return false;

      return (
        item.postName?.toLowerCase().includes(searchType.toLowerCase()) || item.postDescription?.toLowerCase().includes(searchType.toLowerCase())
      );
    });

    const allFilterSearch = allPost.filter((item) => {
      if (!item) return false;

      return (
        item.postName?.toLowerCase().includes(searchAllPostType.toLowerCase()) || item.postDescription?.toLowerCase().includes(searchAllPostType.toLowerCase())
      );
    })

    setSearchPost(filterSearch);
    setSearchAllPost(allFilterSearch);
  }, [post, searchType, allPost, searchAllPostType]);


  return (
    <DataContext.Provider
      value={{
        post,
        editId,
        searchPost,
        searchType,
        form,
        loading,
        allPost,
        searchAllPost,
        searchAllPostType,
        setSearchAllPostType,
        setSearchType,
        setForm,
        handleAdd,
        handleDelete,
        handleEdit,
        handleUpdate,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
