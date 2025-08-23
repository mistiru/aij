import GoBackToIndex from '@/app/pages/GoBackToIndex';
import ScrollTopLink from '@/app/pages/ScrollTopLink';
import TableOfContent from '@/app/pages/TableOfContent';

export default function TocAndLinks({ children }) {
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

        <p>
          {children}
        </p>
      </div>
    </div>
  );
}
