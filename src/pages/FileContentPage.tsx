import { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { useParams } from 'react-router-dom';
import { runsAtom } from '../features/runs/states';

function FileContentPage() {
  const { fileIndex } = useParams();
  const [runs] = useAtom(runsAtom);
  const file = runs[Number(fileIndex)];

  const [content, setContent] = useState<string | null>(null);

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setContent(event.target?.result as string);
      };
      reader.readAsText(file);
    }
  }, [file]);

  if (!file) {
    return <div>ファイルが見つかりません。</div>;
  }

  return (
    <div>
      <h1>{file.name} の内容</h1>
      <pre>{content}</pre>
    </div>
  );
}

export default FileContentPage;