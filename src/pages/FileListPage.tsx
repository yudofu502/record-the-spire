import { useAtom } from 'jotai';
import { Link } from 'react-router-dom';
import { runsAtom } from '../features/runs/states';

function FileListPage() {
  const [runs] = useAtom(runsAtom);

  return (
    <div>
      <h1>アップロードされたファイル一覧</h1>
      <ul>
        {runs.map((file, index) => (
          <li key={index}>
            <Link to={`/file-content/${index}`}>
              {file.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FileListPage;