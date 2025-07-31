function Create(props){
  return <article>
    <h2>Create</h2>
    <form onSubmit={(event)=>{
      event.preventDefault();
      if(window.confirm('생성하시겠습니까?')){
        const title = event.target.title.value;
        const body = event.target.body.value;
        const file=event.target.image.files;
        const reader=new FileReader();
        const blob=new Blob(file);
        const image=JSON.stringify(reader.readAsDataURL(blob));
        props.onCreate(title,body,image);
      }
    }}>
      <p><input type="text" name="title" placeholder='title' /></p>
      <p><textarea name="body" placeholder='body' /></p>
      <p><input type="file" name="image" /></p>
      <p><input type="submit" value="Create" /></p>
    </form>
  </article>;
}

export default Create;
