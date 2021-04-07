import React from 'react';
import Layout from 'components/atoms/Layout';
import Container from 'components/atoms/Container';
import SubmitBox from 'components/molecules/SubmitBox';
import TextInput from 'components/atoms/Inputs/Text';
import styles from './index.module.scss';

type UserProps = {
  canSubmit: boolean;
  errorMessage: string;
  onSubmit: () => void;
  setEmail: (email: string) => void;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
  email: string;
  id: number;
  username: string;
  password?: string;
};

const User = ({
  canSubmit,
  errorMessage,
  onSubmit,
  setEmail,
  setUsername,
  setPassword,
  email,
  username,
  password,
  id,
}: UserProps) => (
  <Layout>
    <Container className={styles.user}>
      <h1>User id: {id}</h1>
      <SubmitBox
        canSubmit={canSubmit}
        errorMessage={errorMessage}
        onSubmit={onSubmit}
      >
        <div className="row">
          <div className="col-md-3">
            <TextInput
              name="Email"
              handleChange={setEmail}
              type="email"
              required
              placeholder="Email Here"
              value={email}
              withLabel
            />
          </div>
          <div className="col-md-3">
            <TextInput
              name="Username"
              handleChange={setUsername}
              required
              placeholder="Username Here"
              value={username}
              withLabel
            />
          </div>
          <div className="col-md-3">
            <TextInput
              name="Password"
              handleChange={setPassword}
              placeholder="Password Here"
              value={password || ''}
              type="password"
              withLabel
            />
          </div>
        </div>
      </SubmitBox>
    </Container>
  </Layout>
);

export default User;
