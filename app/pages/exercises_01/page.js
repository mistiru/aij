import ExternalLink from '@/app/pages/_components/ExternalLink';
import Intro from '@/app/pages/_components/Intro';
import TocAndLinks from '@/app/pages/_components/TocAndLinks';

export const metadata = {
  title: "Exercices 1",
};

export default function Exercises01() {
  return (
    <div className="container py-2 aij-layout">
      <Intro>
        <h1>Exercices 1 − 練習1</h1>
      </Intro>

      <TocAndLinks>
        <ExternalLink href="lesson_01">
          Cours
        </ExternalLink>
      </TocAndLinks>

      <div className="aij-content">
        <h3 id="lisez" className="border-bottom">Lisez</h3>

        <p className="mb-0">
          Écrivez les mots suivants en Romajis :
        </p>

        <p className="small text-muted">
          Passez votre souris sur la réponse pour l’afficher.
        </p>

        <div className="table-responsive">
          <table className="table table-sm table-striped table-hover text-center align-middle">
            <thead>
            <tr>
              <th>ひらがな</th>
              <th>Romajis</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>うま</td>
              <td><span className="answer">uma</span></td>
            </tr>
            <tr>
              <td>ねこ</td>
              <td><span className="answer">neko</span></td>
            </tr>
            <tr>
              <td>さくら</td>
              <td><span className="answer">sakura</span></td>
            </tr>
            <tr>
              <td>しろ</td>
              <td><span className="answer">shiro</span></td>
            </tr>
            <tr>
              <td>ぶどう</td>
              <td><span className="answer">budou</span></td>
            </tr>
            <tr>
              <td>ぎょうざ</td>
              <td><span className="answer">gyouza</span></td>
            </tr>
            <tr>
              <td>あれ</td>
              <td><span className="answer">are</span></td>
            </tr>
            <tr>
              <td>たんご</td>
              <td><span className="answer">tango</span></td>
            </tr>
            <tr>
              <td>えいが</td>
              <td><span className="answer">eiga</span></td>
            </tr>
            <tr>
              <td>のみかい</td>
              <td><span className="answer">nomikai</span></td>
            </tr>
            <tr>
              <td>やばい</td>
              <td><span className="answer">yabai</span></td>
            </tr>
            <tr>
              <td>じょうず</td>
              <td><span className="answer">jouzu</span></td>
            </tr>
            <tr>
              <td>まっちゃ</td>
              <td><span className="answer">maccha</span></td>
            </tr>
            <tr>
              <td>しゃべる</td>
              <td><span className="answer">shaberu</span></td>
            </tr>
            <tr>
              <td>べんきょう</td>
              <td><span className="answer">benkyou</span></td>
            </tr>
            </tbody>
          </table>
        </div>

        <h3 id="écrivez" className="border-bottom">Écrivez</h3>

        <p className="mb-0">
          Écrivez les mots suivants en Hiraganas :
        </p>

        <p className="small text-muted">
          Passez votre souris sur la réponse pour l’afficher.
        </p>

        <div className="table-responsive">
          <table className="table table-sm table-striped table-hover text-center align-middle">
            <thead>
            <tr>
              <th>Romajis</th>
              <th>ひらがな</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>inu</td>
              <td><span className="answer">いぬ</span></td>
            </tr>
            <tr>
              <td>ringo</td>
              <td><span className="answer">りんご</span></td>
            </tr>
            <tr>
              <td>motto</td>
              <td><span className="answer">もっと</span></td>
            </tr>
            <tr>
              <td>sakana</td>
              <td><span className="answer">さかな</span></td>
            </tr>
            <tr>
              <td>ichigo</td>
              <td><span className="answer">いちご</span></td>
            </tr>
            <tr>
              <td>naruto</td>
              <td><span className="answer">なると</span></td>
            </tr>
            <tr>
              <td>sore</td>
              <td><span className="answer">それ</span></td>
            </tr>
            <tr>
              <td>nihongo</td>
              <td><span className="answer">にほんご</span></td>
            </tr>
            <tr>
              <td>manga</td>
              <td><span className="answer">まんが</span></td>
            </tr>
            <tr>
              <td>izakaya</td>
              <td><span className="answer">いざかや</span></td>
            </tr>
            <tr>
              <td>kuro</td>
              <td><span className="answer">くろ</span></td>
            </tr>
            <tr>
              <td>midori</td>
              <td><span className="answer">みどり</span></td>
            </tr>
            <tr>
              <td>ao</td>
              <td><span className="answer">あお</span></td>
            </tr>
            <tr>
              <td>hanashi</td>
              <td><span className="answer">はなし</span></td>
            </tr>
            <tr>
              <td>gakkou</td>
              <td><span className="answer">がっこう</span></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
