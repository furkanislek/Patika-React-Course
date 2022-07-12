import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './Layout';
import About from './pages/About';
import Blog from './pages/Blog';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import Post from './pages/Post';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:postId" element={<Post />} />
          <Route path="*" element={<Error404 />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
};

export default App;