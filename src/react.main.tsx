import { register } from '@public-ui/components';
import { defineCustomElements } from '@public-ui/components/dist/loader';
import { DEFAULT } from '@public-ui/theme-default';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { Confirm } from './Confirm';
import { App } from './App';

const loader = async (...args: any[]) => console.log(...args);

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'confirm',
        element: <Confirm />,
      },
    ],
  },
]);

register(DEFAULT, defineCustomElements)
  .then(() => {
    const htmlElement: HTMLElement | null =
      document.querySelector<HTMLDivElement>('div#app');
    if (htmlElement instanceof HTMLElement) {
      const root = createRoot(htmlElement);
      root.render(
        <StrictMode>
          <RouterProvider router={router} />
        </StrictMode>
      );
    }
  })
  .catch(console.error);
