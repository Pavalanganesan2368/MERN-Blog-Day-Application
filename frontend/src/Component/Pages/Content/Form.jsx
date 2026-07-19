import { useContext, useState } from "react";
import { DataContext } from "../../../Context/ContextData";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { toast } from "react-toastify";

const Form = () => {
  const { handleAdd, handleUpdate, editId, form, setForm } = useContext(DataContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    const newForm = { ...form, [name]: value };
    setForm(newForm);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.postName.trim() || !form.postDescription.trim()) {
      toast.error("Please Fill the Post Form!");
      return;
    }
    editId ? handleUpdate() : handleAdd(form);
    setForm({
      postName: "",
      postDescription: "" 
    });
    navigate('/');
  }
  return (
    <section className='p-3 h-screen flex flex-1 justify-center items-center flex-col'>
      <h2 className="text-center text-2xl font-bold">Post Form</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
        <div className="flex flex-col gap-2">
          <label htmlFor="postTitle" className="text-2xl my-1 font-bold">Post Title: </label>
          <input 
            name="postName" 
            id="postName"
            onChange={handleChange}
            value={form.postName}
            className="w-full input rounded rounded-2 p-2 text-2xl"
            placeholder="Post Title"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="postDescription" className="text-2xl my-1 font-bold">Post Description: </label>
          <textarea 
            name="postDescription" 
            id="postDescription"
            onChange={handleChange}
            value={form.postDescription}
            className="w-full h-50 input rounded rounded-2 resize-none p-2 text-2xl"
            placeholder="Post Description"
          ></textarea>
        </div>

        <button className="btn w-full bg-blue-500 text-lg">{editId ? "UPDATE POST" : "SUBMIT POST"}</button>
      </form>

    </section>
  );
}

export default Form;