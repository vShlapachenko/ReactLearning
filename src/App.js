import React, {useRef, useState} from 'react'
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/ui/button/MyButton";
import MyInput from "./components/ui/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'Javascript 2', body: 'Description'},
    {id: 3, title: 'Javascript 3', body: 'Description'},
    {id: 4, title: 'Javascript 4', body: 'Description'}
  ])

  const [post, setPost] = useState({title: '', body: ''})
  const [body, setBody] = useState('')

  const addNewPost = (e) => {
    e.preventDefault()
    setPosts([...posts, {...post, id: Date.now()}])
    setPost({title: '', body: ''})
  }
  
  return (
    <div className="App">
      <form>
        <MyInput
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          type="text"
          placeholder="Post Name"
        />
        <MyInput
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
          type="text"
          placeholder="Post Description"
        />
        <MyButton onClick={addNewPost}>Create Post</MyButton>
      </form>
      <PostList posts={posts} title='Post List About JavaScript'/>

    </div>
  );
}

export default App;
