import ExternalLink from '@/components/ExternalLink';
import Intro from '@/app/pages/_components/Intro';
import TocAndLinks from '@/app/pages/_components/TocAndLinks';

export const metadata = {
  title: "Exercices 4",
};

export default function Exercises04() {
  return (
    <div className="container py-2 aij-layout">
      <Intro>
        <h1>Exercices 4 − 練習4</h1>
      </Intro>

      <TocAndLinks furiganas>
        <ExternalLink href="lesson_04">
          Cours
        </ExternalLink>
      </TocAndLinks>

      <div className="aij-content">
        <h3 id="version" className="border-bottom">Version</h3>

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
            <tbody className="table-group-divider">
            <tr>
              <td className="japanese easy">
                <div>
                  <span>タイ</span>
                  <span>の</span>
                  <ruby>食<rt>た</rt>べ<rt></rt>放題<rt>ほうだい</rt></ruby>
                  <span>レストラン</span>
                  <span>で</span>
                  <ruby>食<rt>た</rt>べたい</ruby>
                  <span>です。</span>
                </div>
              </td>
              <td><span className="answer">Je veux manger dans un restaurant Thaï à volonté.</span></td>
            </tr>
            <tr>
              <td className="japanese easy">
                <div>
                  <span>メラニー</span>
                  <span>の</span>
                  <ruby>家<rt>いえ</rt></ruby>
                  <span>に</span>
                  <ruby>行<rt>い</rt>って</ruby>
                  <span>ください。</span>
                </div>
              </td>
              <td><span className="answer">Va chez Mélanie s’il-te-plaît.</span></td>
            </tr>
            </tbody>
          </table>
        </div>

        <h3 id="thème" className="border-bottom">Thème</h3>

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
              <td>Je lance un dé avec Dédé.</td>
              <td className="japanese easy">
                <div className="answer">
                  <span>デデ</span>
                  <span>と</span>
                  <span>サイコロ</span>
                  <span>を</span>
                  <ruby>振<rt>ふ</rt>ります。</ruby>
                </div>
              </td>
            </tr>
            <tr>
              <td>J’ai fait une sauce aux tomates et aux oignons.</td>
              <td className="japanese easy">
                <div className="answer">
                  <span>トマト</span>
                  <span>と</span>
                  <ruby>玉<rt>たま</rt>ねぎ</ruby>
                  <span>の</span>
                  <span>ソース</span>
                  <span>を</span>
                  <ruby>作<rt>つく</rt>りました。</ruby>
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
