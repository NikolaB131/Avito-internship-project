import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './pages/Error';
import News from './pages/News';
import Post from './pages/Post';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/news/:id" element={<Post />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;