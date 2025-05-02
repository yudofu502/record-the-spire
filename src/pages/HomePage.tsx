import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Record the Spire</h1>
      <p>Slay the SpireのRunファイルを解析し記録・分析します</p>
      <p>runファイルのアップロードは<Link to='/upload'>こちら</Link></p>
      <Link to="/file-list">アップロードされたファイル一覧</Link>
    </div>
  );
}

export default HomePage;