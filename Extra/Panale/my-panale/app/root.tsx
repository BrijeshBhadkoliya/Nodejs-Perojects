import { Outlet } from '@remix-run/react';
import { KottsterApp, ClientOnly, getRootLayout } from '@kottster/react';
import '@kottster/react/dist/style.css';
import schema from '../app-schema.json';

function ClientApp() {
  return (
    <KottsterApp.Provider schema={schema}>
      <Outlet />
    </KottsterApp.Provider>
  );
}

export default function App() {
  return (
    <ClientOnly>
      <ClientApp />
    </ClientOnly>
  );
}

export const Layout = getRootLayout({ schema });
export { App as ErrorBoundary };