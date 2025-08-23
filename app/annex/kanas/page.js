import './page.css'

export const metadata = {
  title: "Hiraganas & Katakanas",
};

export default function AnnexKanas() {
  return (
    <div className="container py-2 text-center">
      <div className="row text-center">
        <div className="col-6">
          <h6>Hiraganas 「ひらがな」</h6>
          <table className="table table-sm">
            <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">a</th>
              <th scope="col">i</th>
              <th scope="col">u</th>
              <th scope="col">e</th>
              <th scope="col">o</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row"></th>
              <td>あ</td>
              <td>い</td>
              <td>う</td>
              <td>え</td>
              <td>お</td>
            </tr>
            <tr>
              <th scope="row">k</th>
              <td>か</td>
              <td>き</td>
              <td>く</td>
              <td>け</td>
              <td>こ</td>
            </tr>
            <tr>
              <th scope="row">s</th>
              <td>さ</td>
              <td>し</td>
              <td>す</td>
              <td>せ</td>
              <td>そ</td>
            </tr>
            <tr>
              <th scope="row">t</th>
              <td>た</td>
              <td>ち</td>
              <td>つ</td>
              <td>て</td>
              <td>と</td>
            </tr>
            <tr>
              <th scope="row">n</th>
              <td>な</td>
              <td>に</td>
              <td>ぬ</td>
              <td>ね</td>
              <td>の</td>
            </tr>
            <tr>
              <th scope="row">h</th>
              <td>は</td>
              <td>ひ</td>
              <td>ふ</td>
              <td>へ</td>
              <td>ほ</td>
            </tr>
            <tr>
              <th scope="row">m</th>
              <td>ま</td>
              <td>み</td>
              <td>む</td>
              <td>め</td>
              <td>も</td>
            </tr>
            <tr>
              <th scope="row">y</th>
              <td>や</td>
              <td></td>
              <td>ゆ</td>
              <td></td>
              <td>よ</td>
            </tr>
            <tr>
              <th scope="row">r</th>
              <td>ら</td>
              <td>り</td>
              <td>る</td>
              <td>れ</td>
              <td>ろ</td>
            </tr>
            <tr>
              <th scope="row">w</th>
              <td>わ</td>
              <td></td>
              <td></td>
              <td></td>
              <td>を</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>ん</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            </tbody>
          </table>
        </div>

        <div className="col-6 border-start">
          <h6>Katakanas 「カタカナ」</h6>
          <table className="table table-sm">
            <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">a</th>
              <th scope="col">i</th>
              <th scope="col">u</th>
              <th scope="col">e</th>
              <th scope="col">o</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row"></th>
              <td>ア</td>
              <td>イ</td>
              <td>ウ</td>
              <td>エ</td>
              <td>オ</td>
            </tr>
            <tr>
              <th scope="row">k</th>
              <td>カ</td>
              <td>キ</td>
              <td>ク</td>
              <td>ケ</td>
              <td>コ</td>
            </tr>
            <tr>
              <th scope="row">s</th>
              <td>サ</td>
              <td>シ</td>
              <td>ス</td>
              <td>セ</td>
              <td>ソ</td>
            </tr>
            <tr>
              <th scope="row">t</th>
              <td>タ</td>
              <td>チ</td>
              <td>ツ</td>
              <td>テ</td>
              <td>ト</td>
            </tr>
            <tr>
              <th scope="row">n</th>
              <td>ナ</td>
              <td>ニ</td>
              <td>ヌ</td>
              <td>ネ</td>
              <td>ノ</td>
            </tr>
            <tr>
              <th scope="row">h</th>
              <td>ハ</td>
              <td>ヒ</td>
              <td>フ</td>
              <td>ヘ</td>
              <td>ホ</td>
            </tr>
            <tr>
              <th scope="row">m</th>
              <td>マ</td>
              <td>ミ</td>
              <td>ム</td>
              <td>メ</td>
              <td>モ</td>
            </tr>
            <tr>
              <th scope="row">y</th>
              <td>ヤ</td>
              <td></td>
              <td>ユ</td>
              <td></td>
              <td>ヨ</td>
            </tr>
            <tr>
              <th scope="row">r</th>
              <td>ラ</td>
              <td>リ</td>
              <td>ル</td>
              <td>レ</td>
              <td>ロ</td>
            </tr>
            <tr>
              <th scope="row">w</th>
              <td>ワ</td>
              <td></td>
              <td></td>
              <td></td>
              <td>ヲ</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>ン</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
