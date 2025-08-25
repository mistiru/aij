import ExternalLink from '@/app/pages/_components/ExternalLink';
import Intro from '@/app/pages/_components/Intro';
import TocAndLinks from '@/app/pages/_components/TocAndLinks';

export const metadata = {
  title: "Exercices 3",
};

export default function Exercises01() {
  return (
    <div className="container py-2 aij-layout">
      <Intro>
        <h1>Exercices 3 − 練習3</h1>
      </Intro>

      <TocAndLinks furiganas>
        <ExternalLink href="lesson_03">
          Cours
        </ExternalLink>
        <br/>
        <ExternalLink href="vocab_03">
          Vocabulaire
        </ExternalLink>
      </TocAndLinks>

      <div className="aij-content">
        <h3 id="lecture" className="border-bottom">Lecture</h3>

        <p>
          Écrivez les mots suivants en Romajis :
        </p>

        <div className="table-responsive">
          <table className="table table-sm table-striped table-hover text-center align-middle">
            <thead>
            <tr>
              <th>かたかな</th>
              <th>Romajis</th>
            </tr>
            </thead>
            <tbody className="table-group-divider">
            <tr>
              <td>アルバイト</td>
              <td><span className="answer">arubaito</span></td>
            </tr>
            <tr>
              <td>レストラン</td>
              <td><span className="answer">resutoran</span></td>
            </tr>
            <tr>
              <td>パーティー</td>
              <td><span className="answer">pa–ti–</span></td>
            </tr>
            <tr>
              <td>メール</td>
              <td><span className="answer">me–ru</span></td>
            </tr>
            <tr>
              <td>ヴォルテール</td>
              <td><span className="answer">vorute–ru</span></td>
            </tr>
            <tr>
              <td>ゼウス</td>
              <td><span className="answer">zeusu</span></td>
            </tr>
            <tr>
              <td>ユーモア</td>
              <td><span className="answer">yu–moa</span></td>
            </tr>
            <tr>
              <td>モダンバレエ</td>
              <td><span className="answer">modanbaree</span></td>
            </tr>
            <tr>
              <td>ヒップホップ</td>
              <td><span className="answer">hippuhoppu</span></td>
            </tr>
            <tr>
              <td>ホバークラフト</td>
              <td><span className="answer">hoba–kurafuto</span></td>
            </tr>
            </tbody>
          </table>
        </div>

        <h3 id="écriture" className="border-bottom">Écriture</h3>

        <p>
          Écrivez les mots suivants en Katakanas :
        </p>

        <div className="table-responsive">
          <table className="table table-sm table-striped table-hover text-center align-middle">
            <thead>
            <tr>
              <th>Romajis</th>
              <th>カタカナ</th>
            </tr>
            </thead>
            <tbody className="table-group-divider">
            <tr>
              <td>ibento</td>
              <td><span className="answer">イベント</span></td>
            </tr>
            <tr>
              <td>tisshupe–pa–</td>
              <td><span className="answer">ティッシュペーパー</span></td>
            </tr>
            <tr>
              <td>anime–shon</td>
              <td><span className="answer">アニメーション</span></td>
            </tr>
            <tr>
              <td>kyarakuta–</td>
              <td><span className="answer">キャラクター</span></td>
            </tr>
            <tr>
              <td>gaidomappu</td>
              <td><span className="answer">ガイドマップ</span></td>
            </tr>
            <tr>
              <td>desukutoppu</td>
              <td><span className="answer">デスクトップ</span></td>
            </tr>
            <tr>
              <td>meidokafe</td>
              <td><span className="answer">メイドカフェ</span></td>
            </tr>
            <tr>
              <td>taitoru</td>
              <td><span className="answer">タイトル</span></td>
            </tr>
            <tr>
              <td>buru–rei</td>
              <td><span className="answer">ブルーレイ</span></td>
            </tr>
            <tr>
              <td>nyu–arubamu</td>
              <td><span className="answer">ニューアルバム</span></td>
            </tr>
            </tbody>
          </table>
        </div>

        <h3 id="traduction" className="border-bottom">Traduction</h3>

        <p>
          Traduisez en japonais les phrases suivantes :
        </p>

        <div className="table-responsive">
          <table className="table table-sm table-striped table-hover text-center align-middle">
            <thead>
            <tr>
              <th>Français</th>
              <th>Japonais</th>
            </tr>
            </thead>
            <tbody className="table-group-divider">
            <tr>
              <td>Lequel est le gâteau à la fraise ?</td>
              <td className="japanese easy">
                <div className="answer">
                  <span>いちご</span>
                  <span>ケーキ</span>
                  <span>は</span>
                  <span>どれ</span>
                  <span>です</span>
                  <span>か。</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>C'est celui de gauche.</td>
              <td className="japanese easy">
                <div className="answer">
                  <ruby>左<rt>ひだり</rt></ruby>
                  <span>の</span>
                  <span>ケーキ</span>
                  <span>です。</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>Quel est ce Pokémon ?</td>
              <td className="japanese easy">
                <div className="answer">
                  <span>どの</span>
                  <span>ポケモン</span>
                  <span>です</span>
                  <span>か。</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>C'est un Dracolosse !</td>
              <td className="japanese easy">
                <div className="answer">
                  <span>カイリュー</span>
                  <span>だ！</span>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
