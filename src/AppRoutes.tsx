import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UploadPage from './pages/UploadPage'
import HomePage from './pages/HomePage'
import FileListPage from './pages/FileListPage';
import FileContentPage from './pages/FileContentPage';

function AppRoutes() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/upload' element={<UploadPage />} />
          <Route path='/file-list' element={<FileListPage />} />
          <Route path='/file-content/:fileIndex' element={<FileContentPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRoutes
