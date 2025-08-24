import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export default function ExternalLink({ href, children }) {
  return <Link target="_blank" href={href}>
    {children} <FontAwesomeIcon icon={faUpRightFromSquare} className="small" />
  </Link>;
}
