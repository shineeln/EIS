import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './views/App';
import About from './views/About';
import Post from './views/Post';
import Photo from './views/Photo';
import Todo from './views/Todo';
import {BrowserRouter , Routes , Route} from 'react-router-dom';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/post" element={<Post />} />
      <Route path="/photo" element={<Photo />} />
      <Route path="/todo" element={<Todo />} />
    </Routes>
  </BrowserRouter>
);