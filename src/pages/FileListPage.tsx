import { useAtom } from 'jotai';
import { runsAtom } from '../features/runs/states';

function FileListPage() {
  const [runs] = useAtom(runsAtom);

  return (
    <div>
      <h1>アップロードされたファイル一覧</h1>
      <ul>
        {runs.map((file, index) => (
          <li key={index}>
            {file.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FileListPage;