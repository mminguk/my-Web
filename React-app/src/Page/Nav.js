function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a id={t.id} href={'/read/' + t.id} onClick={event=>{
          event.preventDefault();
          props.onChangeMode(Number(event.target.id));
        }}>{t.title}</a>
      </li>
    );
  }
  return (
    <div id="nav"> 
      <ol>{lis}</ol>
    </div>
  );
}

export default Nav;