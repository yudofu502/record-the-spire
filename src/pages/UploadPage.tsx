import { atom, useAtom } from 'jotai';
import { runsAtom } from '../features/runs/states';
import { Link } from 'react-router-dom';

const selectedFileAtom = atom<File | null>(null);

function UploadPage() {
  const [selectedFile, setSelectedFile] = useAtom(selectedFileAtom);
  const [runs, setRuns] = useAtom(runsAtom);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const handleAddButtonClick = () => {
    if (selectedFile) {
      setRuns([...runs, selectedFile]);
    } else {
      console.error('No file selected');
    }
  };

  return (
    <div>
      <h1>Record the Spire</h1>
      <p>runファイルをアップロードします</p>
      <div>
        <input type="file" accept=".run" onChange={handleFileChange} />
      </div>
      <button onClick={handleAddButtonClick}>追加</button>
      <Link to="/file-list">アップロードされたファイル一覧</Link>
    </div>
  );
}

export default UploadPage;