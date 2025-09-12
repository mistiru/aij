import ExternalLink from '@/components/ExternalLink';
import Intro from '@/app/pages/_components/Intro';
import TocAndLinks from '@/app/pages/_components/TocAndLinks';

export const metadata = {
  title: "Cours n°3",
};

export default function Lesson03() {
  return (
    <div className="container-xl py-2 aij-layout">
      <Intro>
        <h1 className="mb-3">Cours n˚3 − 第三課</h1>
      </Intro>

      <TocAndLinks furiganas>
        <ExternalLink href="vocab_03">
          Vocabulaire
        </ExternalLink>
        <br/>
        <ExternalLink href="exercises_03">
          Exercices
        </ExternalLink>
      </TocAndLinks>

      <div className="aij-content">
        <h2 id="texte-cible" className="border-bottom">Texte cible</h2>

        <div className="target-text japanese easy">
          <h5 className="mb-3">
            <ruby>出会<rt>であ</rt>い</ruby>
          </h5>
          <p>
            <span>マイク</span>
            <ruby className="person">「<rt></rt>山本<rt>やまもと</rt>さん、</ruby>
            <span>こんにちは！」</span>
          </p>
          <p>
            <ruby>山本<rt>やまもと</rt>さん</ruby>
            <span>「あっ！</span>
            <ruby className="person">マイク<rt></rt>君<rt>くん</rt>、</ruby>
            <span>おはようございます。</span>
            <ruby>久<rt>ひさ</rt>しぶり</ruby>
            <span>です。</span>
            <ruby>お<rt></rt>元気<rt>げんき</rt></ruby>
            <span>ですか。」</span>
          </p>
          <p>
            <span>マイク</span>
            <span>「はい！</span>
            <ruby>元気<rt>げんき</rt></ruby>
            <span>です。</span>
            <ruby className="person">山本<rt>やまもと</rt>さん</ruby>
            <span>は？」</span>
          </p>
          <p>
            <ruby>山本<rt>やまもと</rt>さん</ruby>
            <span>「うん、</span>
            <ruby>元気<rt>げんき</rt>。</ruby>
            <span>その</span>
            <ruby>子<rt>こ</rt></ruby>
            <span>は</span>
            <span>もしかして、</span>
            <ruby>マイク<rt></rt>君<rt>くん</rt></ruby>
            <span>の</span>
            <ruby>娘<rt>むすめ</rt></ruby>
            <span>ですか。」</span>
          </p>
          <p>
            <span>マイク</span>
            <span>「はい！</span>
            <ruby>私<rt>わたし</rt></ruby>
            <span>の</span>
            <span className="person">ジュリアちゃん</span>
            <span>です。」</span>
          </p>
          <p>
            <ruby>山本<rt>やまもと</rt>さん</ruby>
            <span>「かわいい</span>
            <span>なー。」</span>
          </p>
        </div>

        <h2 id="katakanas" className="border-bottom">Les Katakanas</h2>

        <p>
          Comme vu au cours n˚1, les <span className="notion">カタカナ</span> sont utilisés pour écrire des mots étrangers,
          pour servir d’emphase dans une phrase, pour faire parler des étrangers avec un fort accent ou des
          extraterrestres, ou encore pour remplacer certains <span className="notion">漢字</span> dont il est usage
          d’écrire en <span className="notion">カタカナ</span>.
        </p>

        <p className="mb-1">
          Ils définissent un syllabaire identique aux <span className="notion">ひらがな</span> :
        </p>

        <ul>
          <li>Ils se prononcent de la même manière.</li>
          <li>Chaque <span className="notion">カタカナ</span> ne se prononce que d’une seule manière.</li>
          <li>
            On peut les adoucir ou les renforcer
            avec <span className="notion">Dakuten</span> ou <span className="notion">Handakuten</span>.
          </li>
          <li>
            On peut créer des <span className="notion">diphtongues</span> en les combinant, exactement comme
            les <span className="notion">ひらがな</span>.
          </li>
          <li>On peut dédoubler un son consonne avec l’utilisation de <span className="notion">ッ (petit tsu)</span></li>
        </ul>

        <p className="note">
          On peut également allonger le son voyelle des <span className="notion">カタカナ</span>, mais cela ne se fait pas
          comme pour les <span className="notion">ひらがな</span>. C’est en effet beaucoup plus simple, car dans tous les
          cas sans exception, cela revient à
          utiliser <span className="notion">le symbole de voyelle longue 「ー」 （長音【ちょうおん】）</span>.
          <br/>
          Ainsi, pour écrire le mot <span className="noun">sport</span> qui est un mot étranger tiré de l’anglais, on
          écrira <span className="notion">スポーツ</span> (supo–tsu).
        </p>

        <p>
          Les <span className="notion">カタカナ</span>, étant donné qu’ils servent à écrire des mots étrangers, permettent
          de transcrire certains sons qu’il est impossible de transcrire avec les <span className="notion">ひらがな</span>.
          Cela se fait en utilisant notamment une voyelle de base diminuée de taille.
        </p>

        <div className="row">
          <div className="col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-12">
            <div className="table-responsive">
              <table className="table table-sm table-striped table-hover align-middle">
                <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col" className="ps-3">a</th>
                  <th scope="col" className="ps-3">i</th>
                  <th scope="col" className="ps-3">u</th>
                  <th scope="col" className="ps-3">e</th>
                  <th scope="col" className="ps-3">o</th>
                </tr>
                </thead>
                <tbody className="table-group-divider">
                <tr>
                  <th scope="row">
                    <span className="notion">v</span>
                  </th>
                  <td>
                    <span className="notion">ヴァ</span> (va)
                  </td>
                  <td>
                    <span className="notion">ヴィ</span> (vi)
                  </td>
                  <td></td>
                  <td>
                    <span className="notion">ヴェ</span> (ve)
                  </td>
                  <td>
                    <span className="notion">ヴォ</span> (vo)
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="notion">t</span>
                  </th>
                  <td></td>
                  <td>
                    <span className="notion">ティ</span> (ti)
                  </td>
                  <td>
                    <span className="notion">トゥ</span> (tu)
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="notion">d</span>
                  </th>
                  <td></td>
                  <td>
                    <span className="notion">ディ</span> (di)
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="notion">f</span>
                  </th>
                  <td>
                    <span className="notion">ファ</span> (fa)
                  </td>
                  <td>
                    <span className="notion">フィ</span> (fi)
                  </td>
                  <td></td>
                  <td>
                    <span className="notion">フェ</span> (fe)
                  </td>
                  <td>
                    <span className="notion">フォ</span> (fo)
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <p className="note">
          Très souvent, le son <span className="notion">v</span> sera remplacé par le
          son <span className="notion">b</span> car beaucoup plus facile à prononcer pour les japonais.
          <br/>
          Ex. <span className="noun">Love</span> → <span className="noun">lavu</span> → <span className="noun">rabu</span> → <span className="noun">ラブ</span>.
        </p>

        <h2 id="expression-interrogation" className="border-bottom">Expression de l’interrogation</h2>

        <p>
          Pour poser une question, on utilise la <span className="notion">particule de fin de phrase か</span>. Il suffit
          de l’ajouter à la fin d’une phrase simple, collée à <span className="notion">です</span>, pour en faire une
          interrogation.
        </p>

        <p className="note">
          Toutes les particules ne sont pas nécessairement attachées à un sous-groupe de mots d’une phrase. Il existe
          des particules, qu’on appellera ici <span className="notion">particule de fin de phrase</span>, qui peuvent
          être ajoutée après une <em>proposition</em>, et même à la fin de la phrase toute entière.
        </p>

        <div className="table-responsive">
          <table className="table table-sm table-striped table-hover align-middle">
            <thead>
            <tr>
              <th scope="col">Français</th>
              <th scope="col">Romajis</th>
              <th scope="col">Japonais</th>
            </tr>
            </thead>
            <tbody className="table-group-divider">
            <tr>
              <td>
                <span className="person">Clément</span>{' '}
                <span className="verb">est</span>{' '}
                <span className="noun">roux.</span>
              </td>
              <td>
                <span className="person">kuremento-kun</span>{' '}
                <span className="part">wa</span>{' '}
                <span className="noun">akage</span>{' '}
                <span className="verb">desu.</span>
              </td>
              <td className="japanese easy">
                <div>
                  <ruby className="person">クレメント<rt>くれめんと</rt>くん</ruby>
                  <span className="part">は</span>
                  <ruby className="noun">赤毛<rt>あかげ</rt></ruby>
                  <span className="verb">です。</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <span className="person">Clément</span>{' '}
                <span className="verb">est</span><span className="person">-il</span>{' '}
                <span className="noun">blond</span> <span className="part">?</span>
              </td>
              <td>
                <span className="person">kuremento-kun</span>{' '}
                <span className="part">wa</span>{' '}
                <span className="noun">kinpatsu</span>{' '}
                <span className="verb">desu</span>{' '}
                <span className="part">ka.</span>
              </td>
              <td className="japanese easy">
                <div>
                  <ruby className="person">クレメント<rt>くれめんと</rt>くん</ruby>
                  <span className="part">は</span>
                  <ruby className="noun">金髪<rt>きんぱつ</rt></ruby>
                  <span className="verb">です</span>
                  <span className="part">か。</span>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

        <p className="note">
          Traditionnellement, en japonais, il n’y a pas de point d’interrogation pour indiquer l’interrogation. La
          voix monte naturellement sur le <span className="notion">か</span>. Seulement, à l’écrit en langage neutre (lors
          de textos par exemple, quand on se permet d’omettre です), il n’est pas rare d’utiliser le point
          d’interrogation pour désambiguïser la phrase.
        </p>

        <h2 id="démonstratifs" className="border-bottom">Les démonstratifs</h2>

        <p>
          En japonais comme en français, il existe une manière de
          dire <span className="notion">ce</span>, <span className="notion">ceci</span>, <span className="notion">ici</span>, <span className="notion">lequel</span>, <span className="notion">ce genre de</span>,
          etc. Tous ces mots sont construits suivant le même schéma qui tient compte de la distance géographique (ou
          psychologique) entre le locuteur et ce qui est désigné.
        </p>

        <p className="mb-1">
          Ainsi, on va faire la distinction entre :
        </p>

        <ul>
          <li>
            Ce qui est <span className="notion">proche du locuteur</span> : <span className="notion">こ-</span>
          </li>
          <li>
            Ce qui
            est <span className="notion">proche de l’interlocuteur</span> ou <span className="notion">qui vient d’être énoncé dans la phrase précédente</span> : <span className="notion">そ-</span>
          </li>
          <li>
            Ce qui
            est <span className="notion">éloigné du locuteur et de son interlocuteur</span> : <span className="notion">あ-</span>
          </li>
          <li>
            L’interrogatif : <span className="notion">ど-</span>
          </li>
        </ul>

        <h3 id="adjectifs-démonstratifs" className="border-bottom">Adjectifs démonstratifs</h3>

        <p className="mb-1">
          Les adjectifs démonstratifs se construisent en associant <span className="notion">-の</span> au
          premier <span className="notion">かな</span>.
        </p>

        <div className="table-responsive">
          <table className="table table-sm table-striped table-hover align-middle">
            <thead>
            <tr>
              <th scope="col">Français</th>
              <th scope="col">Romajis</th>
              <th scope="col">Japonais</th>
            </tr>
            </thead>
            <tbody className="table-group-divider">
            <tr>
              <td>
                <span className="adj">ce</span>{' '}
                <span className="noun">livre</span><span className="adj">-ci</span>{' '}
                (proche de moi)
              </td>
              <td>
                <span className="adj">kono</span>{' '}
                <span className="noun">hon</span>
              </td>
              <td className="japanese easy">
                <div>
                  <span className="adj">この</span>
                  <ruby className="noun">本<rt>ほん</rt></ruby>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <span className="adj">ce</span>{' '}
                <span className="noun">vélo</span><span className="adj">-là</span>{' '}
                (proche de vous)
              </td>
              <td>
                <span className="adj">sono</span>{' '}
                <span className="noun">jitensha</span>
              </td>
              <td className="japanese easy">
                <div>
                  <span className="adj">その</span>
                  <ruby className="noun">自転車<rt>じてんしゃ</rt></ruby>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <span className="adj">cet</span>{' '}
                <span className="noun">individu</span>{' '}
                <span className="adj">là-bas</span>{' '}
                (peut être péjoratif)
              </td>
              <td>
                <span className="adj">ano</span>{' '}
                <span className="noun">hito</span>
              </td>
              <td className="japanese easy">
                <div>
                  <span className="adj">あの</span>
                  <ruby className="noun">人<rt>ひと</rt></ruby>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <span className="adj">quel</span>{' '}
                <span className="noun">gâteau</span> ?
              </td>
              <td>
                <span className="adj">dono</span>{' '}
                <span className="noun">ke–ki</span>
              </td>
              <td className="japanese easy">
                <div>
                  <span className="adj">どの</span>
                  <span className="noun">ケーキ</span>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-1">
          Il est possible d’exprimer <span className="notion">ce genre de</span> en remplaçant
          simplement <span className="notion">-の</span> par <span className="notion">-んな</span>.
        </p>

        <div className="table-responsive">
          <table className="table table-sm table-striped table-hover align-middle">
            <thead>
            <tr>
              <th scope="col">Français</th>
              <th scope="col">Romajis</th>
              <th scope="col">Japonais</th>
            </tr>
            </thead>
            <tbody className="table-group-divider">
            <tr>
              <td>
                <span className="noun">une couleur</span>{' '}
                <span className="adj">de ce genre</span>{' '}
                (que je suis en train de montrer)
              </td>
              <td>
                <span className="adj">konna</span>{' '}
                <span className="noun">iro</span>
              </td>
              <td className="japanese easy">
                <div>
                  <span className="adj">こんな</span>
                  <ruby className="noun">色<rt>いろ</rt></ruby>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <span className="noun">une histoire</span>{' '}
                <span className="adj">comme celle-là</span>{' '}
                (que vous venez de citer / raconter)
              </td>
              <td>
                <span className="adj">sonna</span>{' '}
                <span className="noun">hanashi</span>
              </td>
              <td className="japanese easy">
                <div>
                  <span className="adj">そんな</span>
                  <ruby className="noun">話<rt>はなし</rt></ruby>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                (dans){' '}
                <span className="noun">un cas</span>{' '}
                <span className="adj">comme celui-là</span>
              </td>
              <td>
                <span className="adj">anna</span>{' '}
                <span className="noun">baai</span>
              </td>
              <td className="japanese easy">
                <div>
                  <span className="adj">あんな</span>
                  <ruby className="noun">場合<rt>ばあい</rt></ruby>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <span className="adj">quel genre d'</span><span className="noun">endroit</span> ?
              </td>
              <td>
                <span className="adj">donna</span>{' '}
                <span className="noun">tokoro</span>
              </td>
              <td className="japanese easy">
                <div>
                  <span className="adj">どんな</span>
                  <ruby className="noun">所<rt>ところ</rt></ruby>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

        <h3 id="pronoms-démonstratifs" className="border-bottom">Pronoms démonstratifs</h3>

        <p className="mb-1">
          Les pronoms démonstratifs se construisent en associant <span className="notion">-れ</span> au
          premier <span className="notion">かな</span>.
        </p>

        <div className="table-responsive">
          <table className="table table-sm table-striped table-hover align-middle">
            <thead>
            <tr>
              <th scope="col">Français</th>
              <th scope="col">Romajis</th>
              <th scope="col">Japonais</th>
            </tr>
            </thead>
            <tbody className="table-group-divider">
            <tr>
              <td>
                <span className="pronoun">ceci</span>{' '}
                (proche de moi){' '}
                <span className="verb">est</span>{' '}
                <span className="noun">un journal intime.</span>
              </td>
              <td>
                <span className="pronoun">kore</span>{' '}
                <span className="part">wa</span>{' '}
                <span className="noun">nikki</span>{' '}
                <span className="verb">desu.</span>
              </td>
              <td className="japanese easy">
                <div>
                  <span className="pronoun">これ</span>
                  <span className="part">は</span>
                  <ruby className="noun">日記<rt>にっき</rt></ruby>
                  <span className="verb">です。</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <span className="part">Est-ce que</span>{' '}
                <span className="pronoun">cela</span>{' '}
                (proche de vous){' '}
                <span className="verb">est</span>{' '}
                <span className="noun">une cuillère</span> <span className="part">?</span>
              </td>
              <td>
                <span className="pronoun">sore</span>{' '}
                <span className="part">wa</span>{' '}
                <span className="noun">supu–n</span>{' '}
                <span className="verb">desu</span>{' '}
                <span className="part">ka.</span>
              </td>
              <td className="japanese easy">
                <div>
                  <span className="pronoun">それ</span>
                  <span className="part">は</span>
                  <span className="noun">スプーン</span>
                  <span className="verb">です</span>
                  <span className="part">か。</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <span className="pronoun">Qu’</span><span className="verb">est</span>-ce que{' '}
                <span className="noun">cela là-bas</span> <span className="part">?</span>{' '}
                (peut être péjoratif)
              </td>
              <td>
                <span className="pronoun">are</span>{' '}
                <span className="part">wa</span>{' '}
                <span className="noun">nan</span>{' '}
                <span className="verb">desu</span>{' '}
                <span className="part">ka.</span>
              </td>
              <td className="japanese easy">
                <div>
                  <span className="pronoun">あれ</span>
                  <span className="part">は</span>
                  <ruby className="noun">何<rt>なん</rt></ruby>
                  <span className="verb">です</span>
                  <span className="part">か。</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <span className="pronoun">Lequel</span>{' '}
                <span className="verb">est</span>-ce <span className="part">?</span>
              </td>
              <td>
                <span className="pronoun">dore</span>{' '}
                <span className="verb">desu</span>{' '}
                <span className="part">ka.</span>
              </td>
              <td className="japanese easy">
                <div>
                  <span className="pronoun">どれ</span>
                  <span className="verb">です</span>
                  <span className="part">か。</span>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

        <h3 id="pronoms-de-lieu" className="border-bottom">Pronoms de lieu</h3>

        <p className="mb-1">
          Il est possible d’utiliser la même
          série <span className="notion">こ-</span>, <span className="notion">そ-</span>, <span className="notion">あ-</span> et <span className="notion">ど-</span> pour
          fabriquer des pronoms de lieu qui vont indiquer une position géographique par rapport au locuteur. Cela se construit avec le
          suffixe <span className="notion">-こ</span>.
        </p>

        <p className="note">
          Attention ! Cette série contient une petite exception avec le pronom basé
          sur <span className="notion">あ-</span>.
        </p>

        <div className="table-responsive">
          <table className="table table-sm table-striped table-hover align-middle">
            <thead>
            <tr>
              <th scope="col">Français</th>
              <th scope="col">Romajis</th>
              <th scope="col">Japonais</th>
            </tr>
            </thead>
            <tbody className="table-group-divider">
            <tr>
              <td>
                <span className="pronoun">Ici</span>{' '}
                (proche de moi){' '}
                <span className="verb">c’est</span>{' '}
                <span className="noun">chez moi.</span>
              </td>
              <td>
                <span className="pronoun">koko</span>{' '}
                <span className="part">wa</span>{' '}
                <span className="noun">watashi</span>{' '}
                <span className="part">no</span>{' '}
                <span className="noun">ie</span>{' '}
                <span className="verb">desu.</span>
              </td>
              <td className="japanese easy">
                <div>
                  <span className="pronoun">ここ</span>
                  <span className="part">は</span>
                  <ruby className="noun">私<rt>わたし</rt></ruby>
                  <span className="part">の</span>
                  <ruby className="noun">家<rt>いえ</rt></ruby>
                  <span className="verb">です。</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <span className="verb">C’est</span>{' '}
                <span className="noun">interdit</span>{' '}
                (de passer par){' '}
                <span className="pronoun">là</span>{' '}
                (proche de vous) <span className="verb">!</span>
              </td>
              <td>
                <span className="pronoun">soko</span>{' '}
                <span className="part">wa</span>{' '}
                <span className="noun">dame</span>{' '}
                <span className="verb">da.</span>
              </td>
              <td className="japanese easy">
                <div>
                  <span className="pronoun">そこ</span>
                  <span className="part">は</span>
                  <span className="noun">ダメ</span>
                  <span className="verb">だ。</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <span className="noun">Les fruits</span>{' '}
                <span className="verb">sont</span>{' '}
                <span className="pronoun">là-bas</span>{' '}
                (loin de nous deux).
              </td>
              <td>
                <span className="noun">kudamono</span>{' '}
                <span className="part">wa</span>{' '}
                <span className="pronoun">a<u>so</u>ko</span>{' '}
                <span className="verb">desu.</span>
              </td>
              <td className="japanese easy">
                <div>
                  <ruby className="noun">果物<rt>くだもの</rt></ruby>
                  <span className="part">は</span>
                  <span className="pronoun">あ<u>そ</u>こ</span>
                  <span className="verb">です。</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <span className="pronoun">Où</span>{' '}
                <span className="verb">sont</span>{' '}
                <span className="noun">les caméras</span> <span className="part">?</span>
              </td>
              <td>
                <span className="noun">kamera</span>{' '}
                <span className="part">wa</span>{' '}
                <span className="pronoun">doko</span>{' '}
                <span className="verb">desu</span>{' '}
                <span className="part">ka.</span>
              </td>
              <td className="japanese easy">
                <div>
                  <span className="noun">カメラ</span>
                  <span className="part">は</span>
                  <span className="pronoun">どこ</span>
                  <span className="verb">です</span>
                  <span className="part">か。</span>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-1">
          Il est également possible de parler d’une direction ou une proximité plutôt que d’un endroit précis. Cela
          se fait en utilisant le suffixe <span className="notion">-ちら</span>.
        </p>

        <div className="table-responsive">
          <table className="table table-sm table-striped table-hover align-middle">
            <thead>
            <tr>
              <th scope="col">Français</th>
              <th scope="col">Romajis</th>
              <th scope="col">Japonais</th>
            </tr>
            </thead>
            <tbody className="table-group-divider">
            <tr>
              <td>
                <span className="verb">(C’est)</span>{' '}
                <span className="pronoun">par ici / de ce côté-ci !</span>{' '}
                (s.-e. Suis-moi !)
              </td>
              <td>
                <span className="pronoun">kochira</span>{' '}
                <span className="verb">desu.</span>
              </td>
              <td className="japanese easy">
                <div>
                  <span className="pronoun">こちら</span>
                  <span className="verb">です。</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <span className="noun">La Poste</span>{' '}
                <span className="verb">est</span>{' '}
                <span className="pronoun">par là / de votre côté.</span>
              </td>
              <td>
                <span className="noun">yuubinkyoku</span>{' '}
                <span className="part">wa</span>{' '}
                <span className="pronoun">sochira</span>{' '}
                <span className="verb">desu.</span>
              </td>
              <td className="japanese easy">
                <div>
                  <ruby className="noun">郵便局<rt>ゆうびんきょく</rt></ruby>
                  <span className="part">は</span>
                  <span className="pronoun">そちら</span>
                  <span className="verb">です。</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <span className="place">La Corée</span>{' '}
                <span className="verb">c’est</span>{' '}
                <span className="pronoun">par là-bas / dans cette direction.</span>
              </td>
              <td>
                <span className="place">kankoku</span>{' '}
                <span className="part">wa</span>{' '}
                <span className="pronoun">achira</span>{' '}
                <span className="verb">desu.</span>
              </td>
              <td className="japanese easy">
                <div>
                  <ruby className="place">韓国<rt>かんこく</rt></ruby>
                  <span className="part">は</span>
                  <span className="pronoun">あちら</span>
                  <span className="verb">です。</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <span className="pronoun">Par où</span>{' '}
                <span className="verb">est</span>{' '}
                <span className="noun">la gare ?</span>
              </td>
              <td>
                <span className="noun">eki</span>{' '}
                <span className="part">wa</span>{' '}
                <span className="pronoun">dochira</span>{' '}
                <span className="verb">desu</span>{' '}
                <span className="part">ka.</span>
              </td>
              <td className="japanese easy">
                <div>
                  <ruby className="noun">駅<rt>えき</rt></ruby>
                  <span className="part">は</span>
                  <span className="pronoun">どちら</span>
                  <span className="verb">です</span>
                  <span className="part">か。</span>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

        <p className="note">
          Il est possible d’utiliser <span className="notion">どちら</span> pour proposer un choix entre plusieurs éléments.
          De manière plus générale, ces pronoms peuvent être utilisés à la place des pronoms démonstratifs classiques
          pour élever légèrement le niveau de politesse, tout comme on dirait en français “Voici mon frère” plutôt que
          “C'est mon frère”.
        </p>

        <div className="table-responsive">
          <table className="table table-sm table-striped table-hover align-middle">
            <thead>
            <tr>
              <th scope="col">Français</th>
              <th scope="col">Romajis</th>
              <th scope="col">Japonais</th>
            </tr>
            </thead>
            <tbody className="table-group-divider">
            <tr>
              <td>
                <span className="part">Et</span>{' '}
                <span className="pronoun">vous</span>{' '}
                <span className="part">?</span>{' '}
                <span className="adv">Qu’</span><span className="verb">en pensez-vous</span> <span className="part">?</span>
              </td>
              <td>
                <span className="pronoun">sochira</span>{' '}
                <span className="part">wa?</span>{' '}
                <span className="adv">dou</span>{' '}
                <span className="verb">desu</span>{' '}
                <span className="part">ka.</span>
              </td>
              <td className="japanese easy">
                <div>
                  <span className="pronoun">そちら</span>
                  <span className="part">は？</span>
                  <span className="adv">どう</span>
                  <span className="verb">です</span>
                  <span className="part">か。</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <span className="pronoun">Laquelle</span>{' '}
                <span className="verb">est</span>{' '}
                <span className="part">votre</span>{' '}
                <span className="noun">voiture,</span>{' '}
                <span className="person">ito-san</span> <span className="part">?</span>
              </td>
              <td>
                <span className="person">ito-san</span>{' '}
                <span className="part">no</span>{' '}
                <span className="noun">kuruma</span>{' '}
                <span className="part">wa</span>{' '}
                <span className="pronoun">dochira</span>{' '}
                <span className="verb">desu</span>{' '}
                <span className="part">ka.</span>
              </td>
              <td className="japanese easy">
                <div>
                  <span className="person">いとさん</span>
                  <span className="part">の</span>
                  <ruby className="noun">車<rt>くるま</rt></ruby>
                  <span className="part">は</span>
                  <span className="pronoun">どちら</span>
                  <span className="verb">です</span>
                  <span className="part">か。</span>
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
