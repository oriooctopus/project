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
  setEmail: (string: string) => void;
  setRole: (string: string) => void;
  setUsername: (string: string) => void;
  email: string;
  id: number;
  role: string;
  username: string;
};

const User = ({
  canSubmit,
  errorMessage,
  onSubmit,
  setEmail,
  setRole,
  setUsername,
  email,
  role,
  username,
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
          <div className="col-md-4">
            <TextInput
              name="Role"
              handleChange={setRole}
              placeholder="Role here"
              required
              value={role}
              withLabel
            />
          </div>
          <div className="col-md-4">
            <TextInput
              name="Email"
              handleChange={setEmail}
              isEmail
              required
              placeholder="Email Here"
              value={email}
              withLabel
            />
          </div>
          <div className="col-md-4">
            <TextInput
              name="Username"
              handleChange={setUsername}
              required
              placeholder="Username Here"
              value={username}
              withLabel
            />
          </div>
        </div>
      </SubmitBox>
    </Container>
  </Layout>
);

export default User;
