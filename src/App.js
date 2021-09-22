import React, {useMemo, useRef, useState} from 'react'
import Counter from "./components/ui/Counter";
import ClassCounter from "./components/ui/ClassCounter";
import './styles/App.css'
import PostItem from "./components/ui/PostItem";
import PostList from "./components/ui/PostList";
import MyButton from "./components/ui/button/MyButton";
import MyInput from "./components/ui/input/MyInput";
import PostForm from "./components/ui/PostForm";
import MySelect from "./components/ui/select/MySelect";
import PostFilter from "./components/ui/PostFilter";
import MyModal from "./components/ui/my-modal/MyModal";
import {usePosts} from "./hooks/usePosts";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'AA', body: 'cc'},
    {id: 2, title: 'CC', body: 'aa'},
    {id: 3, title: 'BB', body: 'nnnn'},
    {id: 4, title: 'QQ', body: 'bb'}
  ])

  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
        Create User
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />

      <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Post List About JavaScript'/>

    </div>
  );
}

export default App;
