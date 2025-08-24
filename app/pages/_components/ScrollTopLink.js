'use client';

export default function ScrollTopLink() {
  return (
    <a
      href="#"
      className="scroll-top"
      onClick={() => {
        scrollTo(0, 0);
      }}
    >Haut de page</a>
  );
}
