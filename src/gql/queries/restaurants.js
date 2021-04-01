import gql from 'graphql-tag';

export const RESTAURANT_DETAILS = gql`
query post {
	post(id: $id) {
    id
    title
    content
  }
}
`;

// comments {
//   ...CommentInfo
// }
