import React, { useState, Fragment } from 'react';
import { useNavigate } from '@reach/router';
import SubmitBox from 'components/molecules/SubmitBox';
import TextInput from 'components/atoms/Inputs/Text';

import { useRegisterUserMutation } from 'generated/graphql';

type RegisterFormProps = {};

export const RegisterForm = ({}: RegisterFormProps) => {
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [register] = useRegisterUserMutation({
    variables: {
      email,
      password,
      // @ts-ignore
      role,
      username,
    },
  });
  const handleSubmit = () => {
    setDisabled(true);
    setError('');

    register()
      .then(({ data }) => {
        navigate('/login');
      })
      .catch(() => setError('Invalid Credentials'));
  };

  return (
    <Fragment>
      <SubmitBox
        canSubmit={!disabled}
        errorMessage={error}
        onSubmit={handleSubmit}
      >
        <TextInput
          name="Email"
          handleChange={setEmail}
          required
          placeholder="Email"
          type="email"
          value={email}
          withLabel
        />
        <TextInput
          name="Username"
          handleChange={setUsername}
          required
          placeholder="Username"
          value={username}
          withLabel
        />
        <TextInput
          name="Password"
          handleChange={setPassword}
          required
          placeholder="Password Here"
          type="password"
          value={password}
          withLabel
        />
        <TextInput
          name="Role"
          handleChange={setRole}
          required
          placeholder="owner/user/admin"
          value={role}
          withLabel
        />
      </SubmitBox>
    </Fragment>
  );
};
