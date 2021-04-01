import gql from 'graphql-tag';

export const LOGIN = gql`
mutation login($usernameOrEmail: String!, $password: String!) {
	login(input: {usernameOrEmail: $usernameOrEmail, password: $password}) {
		tokens {
			accessToken
		}
	}
}
`;

export const REGISTER = gql`
mutation registerUser($email: String!, $password: String!) {
	registerUser (email: $email, password: $password) {
		token
	}
}
`;
