import logo from './logo.svg';
import Header from './Page/Header';
import Nav from './Page/Nav';
import Article from './Page/Article';
import Create from './CRUD/Create';
import Update from './CRUD/Update';
import './App.css';
import web from './Images/web.png';
import html from './Images/HTML.png';
import css from './Images/CSS.png';
import js from './Images/JS.png';
import { useState } from 'react';

function App() {
  const [mode, setMode]=useState('WELCOME');
  const [id,setId]=useState(null);
  const [nextId, setNextId]=useState(4);
  const [topics, setTopics] =useState ([
    { id: 1, title: 'html', body: 'html is ...', image: html },
    { id: 2, title: 'css', body: 'css is ...', image:css },
    { id: 3, title: 'javascript', body: 'javascript is ...', image:js },
  ]);
  let content=null;
  let contextControl=null;
  if(mode==='WELCOME'){
    content=<Article title="WEB" body="이 웹사이트는 웹프로그래밍 할 때 필요한 지식을 정리한 사이트입니다." image={web}></Article>;
  }else if(mode==='READ'){
    let title, body, image=null;
    for(let i=0;i<topics.length;i++){
      if(topics[i].id === id){
        title=topics[i].title;
        body=topics[i].body;
        image=topics[i].image;
      }
    }
    content=<Article title={title} body={body} image={image}></Article>;
    contextControl=<>
      <a href={"/update/"+id} className="Control" onClick={event=>{
      event.preventDefault();
      setMode('UPDATE');
    }}>Update</a>
      <div className="Control"><input type="button" value="Delete" onClick={()=>{
        const result=window.confirm('삭제하시겠습니까?');
        if(result){
          const newTopics=[];
          for(let i=0;i<topics.length;i++){
            if(topics[i].id!==id){
              newTopics.push(topics[i]);
            }
          }
          window.alert('삭제가 완료되었습니다.');
          setTopics(newTopics);
          setMode('WELCOME');
        }
    }}/></div>
    </>;
  } else if(mode==='CREATE'){
    content = <Create onCreate={(_title, _body, _img)=>{
      const newTopic={id:nextId,title:_title, body:_body, image:_img};
      const newTopics=[...topics];
      newTopics.push(newTopic);
      setTopics(newTopics);
      setMode('READ');
      setId(nextId);
      setNextId(nextId+1);
    }}></Create>
  } else if(mode==='UPDATE'){
    let title, body=null;
    for(let i=0;i<topics.length;i++){
      if(topics[i].id === id){
        title=topics[i].title;
        body=topics[i].body;
      }
    }
    content=<Update title={title} body={body} onUpdate={(title,body)=>{
      const newTopics=[...topics];
      const updatedTopic={id:id,title:title, body:body};
      for(let i=0;i<newTopics.length; i++){
        if(newTopics[i].id === id){
          newTopics[i]=updatedTopic;
          break;
        }
      }
      setTopics(newTopics);
      setMode('READ');
    }}></Update>
  }
  return (
    <div>
      <Header title="WEB" onChangeMode={()=>{
        setMode('WELCOME');
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id)=>{
        setMode('READ');
        setId(_id);
      }}></Nav>
      {content}
        <a href="/create" className="Control" onClick={(event)=>{
          event.preventDefault();
          setMode('CREATE');
        }}>create</a>
        {contextControl}
    </div>
  );
}

export default App;
