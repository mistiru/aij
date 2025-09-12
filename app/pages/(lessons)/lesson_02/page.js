import ExternalLink from '@/app/pages/_components/ExternalLink';
import Intro from '@/app/pages/_components/Intro';
import TocAndLinks from '@/app/pages/_components/TocAndLinks';

export const metadata = {
  title: "Cours n°2",
};

export default function Lesson02() {
  return (
    <div className="container-xl py-2 aij-layout">
      <Intro>
        <h1 className="mb-3">Cours n˚2 − 第二課</h1>
      </Intro>

      <TocAndLinks furiganas>
        <ExternalLink href="vocab_02">
          Vocabulaire
        </ExternalLink>
        <br/>
        <ExternalLink href="exercises_02">
          Exercices
        </ExternalLink>
      </TocAndLinks>

      <div className="aij-content">
        <h2 id="texte-cible" className="border-bottom">Texte cible</h2>

        <div className="target-text japanese easy">
          <h5 className="mb-3">
            <ruby>自己紹介<rt>じこしょうかい</rt></ruby>
          </h5>
          <p>
            <span>はじめまして！</span>
          </p>
          <p className="mb-0">
            <ruby>私<rt>わたし</rt></ruby>
            <span>は</span>
            <ruby className="person">ワニ<rt>わに</rt>先生<rt>せんせい</rt></ruby>
            <span>です。</span>
          </p>
          <p className="mb-0">
            <ruby>28<rt>にじゅうはっ</rt>歳<rt>さい</rt></ruby>
            <span>です。</span>
          </p>
          <p className="mb-0">
            <ruby>フランス<rt>ふらんす</rt>人<rt>じん</rt></ruby>
            <span>です。</span>
          </p>
          <p>
            <ruby className="orga">エンセット<rt>えんせっと</rt></ruby>
            <span>の</span>
            <ruby>元<rt>もと</rt>学生<rt>がくせい</rt></ruby>
            <span>です。</span>
          </p>
          <p>
            <ruby>趣味<rt>しゅみ</rt></ruby>
            <span>は</span>
            <ruby>日本語<rt>にほんご</rt></ruby>
            <span>の</span>
            <ruby>勉強<rt>べんきょう</rt></ruby>
            <span>です。</span>

            <ruby>スポーツ<rt>すぽーつ</rt></ruby>
            <span>も</span>
            <ruby>好き<rt>すき</rt></ruby>
            <span>です。</span>
          </p>
          <p>
            <ruby>私<rt>わたし</rt></ruby>
            <span>の</span>
            <ruby>親友<rt>しんゆう</rt></ruby>
            <span>の</span>
            <ruby>名前<rt>なまえ</rt></ruby>
            <span>は</span>
            <ruby>ルイ<rt>るい</rt></ruby>
            <span>です。</span>

            <ruby>ルイ<rt>るい</rt>さん</ruby>
            <span>も</span>
            <ruby className="orga">エンセット<rt>えんせっと</rt></ruby>
            <span>の</span>
            <ruby>元<rt>もと</rt>学生<rt>がくせい</rt></ruby>
            <span>です。</span>
          </p>
          <p>
            <span>どうぞ</span>
            <span>よろしく</span>
            <span>おねがいします。</span>
          </p>
        </div>

        <h2 id="phrase-simple" className="border-bottom">La phrase simple</h2>

        <p>
          Ce que j’appelle phrase simple est une phrase <span className="notion">déclarative</span> dans le sens où
          elle sert à donner une information sur quelque chose, ou bien dont la réponse, dans le cas d’une
          interrogation, sera une phrase simple.
          <br/>
          Ce sont des phrases que l’on peut reformuler approximativement en utilisant la
          locution <span className="verb">c’est</span>.
        </p>

        <div className="table-responsive">
          <table className="table table-sm table-striped table-hover align-middle">
            <thead>
            <tr>
              <th scope="col">Phrase simple</th>
              <th scope="col">Reformulation avec <span className="verb">c’est</span></th>
            </tr>
            </thead>
            <tbody className="table-group-divider">
            <tr>
              <td>C’est un chat.</td>
              <td><span className="verb">C’est</span> un chat.</td>
            </tr>
            <tr>
              <td>Je suis Le Croco Sensei.</td>
              <td>Moi, <span className="verb">c’est</span> Le Croco Sensei.</td>
            </tr>
            <tr>
              <td>Je ne suis plus malade.</td>
              <td>En parlant de moi, <span className="verb">ce n’est</span> plus malade.</td>
            </tr>
            <tr>
              <td>Quel âge as-tu ?</td>
              <td><span className="verb">C’est</span> quoi ton âge.</td>
            </tr>
            <tr>
              <td>Ce n’est pas vrai…</td>
              <td><span className="verb">Ce n’est</span> pas vrai.</td>
            </tr>
            <tr>
              <td>Je t’aime !</td>
              <td>En parlant de moi, <span className="verb">c’est</span> toi qui est aimé.</td>
            </tr>
            </tbody>
          </table>
        </div>

        <p>
          Comme on peut le voir avec la dernière phrase, le japonais est fondamentalement différent du français,
          et cela, jusqu’à a manière même de penser. Toutes les phrases déclaratives en français ne se traduiront
          pas par des phrases simples en japonais. C’est par exemple le cas des phrases du
          type <span className="verb">Il y a </span>…
        </p>

        <p>
          Contrairement au français où c’est la place des mots qui détermine leur sens, le japonais utilise
          des <span className="part">particules</span> pour définir le sens des mots qui la précède.
          Le <span className="verb">verbe</span>, quant à lui, est placé à la fin de la proposition.
          <br/>
          Toutes les phrases japonaises fonctionnent sur ce principe. C’est un peu comme les Lego™, avec
          les <span className="part">particules</span>, on peut construire toutes les phrases possibles.
        </p>

        <p>
          En ce qui concerne la phrase simple, on va utiliser deux choses :
        </p>

        <ul>
          <li>
            Une particule qui indique de quoi on parle : <span className="part">は</span>
            <br/>
            On appelle généralement cette particule la particule de <span className="notion">thème</span>.
            <br/>
            Quand <span className="part">は</span> est utilisé en tant que particule, alors elle se prononce
            toujours <span className="notion">wa</span>.
          </li>
          <li>
            Une forme verbale qui va servir à donner une information au sujet de ce dont on parle.
          </li>
        </ul>

        <p>
          La phrase simple aura alors cette allure :
        </p>

        <p className="text-center fs-5 fw-bold">
          「ce dont on parle」<span className="part">は</span>「l’information en question」<span className="verb">です</span> 。
        </p>

        <p className="note">
          Très souvent, on peut omettre le <span className="part">thème</span> de la phrase quand celui-ci est trivial
          ou qu’il a déjà été énoncé en amont. Cela évite d’une part la répétition et évite de paraitre pompeux
          quand on parle de soi.
          <br/>
          La structure de la phrase devient alors simplement :
          「l’information en question」<span className="verb">です</span> 。
        </p>

        <div className="table-responsive">
          <table className="table table-sm table-striped table-hover align-middle">
            <thead>
            <tr>
              <th>Phrase simple</th>
              <th>Reformulation avec <span className="verb">c’est</span></th>
              <th>Romajis</th>
              <th>Japonais</th>
            </tr>
            </thead>
            <tbody className="table-group-divider">
            <tr>
              <td>C’est un chat.</td>
              <td>
                <span className="verb">C’est</span>{' '}
                <span className="noun">un chat.</span>
              </td>
              <td>
                <span className="noun">neko</span>{' '}
                <span className="verb">desu.</span>
              </td>
              <td className="japanese easy">
                <div>
                  <ruby className="noun">猫<rt>ねこ</rt></ruby>
                  <span className="verb">です。</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>Je suis étudiant.</td>
              <td>
                <span className="verb">C’est</span>{' '}
                <span className="noun">un étudiant.</span>
              </td>
              <td>
                <span className="noun">gakusei</span>{' '}
                <span className="verb">desu.</span>
              </td>
              <td className="japanese easy">
                <div>
                  <ruby className="noun">学生<rt>がくせい</rt></ruby>
                  <span className="verb">です。</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>Le mont Fuji est haut.</td>
              <td>
                <span className="part">En parlant du</span>{' '}
                <span className="person">mont Fuji,</span>{' '}
                <span className="verb">c’est</span>{' '}
                <span className="adj">haut.</span>
              </td>
              <td>
                <span className="person">fuji-san</span>{' '}
                <span className="part">wa</span>{' '}
                <span className="adj">takai</span>{' '}
                <span className="verb">desu.</span>
              </td>
              <td className="japanese easy">
                <div>
                  <ruby className="person">富士山<rt>ふじさん</rt></ruby>
                  <span className="part">は</span>
                  <ruby className="adj">高<rt>たか</rt>い</ruby>
                  <span className="verb">です。</span>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

        <h2 id="conjugaison-desu" className="border-bottom">Conjugaison de です</h2>

        <h3 id="négation-passé">Négation & passé</h3>

        <p>
          Tout comme en français, les phrases japonaises peuvent se conjuguer au négatif et au passé. En revanche,
          comme c’est le cas également dans beaucoup d’autres langues, il n’y a pas de forme exprimant le futur.
        </p>

        <p>
          À la différence du français, il n’y a qu’une seule et unique manière d’exprimer le passé ou la négation. Un
          fait est soit présent, soit passé, soit non existant dans le présent, soit non existant dans le passé.
          De plus, l’expression du passé et de la négation se font systématiquement sur le verbe, et
          donc <span className="notion">です</span> dans le cas de nos phrases simples.
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
                <span className="verb">C’est</span>{' '}
                <span className="noun">un lapin.</span>
              </td>
              <td>
                <span className="noun">usagi</span>{' '}
                <span className="verb">desu.</span>
              </td>
              <td className="japanese easy">
                <div>
                  <ruby className="noun">兎<rt>うさぎ</rt></ruby>
                  <span className="verb">です。</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <span className="verb">Ce n’est pas</span>{' '}
                <span className="noun">une souris.</span>
              </td>
              <td>
                <span className="noun">nezumi</span>{' '}
                <span className="verb">ja arimasen.</span>
              </td>
              <td className="japanese easy">
                <div>
                  <ruby className="noun">鼠<rt>ねずみ</rt></ruby>
                  <span className="verb">じゃ</span>
                  <span className="verb">ありません。</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <span className="verb">C’était</span>{' '}
                <span className="noun">une tortue.</span>
              </td>
              <td>
                <span className="noun">kame</span>{' '}
                <span className="verb">deshita.</span>
              </td>
              <td className="japanese easy">
                <div>
                  <ruby className="noun">亀<rt>かめ</rt></ruby>
                  <span className="verb">でした。</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <span className="verb">Ce n’était pas</span>{' '}
                <span className="noun">un ours.</span>
              </td>
              <td>
                <span className="noun">kuma</span>{' '}
                <span className="verb">ja arimasen deshita.</span>
              </td>
              <td className="japanese easy">
                <div>
                  <ruby className="noun">熊<rt>くま</rt></ruby>
                  <span className="verb">じゃ</span>
                  <span className="verb">ありません</span>
                  <span className="verb">でした。</span>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

        <h3 id="forme-neutre-polie">Forme neutre / polie</h3>

        <p>
          En japonais, il y a plusieurs manières de parler. Un peu comme notre langage familier, courant et soutenu,
          on parlera alors en japonais
          de <span className="notion">forme neutre</span>, <span className="notion">forme polie</span> ou <span className="notion">forme honorifique</span>.
          <br/>
          <span className="notion">です</span> (et ses déclinaisons vues ci-dessus) correspondent à la manière de
          parler <span className="notion">polie</span>.
        </p>

        <p>
          Il est possible d’utiliser la <span className="notion">forme neutre</span> de <span className="notion">です</span>,
          mais le discours est alors familier. Donc, comme la politesse est très importante dans les relations
          interpersonnelles, surtout quand un plus jeune s’adresse à un plus âgé, ou bien un moins gradé à un plus
          gradé, il faudra être prudent dans l’utilisation de ces <span className="notion">formes neutres</span>.
          <br/>
          <strong>Personne ne critiquera l’utilisation de formes polies, alors que <u>l’utilisation mal appropriée des
            formes neutres peut choquer.</u></strong>
        </p>

        <p className="note">
          Les différentes formes s’appliquent à tous les verbes, et non pas seulement
          à <span className="notion">です</span>. À l’instar de <span className="notion">です</span>, l’utilisation de
          la <span className="notion">forme neutre</span> est quelques fois "obligatoire" avec les autres verbes.
        </p>

        <div className="table-responsive">
          <table className="table table-sm table-striped table-hover align-middle">
            <thead>
            <tr>
              <th className="auto-cell" scope="col">Forme polie</th>
              <th className="auto-cell" scope="col">Romajis</th>
              <th className="auto-cell" scope="col">Forme neutre</th>
              <th className="auto-cell" scope="col">Romajis</th>
            </tr>
            </thead>
            <tbody className="table-group-divider">
            <tr>
              <td>です</td>
              <td>desu</td>
              <td>だ</td>
              <td>da</td>
            </tr>
            <tr>
              <td>じゃありません</td>
              <td>ja arimasen</td>
              <td>じゃない</td>
              <td>ja nai</td>
            </tr>
            <tr>
              <td>でした</td>
              <td>deshita</td>
              <td>だった</td>
              <td>datta</td>
            </tr>
            <tr>
              <td>じゃありませんでした</td>
              <td>ja arimasen deshita</td>
              <td>じゃなかった</td>
              <td>ja nakatta</td>
            </tr>
            </tbody>
          </table>
        </div>

        <p className="note">
          Hormis le côté familier, l’utilisation de <span className="notion">だ</span> implique une certaine force
          d’affirmation, d’assertion. Il est alors impossible de poser
          une <ExternalLink href="lesson_03#expression-interrogation">question</ExternalLink> en
          utilisant <span className="notion">だ</span>.
        </p>

        <h2 id="expression-appartenance" className="border-bottom">Expression de l’appartenance</h2>

        <p>
          Pour exprimer l’appartenance d’une chose envers une autre, on utilise la
          particule <span className="part">の</span>.
          Cette particule s’utilise entre deux noms et respecte le schéma suivant :
        </p>

        <p className="text-center fs-5 fw-bold">
          「possesseur」<span className="part">の</span>「possédé」
        </p>

        <div className="table-responsive">
          <table className="table table-sm table-striped table-hover align-middle">
            <thead>
            <tr>
              <th scope="col">Français</th>
              <th scope="col">Reformulation plus littérale</th>
              <th scope="col">Romajis</th>
              <th scope="col">Japonais</th>
            </tr>
            </thead>
            <tbody className="table-group-divider">
            <tr>
              <td>C’est mon chat.</td>
              <td>
                <span className="verb">C’est</span>{' '}
                <span className="noun">le chat</span>{' '}
                <span className="part">de</span>{' '}
                <span className="noun">moi.</span>
              </td>
              <td>
                <span className="noun">watashi</span>{' '}
                <span className="part">no</span>{' '}
                <span className="noun">neko</span>{' '}
                <span className="verb">desu.</span>
              </td>
              <td className="japanese easy">
                <div>
                  <ruby className="noun">私<rt>わたし</rt></ruby>
                  <span className="part">の</span>
                  <ruby className="noun">猫<rt>ねこ</rt></ruby>
                  <span className="verb">です。</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>C’est du pain de France.</td>
              <td>
                <span className="verb">C’est</span>{' '}
                <span className="noun">du pain</span>{' '}
                <span className="part">de</span>{' '}
                <span className="place">France.</span>
              </td>
              <td>
                <span className="place">furansu</span>{' '}
                <span className="part">no</span>{' '}
                <span className="noun">pan</span>{' '}
                <span className="verb">desu</span>.
              </td>
              <td className="japanese easy">
                <div>
                  <ruby className="place">フランス<rt>ふらんす</rt></ruby>
                  <span className="part">の</span>
                  <ruby className="noun">パン<rt>ぱん</rt></ruby>
                  <span className="verb">です。</span>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

        <p className="note">
          Quelques fois, la particule <span className="part">の</span> peut exprimer autre chose que l’appartenance
          même placée entre deux <span className="noun">noms</span>. C’est par exemple le cas pour le groupe
          nominal : <span className="noun">l’étude</span> <span className="part">du</span> <span className="noun">japonais</span>.
          <br/>
          On ne peut pas vraiment dire que l’étude appartient au japonais. Dans ce cas, on parle
          de <ExternalLink href="lesson_07#no-adjectifs">fonction qualificative</ExternalLink> de la
          particule <span className="part">の</span>. La structure japonaise est la même, mais le sens est différent en
          français.
        </p>

        <div className="table-responsive">
          <table className="table table-sm table-striped table-hover align-middle">
            <thead>
            <tr>
              <th scope="col">Groupe nominal</th>
              <th scope="col">Romajis</th>
              <th scope="col">Japonais</th>
              <th scope="col">Sens</th>
            </tr>
            </thead>
            <tbody className="table-group-divider">
            <tr>
              <td>étude du japonais</td>
              <td>
                <span className="noun">nihongo</span>{' '}
                <span className="part">no</span>{' '}
                <span className="noun">benkyou</span>
              </td>
              <td className="japanese easy">
                <div>
                  <ruby className="noun">日本語<rt>にほんご</rt></ruby>
                  <span className="part">の</span>
                  <ruby className="noun">勉強<rt>べんきょう</rt></ruby>
                </div>
              </td>
              <td>
                <span className="noun">étude</span> <span className="part">qualifiée par / portant sur</span>{' '}
                <span className="noun">le japonais</span>
              </td>
            </tr>
            <tr>
              <td>professeur John</td>
              <td>
                <span className="noun">sensei</span>{' '}
                <span className="part">no</span>{' '}
                <span className="person">jon</span>
              </td>
              <td className="japanese easy">
                <div>
                  <ruby className="noun">先生<rt>せんせい</rt></ruby>
                  <span className="part">の</span>
                  <ruby className="person">ジョン<rt>じょん</rt></ruby>
                </div>
              </td>
              <td>
                <span className="person">John</span>{' '}
                <span className="part">qualifié de</span>{' '}
                <span className="noun">professeur</span>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

        <h2 id="expression-similarité-thème" className="border-bottom">Expression de la similarité de thème</h2>

        <p>
          Pour exprimer qu’une chose est également comme une autre énoncée précédemment, on utilise la
          particule <span className="notion">も</span>. Tout comme la particule <span className="notion">は</span>, elle
          indique ce dont on parle, le thème de la discussion, mais crée un lien de similarité avec le thème précédent.
        </p>

        <div className="table-responsive">
          <table className="table table-sm table-striped table-hover align-middle">
            <thead>
            <tr>
              <th scope="col">Français</th>
              <th scope="col">Reformulation plus littérale</th>
              <th scope="col">Romajis</th>
              <th scope="col">Japonais</th>
            </tr>
            </thead>
            <tbody className="table-group-divider">
            <tr>
              <td>Mon chien est blanc.</td>
              <td>
                <span className="part">En parlant</span>{' '}
                <span className="noun">du chien</span>{' '}
                <span className="part">de</span>{' '}
                <span className="noun">moi,</span>{' '}
                <span className="verb">c'est</span>{' '}
                <span className="adj">blanc.</span>
              </td>
              <td>
                <span className="noun">watashi</span>{' '}
                <span className="part">no</span>{' '}
                <span className="noun">inu</span>{' '}
                <span className="part">wa</span>{' '}
                <span className="adj">shiroi</span>{' '}
                <span className="verb">desu.</span>
              </td>
              <td className="japanese easy">
                <div>
                  <ruby className="noun">私<rt>わたし</rt></ruby>
                  <span className="part">の</span>
                  <ruby className="noun">犬<rt>いぬ</rt></ruby>
                  <span className="part">は</span>
                  <ruby className="adj">白<rt>しろ</rt>い</ruby>
                  <span className="verb">です。</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>Le mien aussi.</td>
              <td>
                <span className="noun">(Le chien)</span>{' '}
                <span className="part">de</span>{' '}
                <span className="noun">moi</span>{' '}
                <span className="part">également,</span>{' '}
                <span className="verb">(c'est</span>{' '}
                <span className="adj">blanc).</span>
              </td>
              <td>
                <span className="noun">watashi</span>{' '}
                <span className="part">no</span>{' '}
                <span className="noun">(inu)</span>{' '}
                <span className="part">mo</span>{' '}
                <span className="adj">(shiroi</span>{' '}
                <span className="verb">desu).</span>
              </td>
              <td className="japanese easy">
                <div>
                  <ruby className="noun">私<rt>わたし</rt></ruby>
                  <span className="part">の</span>
                  <ruby className="noun">(<rt></rt>犬<rt>いぬ</rt>)</ruby>
                  <span className="part">も</span>
                  <ruby className="adj">(<rt></rt>白<rt>しろ</rt>い</ruby>
                  <span className="verb">です)。</span>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

        <h2 id="jikoshoukai" className="border-bottom">Se présenter en japonais</h2>

        <p>
          La présentation au Japon est quelque chose d’important et de très conventionnel. Peu importe où vous vous
          rendez, on vous demandera toujours de vous présenter (un minimum, le nom et la fonction sociale au
          moins).
          <br/>
          Les Japonais ne s’appellent pas
          par <span className="noun">tu</span> ou <span className="noun">il</span> lorsqu’ils communiquent, mais ils
          préfèrent utiliser <span className="person">le nom de la personne</span>. Par conséquent, ils veulent au moins
          connaître le nom de leur interlocuteur.
        </p>

        <p>
          La présentation se dit <span className="noun">自己紹介【じこしょうかい】</span>.
          Une présentation typique en japonais, c’est au minimum :
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
              <td>* Enchanté !</td>
              <td>hajimemashite!</td>
              <td className="japanese easy">
                <div>
                  <span>はじめまして！</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <span className="noun">Je</span>{' '}
                <span className="verb">suis</span>{' '}
                <span className="person">Le Croco Sensei.</span>
              </td>
              <td>
                <span className="noun">watashi</span>{' '}
                <span className="part">wa</span>{' '}
                <span className="person">wanisensei</span>{' '}
                <span className="verb">desu.</span>
              </td>
              <td className="japanese easy">
                <div>
                  <ruby className="noun">私<rt>わたし</rt></ruby>
                  <span className="part">は</span>
                  <ruby className="person">ワニ<rt>わに</rt>先生<rt>せんせい</rt></ruby>
                  <span className="verb">です。</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <span>J’</span>
                <span className="verb">ai</span>{' '}
                <span className="noun">29 ans.</span>
              </td>
              <td>
                <span className="noun">nijuuhassai</span>{' '}
                <span className="verb">desu.</span>
              </td>
              <td className="japanese easy">
                <div>
                  <ruby className="noun">28<rt>にじゅうはっ</rt>歳<rt>さい</rt></ruby>
                  <span className="verb">です。</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <span>Je</span>{' '}
                <span className="verb">suis</span>{' '}
                <span className="noun">ancien étudiant</span>{' '}
                <span className="part">de</span>{' '}
                <span className="noun">l’n7.</span>
              </td>
              <td>
                <span className="orga">ensetto</span>{' '}
                <span className="part">no</span>{' '}
                <span className="noun">motogakusei</span>{' '}
                <span className="verb">desu.</span>
              </td>
              <td className="japanese easy">
                <div>
                  <ruby className="orga">エンセット<rt>えんせっと</rt></ruby>
                  <span className="part">の</span>
                  <ruby className="noun">元<rt>もと</rt>学生<rt>がくせい</rt></ruby>
                  <span className="verb">です。</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>* Ravi de vous rencontrer.</td>
              <td>douzo yoroshiku onegaishimasu.</td>
              <td className="japanese easy">
                <div>
                  <span>どうぞ</span>
                  <span>よろしく</span>
                  <span>おねがいします。</span>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

        <p className="note">
          Les phrases précédées d’un astérisque sont des formules de politesse et ne se traduisent pas du tout par
          ça littéralement.
        </p>

        <p className="note">
          On remarque encore une fois que la particule <span className="part">は</span> (et donc le thème) n’apparaît
          qu’une seule fois dans tout le paragraphe. En effet, une fois que le thème est précisé, inutile de le
          repréciser, ça ferait vraiment prétentieux.
        </p>

        <h2 id="suffixes-honorifiques" className="border-bottom">Suffixes honorifiques</h2>

        <p>
          Comme dit précédemment, les Japonais s’appellent entre eux par leur nom. C’est un peu comme quand nous nous
          adressons entre nous par notre nom de famille, du genre <span className="notion">M. Wani</span>, ou bien
          encore <span className="notion">Maître Wani</span> dans le cas d’un avocat ou professeur par exemple.
          <br/>
          Les titres que nous utilisons en français se traduisent alors par
          des <span className="notion">suffixes honorifiques</span> en japonais. La manière correcte de s’adresser à une
          personne, ou bien de parler d’une personne, est de citer son nom de famille puis d’y attacher
          un <span className="notion">suffixe honorifique</span>.
        </p>

        <p className="note">
          Ne pas utiliser de <span className="notion">suffixe honorifique</span> en japonais est réservé aux personnes
          très proches, voir intimes.
          Là où en français, on pourrait se passer de titre et se tutoyer entre partenaires au sein d’une entreprise
          par exemple, ou bien plus naturellement, quand un professeur s’adresse à des élèves, en japonais, ce serait
          synonyme d’un très grand manque de respect.
        </p>

        <p>
          Il existe tout un tas de <span className="notion">suffixes honorifiques</span> dont voici les plus courants :
        </p>

        <div className="table-responsive">
          <table className="table table-sm table-striped table-hover align-middle">
            <thead>
            <tr>
              <th scope="col">Suffixe</th>
              <th scope="col">Romajis</th>
              <th scope="col">Rôle</th>
            </tr>
            </thead>
            <tbody className="table-group-divider">
            <tr>
              <td className="auto-cell">さん</td>
              <td>san</td>
              <td>
                Niveau de politesse standard. C'est ainsi que s’appellent la plupart des gens qui ne se
                connaissent pas, ou qui ont un lien d’égal à égal. C’est ce qui correspond le plus à notre
                Monsieur ou Madame.
              </td>
            </tr>
            <tr>
              <td className="auto-cell">さま</td>
              <td>sama</td>
              <td>
                Niveau de politesse utilisé quand on s’adresse à quelqu’un d’une classe sociale supérieure.
                Il n’est plus utilisé couramment de nos jours, mais on le retrouve beaucoup dans les animes où
                la marque de respect entre deux personnage se veut prononcée, ou bien lorsque le jeu s’y prête
                comme dans les maid cafés.
              </td>
            </tr>
            <tr>
              <td className="auto-cell">くん</td>
              <td>kun</td>
              <td>
                Très souvent pour les jeunes garçons ou les amis masculins. C’est comme ça qu’un enseignant
                s’adresse à ses élèves, et que les élèves s’appellent entre eux par exemple.
              </td>
            </tr>
            <tr>
              <td className="auto-cell">ちゃん</td>
              <td>chan</td>
              <td>
                Très souvent pour les bébés, enfants très jeunes et personnes très proches, généralement de sexe
                féminin (amis d’enfance, petite copine). Il est également l’équivalent de くん pour les jeunes
                filles et les amies entre elles.
              </td>
            </tr>
            <tr>
              <td className="auto-cell">どの</td>
              <td>dono</td>
              <td>
                Aujourd’hui, il n’est plus utilisé que dans certains documents officiels. À l’époque en
                revanche, il était utilisé pour les nobles et les samouraïs, de la même manière que さん.
              </td>
            </tr>
            <tr>
              <td className="auto-cell">せんぱい</td>
              <td>senpai</td>
              <td>
                Signifie littéralement senior, le compagnon qui était là avant. Il est utilisé envers les
                personnes ayant plus d’expérience dans un domaine, plus d’ancienneté ou simplement plus âgés.
                Très utilisé à l’école dans les clubs par exemple, ou dans le monde professionnel.
              </td>
            </tr>
            <tr>
              <td className="auto-cell">せんせい</td>
              <td>sensei</td>
              <td>
                Équivalent de Professeur en français. Impose une très forte valeur de respect, et ne doit être
                utilisé que quand la personne qui enseigne, ou qui a la connaissance, est légitime (diplôme).
              </td>
            </tr>
            </tbody>
          </table>
        </div>

        <p>
          Quelques exemples :
        </p>

        <div className="table-responsive">
          <table className="table table-sm table-striped table-hover align-middle">
            <thead>
            <tr>
              <th>Français</th>
              <th>Romajis</th>
              <th>Japonais</th>
            </tr>
            </thead>
            <tbody className="table-group-divider">
            <tr>
              <td>
                <span className="person">Monsieur Ishikawa</span>{' '}
                <span className="verb">est</span>{' '}
                <span className="adj">grand.</span>
              </td>
              <td>
                <span className="person">ishikawa-san</span>{' '}
                <span className="part">wa</span>{' '}
                <span className="adj">takai</span>{' '}
                <span className="verb">desu.</span>
              </td>
              <td className="japanese easy">
                <div>
                  <ruby className="person">石川<rt>いしかわ</rt>さん</ruby>
                  <span className="part">は</span>
                  <ruby className="adj">高<rt>たか</rt>い</ruby>
                  <span className="verb">です。</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <span className="person">La petite Lulu</span>{' '}
                <span className="verb">n’était pas</span>{' '}
                <span className="noun">une adulte.</span>
              </td>
              <td>
                <span className="person">ruru-chan</span>{' '}
                <span className="part">wa</span>{' '}
                <span className="noun">otona</span>{' '}
                <span className="verb">ja arimasen deshita.</span>
              </td>
              <td className="japanese easy">
                <div>
                  <ruby className="person">ルル<rt>るる</rt>ちゃん</ruby>
                  <span className="part">は</span>
                  <ruby className="noun">大人<rt>おとな</rt></ruby>
                  <span className="verb">じゃ</span>
                  <span className="verb">ありません</span>
                  <span className="verb">でした。</span>
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
