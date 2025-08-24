import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

import { config } from '@fortawesome/fontawesome-svg-core';
import BootstrapClient from './_components/BootstrapClient';

config.autoAddCss = false;

export const metadata = {
  title: {
    template: "%s | Atelier d'Initiation au Japonais",
    default: "Atelier d'Initiation au Japonais",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
