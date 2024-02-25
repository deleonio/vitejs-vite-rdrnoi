import { FC, useState } from 'react';
import { KolButton, KolForm, KolKolibri, KolVersion } from '@public-ui/react';
import { Form } from 'react-router-dom';

import packageJson from '../node_modules/@public-ui/components/package.json';

export const App: FC = () => {
  return (
    <div className="font-sans m-10">
      <h1>Form-Submit's with KoliBri</h1>
      <p>
        This example shows how you can use KoliBri with React-Router{' '}
        <code>Form</code>.
      </p>
      <Form
        action="confirm"
        method="post"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <KolButton
          _label="Submit"
          _name="submit"
          _type="submit"
          _value="form"
        />
      </Form>
      <Form
        action="confirm"
        method="post"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <button>Submit</button>
      </Form>
      <span className="flex items-center gap-2 mt-4">
        <KolKolibri className="w-6 inline-block" _labeled={false} />
        KoliBri
        <KolVersion _label={packageJson.version} />
      </span>
    </div>
  );
};
