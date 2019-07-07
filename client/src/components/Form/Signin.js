import React, { useState } from 'react';
import { TextField } from '../../ui/TextFields';
import { Button } from '../../ui/Button';

export function SigninForm({ onSignin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h2>Sign into your account</h2>
      <TextField
        type="email"
        name="email"
        label="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        type="password"
        name="password"
        label="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Button
        label="Sign In!"
        onClick={() => {
          onSignin(email, password);
          setEmail('');
          setPassword('');
        }}
      />
    </div>
  );
}
