import './page.css';

import ExternalLink from '@/app/pages/_components/ExternalLink';
import Intro from '@/app/pages/_components/Intro';
import TocAndLinks from '@/app/pages/_components/TocAndLinks';

export const metadata = {
  title: "Cours n°1",
};

export default function Lesson01() {
  return (
    <div className="container py-2 aij-layout">
      <Intro>
        <h1 className="mb-3">Cours n˚1 − 第一課</h1>
      </Intro>

      <TocAndLinks>
        <ExternalLink href="exercises_01">
          Exercices
        </ExternalLink>
      </TocAndLinks>

      <div className="aij-content">
        <h2 id="intro-systèmes-écriture" className="border-bottom">Introduction aux systèmes d’écriture</h2>

        <p>
          Contrairement aux langues européennes, le japonais ne s’écrit pas avec des lettres qui composent des
          mots, mais avec des syllabes appelées <span className="notion">Kanas 「かな」</span> et des sinogrammes
          appelés <span className="notion">Kanjis 「漢字」</span>.
          <br/>
          Ce qui équivaut à nos lettres, ou plutôt syllabes, ce sont les <span className="notion">かな</span>. Ils sont
          rangés dans deux syllabaires qui sont rigoureusement les mêmes. En japonais, l’ordre "alphabétique" se
          fait en deux dimensions :
        </p>

        <div className="row text-center">
          <div className="col-md-4 offset-md-1 col-sm-6 col-12">
            <h6>Hiraganas 「ひらがな」</h6>
            <div className="table-responsive">
              <table className="table table-sm table-striped table-hover align-middle">
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
          </div>

          <div className="col-md-4 offset-md-2 col-sm-6 col-12">
            <h6>Katakanas 「カタカナ」</h6>
            <div className="table-responsive">
              <table className="table table-sm table-striped table-hover align-middle">
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

        <p>
          La différence entre les deux syllabaires réside dans leur utilisation.
          Les <span className="notion">カタカナ</span> sont utilisés notamment pour écrire les mots étrangers, pour mettre
          des mots en évidence (l’équivalent de notre italique).
        </p>

        <p>
          Les <span className="notion">漢字</span> quant à eux sont des caractères d’origine chinoise. Leur essence ne
          réside pas dans leur lecture, mais dans la sémantique qu’ils portent. C’est-à-dire que, contrairement à
          un <span className="notion">かな</span> qui ne porte pas de sens et ne se lit que d’une seule et unique
          manière, un <span className="notion">漢字</span> possède souvent plusieurs sens à lui seul et peut également
          se lire de plusieurs manières.
        </p>

        <p>
          Les <span className="notion">漢字</span> sont donc utiles pour écrire les noms, bases verbales, adverbes et
          adjectifs. Ils sont notamment très utiles pour la lecture, étant donné qu’en japonais, il n’y a pas
          d’espace dans une phrase. Les espaces présentes dans le texte en haut de cette page ont été rajoutés
          pour faciliter le découpage des mots dans les phrases. Cela ne se fait généralement que dans les livres
          pour enfants au Japon.
        </p>

        <p>
          Les <span className="notion">ひらがな</span> sont donc utilisés pour la grammaire, la conjugaison, ainsi que
          les mots ne s’écrivant usuellement pas en <span className="notion">漢字</span>.
        </p>

        <p>
          Enfin, les <span className="notion">Romajis</span> sont la transcription du japonais dans l’alphabet latin.
          Leur utilisation n’est pas si rare, mais est tout de même très limitée. On les retrouve par exemple dans
          certains noms tels que <span className="orga">NHK</span> ou encore <span className="orga">JR</span>.
        </p>

        <p>
          Dans ce cours, nous allons nous focaliser sur les <span className="notion">ひらがな</span>.
        </p>

        <h2 id="lecture-hiraganas" className="border-bottom">Lecture des Hiraganas</h2>

        <p>
          En japonais, il y a très peu de changement de lecture. Tout se lit de la même façon et on prononce
          généralement tout.
        </p>

        <p className="note">
          Dans ces notes, "tout le temps", "généralement", "tous" et "la plupart" sont synonymes. Le Japonais est
          fait de règles bien précises, mais toutes les règles ont des exceptions. Heureusement, les exceptions
          font partie de ce que l’on utilise le plus souvent, et donc s’apprennent rapidement.
        </p>

        <ul>
          <li>
            <span className="notion">あ</span> se lit <span className="notion">a</span> comme
            dans <span className="noun">cheval</span>.
          </li>
          <li>
            <span className="notion">い</span> se lit <span className="notion">i</span> comme
            dans <span className="noun">souris</span>.
          </li>
          <li>
            <span className="notion">う</span> se lit à mi-chemin entre
            le <span className="notion">eu</span> de <span className="noun">feutré</span>,
            le <span className="notion">u</span> de <span className="noun">brûler</span> et
            le <span className="notion">ou</span> de <span className="noun">hiboux</span>.
          </li>
          <li>
            <span className="notion">え</span> se lit à mi-chemin entre
            le <span className="notion">é</span> de <span className="noun">éléphant</span> et
            le <span className="notion">è</span> de <span className="noun">lèvre</span>.
          </li>
          <li>
            <span className="notion">お</span> se lit <span className="notion">o</span> comme
            dans <span className="noun">escargot</span>.
          </li>
          <li>
            <span className="notion">ん</span> est l’équivalent du <span className="notion">n</span> français, mais
            bouche fermée, un peu comme un "Hum".
          </li>
        </ul>

        <p>
          Pour les autres syllables, il suffit de procéder par assemblage des sons.
          Ainsi, <span className="notion">か</span> se lit <span className="notion">ka</span> comme
          dans <span className="noun">café</span>.
        </p>

        <p>
          Il y a tout de même quelques exceptions :
        </p>

        <ul>
          <li>
            <span className="notion">し</span> ne se lit
            pas <span className="notion">si</span> mais <span className="notion">shi</span> comme
            dans <span className="noun">chimère</span>.
          </li>
          <li>
            <span className="notion">ち</span> ne se lit
            pas <span className="notion">ti</span> mais <span className="notion">chi</span> comme
            dans <span className="noun">chin chin</span>.
          </li>
          <li>
            <span className="notion">つ</span> ne se lit
            pas <span className="notion">tu</span> mais <span className="notion">tsu</span> comme
            dans… <span className="person">Katsuni</span> ?
          </li>
          <li>
            Le <span className="notion">h</span> présent dans la transcription
            en <span className="notion">Romajis</span> des <span className="notion">Kanas は ひ へ ほ</span> se prononce
            effectivement. Il s’agit d’un <span className="notion">h</span> soufflé comme
            dans <span className="noun">hahaha</span>.
            <br/>
            Quand à <span className="notion">ふ</span>, sa prononciation tire légèrement vers
            le <span className="notion">f</span> français. Il est d’ailleurs
            transcrit <span className="notion">fu</span> en <span className="notion">Romaji</span>.
          </li>
          <li>
            Pour ce qui est de la prononciation des <span className="notion">Kanas ら り る れ ろ</span>,
            le <span className="notion">r</span> ressemble beaucoup plus à
            un <span className="notion">l</span> français.
            Il s’agit en réalité d’un début de <span className="notion">r roulé</span>, ce qui ressemble donc à
            un <span className="notion">l</span> claquant depuis le palais vers la partie inférieure de la bouche.
          </li>
          <li>
            <span className="notion">を</span> ne se lit
            pas <span className="notion">wo</span> mais <span className="notion">o</span>.
          </li>
          <li>
            Les <span className="notion">す</span> en fin de mot se prononcent <span className="notion">s</span> comme
            dans <span className="person">Hélios</span>.
          </li>
          <li>
            Les <span className="notion">し</span> en milieu de mot se
            prononcent <span className="notion">sh</span> comme
            dans <span className="noun">acheter</span> dit rapidement.
          </li>
        </ul>

        <h2 id="différences-écriture" className="border-bottom">Les différences d’écriture</h2>

        <p>
          Tout comme il existe plusieurs styles d’écriture en français (l’ordinateur écrit en script alors qu’à
          l’école, on apprend à écrire en attaché), il y a aussi une différence en japonais entre les caractères
          imprimés et les caractères manuscrits.
          <br/>
          Cependant, contrairement à l’importance qu’on y accorde en France, au Japon il est important de bien
          écrire les <span className="notion">ひらがな</span>.
        </p>

        <p>
          Voici un tableau récapitulatif des différences les plus courantes entre les caractères écrits par une
          personne et ceux imprimés via un ordinateur :
        </p>

        <div className="row">
          <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-xl-4 offset-xl-4">
            <div className="table-responsive">
              <table className="table table-sm table-striped table-hover text-center align-middle">
                <thead>
                <tr>
                  <th className="border-end" scope="col">Écriture manuscrite</th>
                  <th scope="col" colSpan="2">Écritures d’imprimerie</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td className="border-end">
                    <img className="kana-img" src="/img/hiraganas/hand-ki.png" alt="hand-ki"/>
                  </td>
                  <td>
                    <img className="kana-img" src="/img/hiraganas/pc-ki.png" alt="pc-ki"/>
                  </td>
                  <td>
                    <img className="kana-img" src="/img/hiraganas/pc-style-ki.png" alt="pc-style-ki"/>
                  </td>
                </tr>
                <tr>
                  <td className="border-end">
                    <img className="kana-img" src="/img/hiraganas/hand-sa.png" alt="hand-sa"/>
                  </td>
                  <td>
                    <img className="kana-img" src="/img/hiraganas/pc-sa.png" alt="pc-sa"/>
                  </td>
                  <td>
                    <img className="kana-img" src="/img/hiraganas/pc-style-sa.png" alt="pc-style-sa"/>
                  </td>
                </tr>
                <tr>
                  <td className="border-end">
                    <img className="kana-img" src="/img/hiraganas/hand-na.png" alt="hand-na"/>
                  </td>
                  <td>
                    <img className="kana-img" src="/img/hiraganas/pc-na.png" alt="pc-na"/>
                  </td>
                  <td>
                    <img className="kana-img" src="/img/hiraganas/pc-style-na.png" alt="pc-style-na"/>
                  </td>
                </tr>
                <tr>
                  <td className="border-end">
                    <img className="kana-img" src="/img/hiraganas/hand-fu.png" alt="hand-fu"/>
                  </td>
                  <td>
                    <img className="kana-img" src="/img/hiraganas/pc-fu.png" alt="pc-fu"/>
                  </td>
                  <td>
                    <img className="kana-img" src="/img/hiraganas/pc-style-fu.png" alt="pc-style-fu"/>
                  </td>
                </tr>
                <tr>
                  <td className="border-end">
                    <img className="kana-img" src="/img/hiraganas/hand-ya.png" alt="hand-ya"/>
                  </td>
                  <td>
                    <img className="kana-img" src="/img/hiraganas/pc-ya.png" alt="pc-ya"/>
                  </td>
                  <td>
                    <img className="kana-img" src="/img/hiraganas/pc-style-ya.png" alt="pc-style-ya"/>
                  </td>
                </tr>
                <tr>
                  <td className="border-end">
                    <img className="kana-img" src="/img/hiraganas/hand-ri.png" alt="hand-ri"/>
                  </td>
                  <td>
                    <img className="kana-img" src="/img/hiraganas/pc-ri.png" alt="pc-ri"/>
                  </td>
                  <td>
                    <img className="kana-img" src="/img/hiraganas/pc-style-ri.png" alt="pc-style-ri"/>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <p>
          Certes il s’agit simplement d’un changement de police dans le cas de ce document, mais ce qu’il faut
          voir, ce sont les jointures entre les différents traits des caractères, jointures qui ne sont pas
          présentes dans l’écriture manuscrite.
        </p>

        <p>
          Dans le cas de <span className="notion">き</span> par exemple, si je vous demandais combien de traits
          composent ce caractère, vous auriez du mal à me répondre, car cela à l’air de dépendre de la police.
        </p>

        <p>
          C’est en réalité plus complexe que ça. Historiquement, le nombre de traits correspond au nombre de fois
          où l’on lève hautement le pinceau. L’ordinateur veut montrer que le caractère n’est composé que de 3
          traits en reliant les deux parties du dernier, mais si on essaie de
          tracer <span className="notion">き</span> sans lever un minimum le pinceau (et qu’on est droitier), la plume
          va se retourner sur elle-même à l’endroit où à la main on laisse justement un espacement, et finalement former
          un gros pâté. C’est donc pour cette raison qu’on laisse un blanc au milieu du dernier trait.
        </p>

        <p>
          Seulement, cet usage de laisser un espace dans le caractère s’est très largement démocratisé à l’écrit,
          si bien que maintenant, la plupart des dictionnaires électroniques considèrent, lors de la
          reconnaissance de caractères, que celui-ci est formé de non pas trois, mais quatre traits. Pour être sûr
          de vous faire reconnaître par ces dictionnaires (et par les personnes qui pourraient vous lire), il
          convient alors de toujours séparer les parties du trait.
        </p>

        <h2 id="ordre-traits" className="border-bottom">L’ordre des traits</h2>

        <p>
          L’ordre dans lequel on trace les traits quand on écrit en japonais est super important, car quand vous
          devez lire ce qu’une personne qui écrit super mal vient d’écrire, le seul moyen de vous rattacher à ce
          que vous connaissez est l’ordre des traits.
          <br/>
          En fait, si une personne écrit mal, et qu’elle ne fait pas ses traits dans le bon ordre, les
          terminaisons des traits ne vont pas être correctes et le caractère ne ressemblera à rien.
        </p>

        <p className="note">
          De plus, tracer les traits dans le bon ordre permet d’une part de retenir plus facilement
          le <span className="notion">漢字</span> ou le <span className="notion">かな</span>, et d’autre part de
          comprendre et de retenir plus facilement les terminaisons des traits, et donc, de tracer plus facilement le
          caractère.
        </p>

        <p>
          Il existe des règles (et donc des exceptions) qui dictent comment tracer
          les <span className="notion">漢字</span> ou les <span className="notion">かな</span>. Voici les plus
          importantes, classées par ordre de priorité :
        </p>

        <ul>
          <li>
            On trace <span className="notion">du haut vers le bas</span>, autant le trait en lui-même que les traits
            les uns par rapport aux autres : par exemple <span className="notion">う</span>.
          </li>
          <li>
            On trace <span className="notion">de la gauche vers la droite</span>, autant le trait en lui-même que
            les traits les uns par rapport aux autres : par exemple <span className="notion">い</span>.
          </li>
          <li>
            Lorsque deux traits se coupent, on trace d’abord <span className="notion">le trait horizontal</span>,
            puis <span className="notion">le trait vertical</span> : par exemple <span className="notion">さ</span>.
          </li>
          <li>
            Lorsqu’il y a une symétrie verticale dans le caractère, on
            trace <span className="notion">l’axe de symétrie</span> en
            premier, <span className="notion">la partie gauche</span> en second,
            et enfin <span className="notion">la partie droite</span> : par
            exemple <span className="notion">ふ</span>.
          </li>
        </ul>

        <p className="note">
          Toutes ces conventions sont d’abord pensées pour les droitiers. Les gauchers, je suis désolé pour vous.
        </p>

        <h2 id="types-fin-traits" className="border-bottom">Les types de fin de trait</h2>

        <div className="row">
          <div className="col-12 col-md-8">
            <p>
              Il existe plusieurs types de fin de trait :
            </p>

            <ul>
              <li>L’arrêt net.</li>
              <li>L’arrêt levé.</li>
              <li>L’arrêt crocheté.</li>
            </ul>
          </div>
          <div className="col-12 col-md-4 text-center">
            <img src="/img/hiraganas/big-ke.png" alt="big-ke"/>
          </div>
        </div>

        <p>
          On peut voir ces trois types de fin de trait dans le <span className="notion">ひらがな</span> ci-dessus.
        </p>

        <ol>
          <li>
            Le trait de gauche commence net, pinceau posé, se prolonge vers le bas puis se termine avec un
            crochet.
          </li>
          <li>
            Le trait horizontal commence pinceau levé et se termine net, pinceau posé.
          </li>
          <li>
            Et le trait vertical droit commence net, se prolonge et courbe pour finir pinceau levé, formant
            ainsi une pointe.
          </li>
        </ol>

        <p>
          Évidemment, on ne pourra pas reproduire ces types de fin de trait parfaitement avec un crayon ou un
          stylo, mais il faut savoir que c’est comme ça. La légère nuance qu’on apercevra joue dans la différence
          entre une bonne écriture et une mauvaise.
        </p>

        <h2 id="ten-ten-maru" className="border-bottom">Ten-Ten & Maru − Dakuten & Handakuten</h2>

        <p>
          Pour l’instant, le syllabaire ne permet de fabriquer que 46 sons différents. Mais le japonais ne se
          limite pas à ça. L’utilisation de <span className="notion">Dakuten (Ten-Ten) 「 ﾞ」</span> et
          de <span className="notion">Handakuten (Maru) 「 ﾟ」</span> permet de créer 23 nouveaux sons.
        </p>

        <p>
          Dans l’idée, <span className="notion">Ten-Ten</span> va servir à adoucir
          un <span className="notion">かな</span> alors que <span className="notion">Maru</span> va avoir tendance à le
          renforcer.
          <br/>
          Ainsi, pour prononcer le <span className="notion">do</span> de <span className="notion">doki</span>, il suffit
          de rajouter <span className="notion">Ten-Ten</span> à <span className="notion">と</span> (to) pour qu’il
          s’adoucisse et devienne <span className="notion">ど</span> (do).
        </p>

        <p className="note">
          Vous remarquerez que <span className="notion">to</span> et <span className="notion">do</span> vous font faire
          la même forme dans votre bouche, seule "l’explosion" est différente.
        </p>

        <p>
          Cela fonctionne avec plusieurs "consonnes" :
        </p>

        <div className="row">
          <div className="col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-12">
            <div className="table-responsive">
              <table className="table table-sm table-striped table-hover align-middle">
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
                  <th scope="row">
                    <span className="notion">k</span> → <span className="notion">g</span>
                  </th>
                  <td>
                    <span className="notion">が</span> (ga)
                  </td>
                  <td>
                    <span className="notion">ぎ</span> (gi)
                  </td>
                  <td>
                    <span className="notion">ぐ</span> (gu)
                  </td>
                  <td>
                    <span className="notion">げ</span> (ge)
                  </td>
                  <td>
                    <span className="notion">ご</span> (go)
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="notion">s</span> → <span className="notion">z</span>
                  </th>
                  <td>
                    <span className="notion">ざ</span> (za)
                  </td>
                  <td>
                    <span className="notion">じ</span>* (ji)
                  </td>
                  <td>
                    <span className="notion">ず</span>* (zu)
                  </td>
                  <td>
                    <span className="notion">ぜ</span> (ze)
                  </td>
                  <td>
                    <span className="notion">ぞ</span> (zo)
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="notion">t</span> → <span className="notion">d</span>
                  </th>
                  <td>
                    <span className="notion">だ</span> (da)
                  </td>
                  <td>
                    <span className="notion">ぢ</span>* (ji)
                  </td>
                  <td>
                    <span className="notion">づ</span>* (zu)
                  </td>
                  <td>
                    <span className="notion">で</span> (de)
                  </td>
                  <td>
                    <span className="notion">ど</span> (do)
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="notion">h</span> → <span className="notion">b</span>
                  </th>
                  <td>
                    <span className="notion">ば</span> (ba)
                  </td>
                  <td>
                    <span className="notion">び</span> (bi)
                  </td>
                  <td>
                    <span className="notion">ぶ</span> (bu)
                  </td>
                  <td>
                    <span className="notion">べ</span> (be)
                  </td>
                  <td>
                    <span className="notion">ぼ</span> (bo)
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="notion">h</span> → <span className="notion">p</span>
                  </th>
                  <td>
                    <span className="notion">ぱ</span> (pa)
                  </td>
                  <td>
                    <span className="notion">ぴ</span> (pi)
                  </td>
                  <td>
                    <span className="notion">ぷ</span> (pu)
                  </td>
                  <td>
                    <span className="notion">ぺ</span> (pe)
                  </td>
                  <td>
                    <span className="notion">ぽ</span> (po)
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <p>
          Une fois n’est pas
          coutume, <span className="notion">し</span>, <span className="notion">ち</span> et <span className="notion">つ</span> font exception :
        </p>

        <ul>
          <li>
            <span className="notion">じ</span> se prononce <span className="notion">dji</span>.
          </li>
          <li>
            <span className="notion">ぢ</span> se prononce également <span className="notion">dji</span>,
            s’écrit <span className="notion">di</span> sur ordinateur, mais
            bien <span className="notion">ji</span> en <span className="notion">Romajis</span>.
          </li>
          <li>
            <span className="notion">ず</span> se prononce <span className="notion">dzu</span>.
          </li>
          <li>
            <span className="notion">づ</span> se prononce également <span className="notion">dzu</span>,
            s’écrit <span className="notion">du</span> sur ordinateur, mais
            bien <span className="notion">zu</span> en <span className="notion">Romajis</span>.
          </li>
        </ul>

        <p>
          Mauvaise nouvelle, il n’y a pas d’autre moyen pour faire la distinction
          entre <span className="notion">じ</span> et <span className="notion">ぢ</span> ou
          bien <span className="notion">ず</span> et <span className="notion">づ</span> que
          d’apprendre les mots dans lesquels ils apparaissent.
        </p>

        <h2 id="diphtongues" className="border-bottom">Les diphtongues</h2>

        <p>
          Pour l’instant, avec ce qu’on a, on ne peut faire que des sons simples, c’est-à-dire avec une consonne
          et une voyelle en <span className="notion">Romajis</span>. Les diphtongues sont ce qui va nous permettre de
          faire miauler les chats !
          <br/>
          En japonais, un chat fait <span className="notion">「nya」</span>. Il s’agit bien d’une seule syllabe, et non
          pas de <span className="notion">n</span> et <span className="notion">ya</span> côte-à-côte.
        </p>

        <p>
          Les diphtongues se créent en accolant une syllabe de la
          colonne <span className="notion">i</span> (sauf <span className="notion">い</span>) à une des
          syllabes <span className="notion">や</span>, <span className="notion">ゆ</span> ou <span className="notion">よ</span>.
          <br/>
          Pour faire <span className="notion">「nya」</span>, il faut donc
          fusionner <span className="notion">に</span> avec <span className="notion">や</span>.
          On obtient alors <span className="notion">にゃ</span>.
        </p>

        <p>
          Remarquez que le <span className="notion">や</span> est légèrement diminué de taille quand il est utilisé
          ainsi. Sur ordinateur, ça n’est pas flagrant lorsque l’on débute, mais lors de l’écriture manuscrite, il
          peut vraiment être représenté beaucoup plus petit.
        </p>

        <p>
          Comme
          toujours, <span className="notion">し</span>, <span className="notion">ち</span> et <span className="notion">つ</span> font
          exception. Associés avec <span className="notion">よ</span>, cela donne :
        </p>

        <ul>
          <li>
            <span className="notion">しょ</span> se prononce <span className="notion">cho</span> et
            s’écrit <span className="notion">sho</span> au lieu de <span className="notion">shyo</span>.
          </li>
          <li>
            <span className="notion">じょ</span> se prononce <span className="notion">djo</span> et
            s’écrit <span className="notion">jo</span> au lieu de <span className="notion">jyo</span>.
          </li>
          <li>
            <span className="notion">ちょ</span> se prononce <span className="notion">tcho</span> et
            s’écrit <span className="notion">cho</span> au lieu de <span className="notion">chyo</span>.
          </li>
          <li>
            <span className="notion">ぢょ</span> se prononce <span className="notion">djo</span> et
            s’écrit <span className="notion">jo</span> au lieu de <span className="notion">jyo</span> (et
            s’écrit <span className="notion">dyo</span> sur ordinateur).
          </li>
        </ul>

        <h2 id="allongements" className="border-bottom">Allongements</h2>

        <p>
          En réalité, le vrai cri du chat en <span className="notion">Romajis</span> n’est
          pas <span className="notion">「nya」</span> mais <span className="notion">「nyaa」</span>.
          <br/>
          La différence est difficile à percevoir pour un Français, mais est fondamentale pour un Japonais. Il y a
          des mots très différents qui ne diffèrent que d’un allongement de voyelle, comme par
          exemple <span className="notion">obasan</span> qui signifie <span className="noun">tante,
          madame</span> et <span className="notion">obaasan</span> qui signifie <span className="noun">mamie</span>.
        </p>

        <p>
          Construire un allongement de voyelle est plutôt simple. Il suffit de rajouter une voyelle après la
          syllabe à allonger. Seulement, en fonction de la syllabe, la voyelle à ajouter va changer.
          <br/>
          Pour les sons en <span className="notion">a</span>, on rajoute simplement
          un <span className="notion">あ</span>, mais pour les autres… (tu la sens venir l’exception ?)
          <br/>
          Les règles sont les suivantes :
        </p>

        <ul>
          <li>
            Pour la colonne des <span className="notion">a</span>, on ajoute un <span className="notion">あ</span>,
            comme dans <span className="noun">おばあさん</span> (mamie).
          </li>
          <li>
            Pour la colonne des <span className="notion">i</span>, on ajoute un <span className="notion">い</span>,
            comme dans <span className="adj">たのしい</span> (plaisant).
          </li>
          <li>
            Pour la colonne des <span className="notion">u</span>, on ajoute un <span className="notion">う</span>,
            comme dans <span className="noun">じゅう</span> (dix).
          </li>
          <li>
            Pour la colonne des <span className="notion">e</span>, on ajoute un <span className="notion">い</span>,
            et bien entendu, on prononce le tout <span className="notion">-èè</span>,
            comme dans <span className="noun">せんせい</span> (maître).
          </li>
          <li>
            Pour la colonne des <span className="notion">o</span>, on ajoute un <span className="notion">う</span>,
            et bien entendu, on prononce le tout <span className="notion">-oo</span>,
            comme dans <span className="noun">きょう</span> (aujourd’hui).
          </li>
        </ul>

        <p>
          À ce moment, vous me diriez "2 exceptions sur 5, t’es sûr qu’on peut appeler ça une règle ?".
          <br/>
          Et vous auriez raison, sauf que c’étaient pas des exceptions ça !
          <br/>
          Nan, parce que "il arrive" que, parfois, pour écrire un o-long, on rajoute
          un <span className="notion">お</span> (comme dans <span className="place">おおさか</span> (oosaka) : la
          ville d’Osaka), et c’est la même pour les e-longs, parfois on les écrit en rajoutant
          un <span className="notion">え</span> (par exemple, <span className="noun">ええ</span> veut dire "oui").
          <br/>
          Sympa l’exception de l’exception ?
        </p>

        <h2 id="petit-tsu" className="border-bottom">Petit Tsu</h2>

        <p>
          Il reste une dernière chose que les Japonais arrivent à prononcer, c’est ce qui correspond chez nous au
          doublement d’une consonne. En <span className="notion">Romajis</span> cela s’écrit bien avec un dédoublement
          de consonne, mais en <span className="notion">ひらがな</span>, ça consiste à rajouter un
          petit <span className="notion">っ</span> avant la syllabe dont on veut dédoubler la consonne.
        </p>

        <p>
          Par exemple, <span className="notion">yukkuri</span>, qui signifie <span className="adv">lentement</span>,
          s’écrit <span className="notion">ゆっくり</span>.
        </p>
      </div>
    </div>
  );
}
