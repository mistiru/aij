import FuriganasSwitch from '@/app/pages/_components/FuriganasSwitch';
import GoBackToIndex from '@/app/pages/_components/GoBackToIndex';
import ScrollTopLink from '@/app/pages/_components/ScrollTopLink';
import TableOfContent from '@/app/pages/_components/TableOfContent';

export default function TocAndLinks({ furiganas, children }) {
  return (
    <div className="aij-toc" style={{ marginTop: '-0.5rem' }}>
      <div className="toc-col sticky-top pt-xl-2">
        <p className="mb-2 text-xl-start text-center">
          <GoBackToIndex />
        </p>

        <p className="toc-title">
          <strong>Table des matières</strong>
        </p>
        <p className="mb-0">
          <ScrollTopLink />
        </p>
        <TableOfContent />

        <hr/>

        {furiganas && <>
          <FuriganasSwitch />

          <p className="small text-muted">
            Passez votre souris sur les Kanjis pour afficher les Furiganas.
          </p>

          <hr/>
        </>}

        <p>
          {children}
        </p>
      </div>
    </div>
  );
}
