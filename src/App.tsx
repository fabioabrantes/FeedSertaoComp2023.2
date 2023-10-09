
import { Header } from './components/Header';
import { Profile } from './components/Profile';
import { Post } from './components/Post';

import {posts} from '../data';

import estilos from './App.module.css';
import './global.css';

export function App() {


  return (
    <>
      <Header title="IV SertaoComp feed"/>
      
      <div className={estilos.empacotador}>
        <Profile/> 
       
        <main>

          {
            posts.map(post =>(
              <Post
              key={post.id} 
              author={post.author}
              content={post.description}
              publishedAt={post.publishedAt}
            />
            ))
          }
          
          
        </main>
      </div>
    </>
  );
}


