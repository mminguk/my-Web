function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
      <div><img src={props.image} alt={props.title} /></div>
    </article>
  );
}

export default Article;