import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export default function ExternalLink({ href, noIcon = false, children }) {
  return <Link target="_blank" href={href}>
    {children}{!noIcon &&  <FontAwesomeIcon icon={faUpRightFromSquare} className="small" />}
  </Link>;
}
