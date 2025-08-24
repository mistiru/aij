import ExternalLink from '@/app/pages/_components/ExternalLink';
import Intro from '@/app/pages/_components/Intro';
import TocAndLinks from '@/app/pages/_components/TocAndLinks';

export const metadata = {
  title: "Exercices 2",
};

export default function Exercises01() {
  return (
    <div className="container py-2 aij-layout">
      <Intro>
        <h1>Exercices 2 − 練習2</h1>
      </Intro>

      <TocAndLinks furiganas>
        <ExternalLink href="lesson_02">
          Cours
        </ExternalLink>
        <br/>
        <ExternalLink href="vocab_02">
          Vocabulaire
        </ExternalLink>
      </TocAndLinks>

      <div className="aij-content">
        <h3 id="présentez-vous" className="border-bottom">Présentez-vous</h3>

        <p>
          Utilisez le même schéma que vu <ExternalLink href="lesson_02#jikoshoukai">en cours</ExternalLink>, et
          présentez-vous.
          <br/>
          Ajoutez votre hobby favori et n’hésitez pas à aller chercher sur Internet pour le vocabulaire manquant.
        </p>

        <div className="table-responsive">
          <table className="table table-sm table-striped table-hover align-middle">
            <thead>
            <tr>
              <th scope="col">Âge</th>
              <th scope="col">ひらがな</th>
              <th scope="col">Romajis</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>18歳</td>
              <td>じゅうはっさい</td>
              <td>juuhassai</td>
            </tr>
            <tr>
              <td>19歳</td>
              <td>じゅうきゅうさい</td>
              <td>juukyuusai</td>
            </tr>
            <tr>
              <td>20歳</td>
              <td>はたち</td>
              <td>hatachi</td>
            </tr>
            <tr>
              <td>21歳</td>
              <td>にじゅういっさい</td>
              <td>nijuuissai</td>
            </tr>
            <tr>
              <td>22歳</td>
              <td>にじゅうにさい</td>
              <td>nijuunisai</td>
            </tr>
            </tbody>
          </table>
        </div>

        <h3 id="un-peu-lecture" className="border-bottom">Un peu de lecture</h3>

        <p>
          Traduisez en français les phrases suivantes :
        </p>

        <div className="table-responsive">
          <table className="table table-sm table-striped table-hover text-center align-middle">
            <thead>
            <tr>
              <th>Japonais</th>
              <th>Français</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td className="japanese easy">
                <div>
                  <ruby>私<rt>わたし</rt></ruby>
                  <span>の</span>
                  <ruby>妹<rt>いもうと</rt></ruby>
                  <span>は</span>
                  <ruby>先生<rt>せんせい</rt></ruby>
                  <span>です。</span>
                </div>
              </td>
              <td><span className="answer">Ma petite sœur est professeure.</span></td>
            </tr>
            <tr>
              <td className="japanese easy">
                <div>
                  <ruby>今日<rt>きょう</rt></ruby>
                  <span>は</span>
                  <ruby>月曜日<rt>げつようび</rt></ruby>
                  <span>です。</span>
                </div>
              </td>
              <td><span className="answer">Aujourd’hui, nous sommes lundi.</span></td>
            </tr>
            <tr>
              <td className="japanese easy">
                <div>
                  <span>りんご</span>
                  <span>は</span>
                  <span>おいしい</span>
                  <span>です。</span>
                </div>
              </td>
              <td><span className="answer">Les pommes sont bonnes.</span></td>
            </tr>
            <tr>
              <td className="japanese easy">
                <div>
                  <ruby>ドイツ<rt>どいつ</rt>語<rt>ご</rt></ruby>
                  <span>の</span>
                  <ruby>先生<rt>せんせい</rt></ruby>
                  <span>の</span>
                  <ruby>ペン<rt>ぺん</rt></ruby>
                  <span>も</span>
                  <ruby>青<rt>あお</rt></ruby>
                  <span>じゃありませんでした。</span>
                </div>
              </td>
              <td><span className="answer">Le stylo du professeur d’allemand non plus n’était pas bleu.</span></td>
            </tr>
            </tbody>
          </table>
        </div>

        <h3 id="un-peu-écriture" className="border-bottom">Un peu d’écriture</h3>

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
            <tbody>
            <tr>
              <td>Je n’aime pas les animes.</td>
              <td className="japanese easy">
                <div className="answer">
                  <ruby>アニメ<rt>あにめ</rt></ruby>
                  <span>は</span>
                  <ruby>好<rt>す</rt>き</ruby>
                  <span>じゃありません。</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>M. Tanaka est gentil.</td>
              <td className="japanese easy">
                <div className="answer">
                  <ruby>田中<rt>たなか</rt>さん</ruby>
                  <span>は</span>
                  <ruby>優<rt>やさ</rt>しい</ruby>
                  <span>です。</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>Le petit Io était calme.</td>
              <td className="japanese easy">
                <div className="answer">
                  <span>いおくん</span>
                  <span>は</span>
                  <ruby>静<rt>しず</rt>か</ruby>
                  <span>でした。</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>Mon oiseau aussi est vert.</td>
              <td className="japanese easy">
                <div className="answer">
                  <ruby>私<rt>わたし</rt></ruby>
                  <span>の</span>
                  <ruby>鳥<rt>とり</rt></ruby>
                  <span>も</span>
                  <ruby>緑<rt>みどり</rt></ruby>
                  <span>です。</span>
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
