import { useState } from "react";

function Update(props){
  const [title,setTitle]=useState(props.title);
  const [body,setBody]=useState(props.body);
  const [image, setImage]=useState(props.image);
  return <article>
    <h2>Update</h2>
    <form onSubmit={(event)=>{
      event.preventDefault();
      if(window.confirm('수정하시겠습니까?')){
        const title = event.target.title.value;
        const body = event.target.body.value;
        const image=URL.createObjectURL(event.target.image.files[0]);
        props.onUpdate(title,body,image);
      }
    }}>
      <p><input type="text" name="title" placeholder='title' value={title} onChange={event=>{
        setTitle(event.target.value);
      }} /></p>
      <p><textarea name="body" placeholder='body' value={body} onChange={event=>{
        setBody(event.target.value);
      }}/></p>
      <p><input type="file" name="image" onChange={event=>{
        setImage(event.target.value);
      }}/></p>
      <p><input type="submit" value="Update" /></p>
    </form>
  </article>;
}

export default Update;