'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';

export default function ReloadButton() {
  return (
    <a
      href="#"
      className="fs-5 align-middle text-muted"
      onClick={event => {
        event.preventDefault();
        location.reload();
      }}
    ><FontAwesomeIcon icon={faRotate} /></a>
  );
}
