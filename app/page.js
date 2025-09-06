import './page.css';

import Link from 'next/link';
import ReloadButton from './_components/ReloadButton';

export default function Index() {
  return <>
    <div className="container-lg py-2">
      <h1 className="text-center">Atelier Initiation au Japonais</h1>

      <h2>
        <span>Séances</span> <ReloadButton />
      </h2>

      <div className="table-responsive">
        <table className="table table-striped table-hover align-middle">
          <thead>
          <tr>
            <th className="text-end">#</th>
            <th>Liens</th>
            <th className="text-nowrap">Points abordés</th>
          </tr>
          </thead>
          <tbody className="table-group-divider">
          <tr>
            <td className="text-end">15.</td>
            <td>
              <Link href="pages/story_01">Conte</Link>
            </td>
            <td>
              おむすびころりん
            </td>
          </tr>
          <tr>
            <td className="text-end">15.</td>
            <td>
            </td>
            <td>
              Forme passive
            </td>
          </tr>
          <tr>
            <td className="text-end">14.</td>
            <td>
              <Link href="pages/lesson_14">Cours</Link>
            </td>
            <td>
            </td>
          </tr>
          <tr>
            <td className="text-end">13.</td>
            <td>
              <Link href="pages/lesson_13">Cours</Link>
            </td>
            <td>
            </td>
          </tr>
          <tr>
            <td className="text-end">12.</td>
            <td>
              <Link href="pages/lesson_12">Cours</Link>
            </td>
            <td>
              conjecture, condition, potentiel, forme en -ようと思う
            </td>
          </tr>
          <tr>
            <td className="text-end">11.</td>
            <td>
              <Link href="pages/lesson_11">Cours</Link>
            </td>
            <td>
              formes en -ても, -てみる, -て+あげる/くれる/もらう, -たら, -かもしれない
            </td>
          </tr>
          <tr>
            <td className="text-end">10.</td>
            <td>
              <Link href="pages/lesson_10">Cours</Link>
            </td>
            <td>
              forme en -てある, と de citation
            </td>
          </tr>
          <tr>
            <td className="text-end">9.</td>
            <td>
              <Link href="pages/lesson_09">Cours</Link>
            </td>
            <td>
              recommendation, particules より, よ, から, が, の
            </td>
          </tr>
          <tr>
            <td className="text-end">8.</td>
            <td>
              <Link href="pages/lesson_08">Cours</Link>
            </td>
            <td>
              nominalisation, subordonnée relative, formes en -すぎる, -てしまう, particules
            </td>
          </tr>
          <tr>
            <td className="text-end">7.</td>
            <td>
              <Link href="pages/lesson_07">Cours</Link>
            </td>
            <td>
              particule が, adjectifs, jours & mois
            </td>
          </tr>
          <tr>
            <td className="text-end">6.</td>
            <td>
              <Link href="pages/lesson_06">Cours</Link>
            </td>
            <td>
              nombres, compteurs, heure
            </td>
          </tr>
          <tr>
            <td className="text-end">5.</td>
            <td>
              <Link href="pages/lesson_05">Cours</Link>
            </td>
            <td>
              Kanjis
            </td>
          </tr>
          <tr>
            <td className="text-end">4.</td>
            <td>
              <Link href="pages/lesson_04">Cours</Link>{' '}
              | <Link href="pages/exercises_04">Exos</Link>
            </td>
            <td>
              verbes, formes en -て, particules を, と, で, に & ね
            </td>
          </tr>
          <tr>
            <td className="text-end">3.</td>
            <td>
              <Link href="pages/lesson_03">Cours</Link>{' '}
              | <Link href="pages/vocab_03" target="_blank">Vocab</Link>{' '}
              | <Link href="pages/exercises_03">Exos</Link>
            </td>
            <td>
              Katakanas, questions, démonstratifs
            </td>
          </tr>
          <tr>
            <td className="text-end">2.</td>
            <td>
              <Link href="pages/lesson_02">Cours</Link>{' '}
              | <Link href="pages/vocab_02" target="_blank">Vocab</Link>{' '}
              | <Link href="pages/exercises_02">Exos</Link>
            </td>
            <td>
              phrases simples, particules は, の & も, présentation, suffixes honorifiques
            </td>
          </tr>
          <tr>
            <td className="text-end">1.</td>
            <td>
              <Link href="pages/lesson_01">Cours</Link>{' '}
              | <Link href="pages/exercises_01">Exos</Link>
            </td>
            <td>
              systèmes d’écriture, Hiraganas
            </td>
          </tr>
          </tbody>
        </table>
      </div>

      <h2>Annexes</h2>

      <ul>
        <li>
          <Link target="_blank" href="annex/kanas">Tableaux des Hiraganas et Katakanas</Link>
        </li>
      </ul>

      <h2>Liens utiles</h2>

      <div className="table-responsive">
        <table className="table table-striped table-hover align-middle">
          <thead>
          <tr>
            <th scope="col">Lien</th>
            <th scope="col">Descriptif</th>
          </tr>
          </thead>
          <tbody className="table-group-divider">
          <tr>
            <td>
              <a target="_blank"
                 href="https://play.google.com/store/apps/details?id=com.craxic.akebifree">Akebi</a>
              {' '}|{' '}
              <a target="_blank"
                 href="https://apps.apple.com/fr/app/shirabe-jisho/id1005203380">Shirabe Jisho</a>
            </td>
            <td>
              Probablement la meilleure application de dictionnaire japonais pour Android / et pour iOS.
            </td>
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://fr.wikipedia.org/wiki/%E3%81%82">Hiraganas / Katakanas</a>
            </td>
            <td>
              Page Wikipédia dédiée aux Kanas (navigation par le tableau à droite de la page).
            </td>
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://apps.ankiweb.net/">AnkiWeb</a>
            </td>
            <td>
              Logiciel de FlashCards (cartes à mémoriser) permettant de facilement retenir tout et n’importe quoi
              (comme du vocabulaire, des Kanjis, etc.). Disponible en ligne, sur PC et sur Android / iOS.
            </td>
          </tr>
          <tr>
            <td>
              <a target="_blank"
                 href="https://play.google.com/store/apps/details?id=com.Obenkyo">Obenkyo</a>
            </td>
            <td>
              Une bonne application pour apprendre le japonais (Kanjis et grammaire) pour Android.
            </td>
          </tr>
          <tr>
            <td>
              <a target="_blank"
                 href="https://addons.mozilla.org/fr/firefox/addon/jisho-search-plugin/">Jisho pour Firefox</a>
              {' '}|{' '}
              <a target="_blank"
                 href="https://chrome.google.com/webstore/detail/jisho-extension/iblocgbegbfbikfpjajboohgnegaonho">Jisho
                pour Chrome</a>
            </td>
            <td>
              Extension de navigateur permettant de rechercher dans Jisho le texte sélectionné à l’aide d’un
              simple clic droit.
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </>;
}
