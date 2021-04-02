import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  FileUpload: any;
  /** A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Time: any;
};

export type AddRestaurantInput = {
  title: Scalars['String'];
  content: Scalars['String'];
};

export type AddReviewCommentInput = {
  content: Scalars['String'];
  restaurantId: Scalars['Int'];
};

export type AddReviewInput = {
  content: Scalars['String'];
  restaurantId: Scalars['Int'];
};

export type AddUserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  role: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  profile?: Maybe<ProfileInput>;
  auth?: Maybe<AuthInput>;
};

export type AuthCertificateInput = {
  serial?: Maybe<Scalars['String']>;
};

export type AuthFacebookInput = {
  fbId?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
};

export type AuthGitHubInput = {
  ghId?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
};

export type AuthGoogleInput = {
  googleId?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
};

export type AuthInput = {
  certificate?: Maybe<AuthCertificateInput>;
  facebook?: Maybe<AuthFacebookInput>;
  google?: Maybe<AuthGoogleInput>;
  github?: Maybe<AuthGitHubInput>;
  linkedin?: Maybe<AuthLinkedInInput>;
};

export type AuthLinkedInInput = {
  lnId?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  user?: Maybe<User>;
  tokens?: Maybe<Tokens>;
};

export type CertificateAuth = {
  __typename?: 'CertificateAuth';
  serial?: Maybe<Scalars['String']>;
};

export type ContactInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  content: Scalars['String'];
};

export type Counter = {
  __typename?: 'Counter';
  amount: Scalars['Int'];
};

export type DeleteReviewCommentInput = {
  id: Scalars['Int'];
  restaurantId: Scalars['Int'];
};

export type DeleteReviewInput = {
  id: Scalars['Int'];
  restaurantId: Scalars['Int'];
};

export type EditRestaurantInput = {
  id: Scalars['Int'];
  title: Scalars['String'];
  content: Scalars['String'];
};

export type EditReviewCommentInput = {
  id: Scalars['Int'];
  content: Scalars['String'];
  restaurantId: Scalars['Int'];
};

export type EditReviewInput = {
  id: Scalars['Int'];
  content: Scalars['String'];
  restaurantId: Scalars['Int'];
};

export type EditUserInput = {
  id: Scalars['Int'];
  username: Scalars['String'];
  role: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  email: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  profile?: Maybe<ProfileInput>;
  auth?: Maybe<AuthInput>;
};

export type FacebookAuth = {
  __typename?: 'FacebookAuth';
  fbId?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type File = {
  __typename?: 'File';
  id: Scalars['Int'];
  name: Scalars['String'];
  type: Scalars['String'];
  size: Scalars['Int'];
  path: Scalars['String'];
};

export type FilterUserInput = {
  searchText?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type ForgotPasswordInput = {
  email: Scalars['String'];
};

export type GithubAuth = {
  __typename?: 'GithubAuth';
  ghId?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
};

export type GoogleAuth = {
  __typename?: 'GoogleAuth';
  googleId?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
};

export type LinkedInAuth = {
  __typename?: 'LinkedInAuth';
  lnId?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
};

export type LoginUserInput = {
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  dummy?: Maybe<Scalars['Int']>;
  logout?: Maybe<Scalars['String']>;
  refreshTokens: Tokens;
  addServerCounter?: Maybe<Counter>;
  addRestaurant?: Maybe<Restaurant>;
  deleteRestaurant?: Maybe<Restaurant>;
  editRestaurant?: Maybe<Restaurant>;
  addReview?: Maybe<Review>;
  deleteReview?: Maybe<Review>;
  editReview?: Maybe<Review>;
  addReviewComment?: Maybe<ReviewComment>;
  deleteReviewComment?: Maybe<ReviewComment>;
  editReviewComment?: Maybe<ReviewComment>;
  addStripeSubscription: StripeSubscription;
  cancelStripeSubscription: StripeSubscription;
  updateStripeSubscriptionCard: Scalars['Boolean'];
  login: AuthPayload;
  forgotPassword?: Maybe<Scalars['String']>;
  resetPassword?: Maybe<Scalars['String']>;
  register: UserPayload;
  addUser: UserPayload;
  editUser: UserPayload;
  deleteUser: UserPayload;
  uploadFiles: Scalars['Boolean'];
  removeFile: Scalars['Boolean'];
  contact?: Maybe<Scalars['String']>;
};

export type MutationRefreshTokensArgs = {
  refreshToken: Scalars['String'];
};

export type MutationAddServerCounterArgs = {
  amount: Scalars['Int'];
};

export type MutationAddRestaurantArgs = {
  input: AddRestaurantInput;
};

export type MutationDeleteRestaurantArgs = {
  id: Scalars['Int'];
};

export type MutationEditRestaurantArgs = {
  input: EditRestaurantInput;
};

export type MutationAddReviewArgs = {
  input: AddReviewInput;
};

export type MutationDeleteReviewArgs = {
  input: DeleteReviewInput;
};

export type MutationEditReviewArgs = {
  input: EditReviewInput;
};

export type MutationAddReviewCommentArgs = {
  input: AddReviewCommentInput;
};

export type MutationDeleteReviewCommentArgs = {
  input: DeleteReviewCommentInput;
};

export type MutationEditReviewCommentArgs = {
  input: EditReviewCommentInput;
};

export type MutationAddStripeSubscriptionArgs = {
  input: StripeSubscriptionInput;
};

export type MutationUpdateStripeSubscriptionCardArgs = {
  input: StripeSubscriptionInput;
};

export type MutationLoginArgs = {
  input: LoginUserInput;
};

export type MutationForgotPasswordArgs = {
  input: ForgotPasswordInput;
};

export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};

export type MutationRegisterArgs = {
  input: RegisterUserInput;
};

export type MutationAddUserArgs = {
  input: AddUserInput;
};

export type MutationEditUserArgs = {
  input: EditUserInput;
};

export type MutationDeleteUserArgs = {
  id: Scalars['Int'];
};

export type MutationUploadFilesArgs = {
  files: Array<Maybe<Scalars['FileUpload']>>;
};

export type MutationRemoveFileArgs = {
  id: Scalars['Int'];
};

export type MutationContactArgs = {
  input: ContactInput;
};

export type OrderByUserInput = {
  column?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['String']>;
};

export type ProfileInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  dummy?: Maybe<Scalars['Int']>;
  serverCounter?: Maybe<Counter>;
  restaurants?: Maybe<Restaurants>;
  restaurant?: Maybe<Restaurant>;
  stripeSubscription?: Maybe<StripeSubscription>;
  stripeSubscriptionProtectedNumber?: Maybe<StripeSubscriberProtectedNumber>;
  stripeSubscriptionCard?: Maybe<StripeSubscriptionCard>;
  users?: Maybe<Array<Maybe<User>>>;
  user?: Maybe<UserPayload>;
  currentUser?: Maybe<User>;
  files?: Maybe<Array<Maybe<File>>>;
  pdf?: Maybe<Array<Maybe<Scalars['Int']>>>;
  excel?: Maybe<Array<Maybe<Scalars['Int']>>>;
  report?: Maybe<Array<Maybe<Report>>>;
};

export type QueryRestaurantsArgs = {
  limit?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Int']>;
};

export type QueryRestaurantArgs = {
  id: Scalars['Int'];
};

export type QueryUsersArgs = {
  orderBy?: Maybe<OrderByUserInput>;
  filter?: Maybe<FilterUserInput>;
};

export type QueryUserArgs = {
  id: Scalars['Int'];
};

export type RegisterUserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Report = {
  __typename?: 'Report';
  id: Scalars['Int'];
  name: Scalars['String'];
  phone: Scalars['String'];
  email: Scalars['String'];
};

export type ResetPasswordInput = {
  token: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};

export type Restaurant = {
  __typename?: 'Restaurant';
  id: Scalars['Int'];
  title: Scalars['String'];
  description: Scalars['String'];
  imageUrl: Scalars['String'];
  location: Scalars['String'];
  reviews?: Maybe<Array<Maybe<Review>>>;
  averageRating: Scalars['Int'];
  totalReviews: Scalars['Int'];
};

export type RestaurantEdges = {
  __typename?: 'RestaurantEdges';
  node?: Maybe<Restaurant>;
  cursor?: Maybe<Scalars['Int']>;
};

export type RestaurantPageInfo = {
  __typename?: 'RestaurantPageInfo';
  endCursor?: Maybe<Scalars['Int']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
};

export type Restaurants = {
  __typename?: 'Restaurants';
  totalCount?: Maybe<Scalars['Int']>;
  edges?: Maybe<Array<Maybe<RestaurantEdges>>>;
  pageInfo?: Maybe<RestaurantPageInfo>;
};

export type Review = {
  __typename?: 'Review';
  id: Scalars['Int'];
  content: Scalars['String'];
  date: Scalars['String'];
  rating: Scalars['Int'];
  userId: Scalars['Int'];
  restaurantId: Scalars['Int'];
  reviewComment?: Maybe<ReviewComment>;
  userProfile: UserProfile;
};

export type ReviewComment = {
  __typename?: 'ReviewComment';
  id: Scalars['Int'];
  comment: Scalars['String'];
  reviewId: Scalars['Int'];
};

export type StripeSubscriberProtectedNumber = {
  __typename?: 'StripeSubscriberProtectedNumber';
  number?: Maybe<Scalars['Int']>;
};

export type StripeSubscription = {
  __typename?: 'StripeSubscription';
  active: Scalars['Boolean'];
};

export type StripeSubscriptionCard = {
  __typename?: 'StripeSubscriptionCard';
  expiryMonth?: Maybe<Scalars['Int']>;
  expiryYear?: Maybe<Scalars['Int']>;
  last4?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
};

export type StripeSubscriptionInput = {
  token: Scalars['String'];
  expiryMonth: Scalars['Int'];
  expiryYear: Scalars['Int'];
  last4: Scalars['String'];
  brand: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  dummy?: Maybe<Scalars['Int']>;
  counterUpdated?: Maybe<Counter>;
  restaurantUpdated?: Maybe<UpdateRestaurantPayload>;
  restaurantsUpdated?: Maybe<UpdateRestaurantPayload>;
  reviewUpdated?: Maybe<UpdateReviewPayload>;
  reviewCommentUpdated?: Maybe<UpdateReviewCommentPayload>;
  usersUpdated?: Maybe<UpdateUserPayload>;
};

export type SubscriptionRestaurantUpdatedArgs = {
  id: Scalars['Int'];
};

export type SubscriptionRestaurantsUpdatedArgs = {
  endCursor: Scalars['Int'];
};

export type SubscriptionReviewUpdatedArgs = {
  restaurantId: Scalars['Int'];
};

export type SubscriptionReviewCommentUpdatedArgs = {
  reviewId: Scalars['Int'];
};

export type SubscriptionUsersUpdatedArgs = {
  filter?: Maybe<FilterUserInput>;
};

export type Tokens = {
  __typename?: 'Tokens';
  accessToken?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
};

export type UpdateRestaurantPayload = {
  __typename?: 'UpdateRestaurantPayload';
  mutation: Scalars['String'];
  id: Scalars['Int'];
  node?: Maybe<Restaurant>;
};

export type UpdateReviewCommentPayload = {
  __typename?: 'UpdateReviewCommentPayload';
  mutation: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  restaurantId: Scalars['Int'];
  node?: Maybe<ReviewComment>;
};

export type UpdateReviewPayload = {
  __typename?: 'UpdateReviewPayload';
  mutation: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  restaurantId: Scalars['Int'];
  node?: Maybe<Review>;
};

export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  mutation: Scalars['String'];
  node: User;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  username: Scalars['String'];
  role: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  email: Scalars['String'];
  profile?: Maybe<UserProfile>;
  auth?: Maybe<UserAuth>;
};

export type UserAuth = {
  __typename?: 'UserAuth';
  certificate?: Maybe<CertificateAuth>;
  facebook?: Maybe<FacebookAuth>;
  google?: Maybe<GoogleAuth>;
  github?: Maybe<GithubAuth>;
  linkedin?: Maybe<LinkedInAuth>;
};

export type UserPayload = {
  __typename?: 'UserPayload';
  user?: Maybe<User>;
};

export type UserProfile = {
  __typename?: 'UserProfile';
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
};

export type RestaurantDetailsQueryVariables = Exact<{
  id: Scalars['Int'];
}>;

export type RestaurantDetailsQuery = { __typename?: 'Query' } & {
  restaurant?: Maybe<
    { __typename?: 'Restaurant' } & Pick<
      Restaurant,
      | 'id'
      | 'averageRating'
      | 'description'
      | 'location'
      | 'imageUrl'
      | 'title'
      | 'totalReviews'
    > & {
        reviews?: Maybe<
          Array<Maybe<{ __typename?: 'Review' } & ReviewCardFragment>>
        >;
      }
  >;
};

export type ReviewCardFragment = { __typename?: 'Review' } & Pick<
  Review,
  'id' | 'content' | 'date' | 'rating' | 'restaurantId'
> & {
    userProfile: {
      __typename?: 'UserProfile';
    } & UserProfileCardFragment;
  };

export type CurrentUserQueryVariables = Exact<{
  [key: string]: never;
}>;

export type CurrentUserQuery = { __typename?: 'Query' } & {
  currentUser?: Maybe<
    { __typename?: 'User' } & Pick<User, 'id' | 'role'>
  >;
};

export type UserProfileCardFragment = {
  __typename?: 'UserProfile';
} & Pick<UserProfile, 'fullName'>;

export const UserProfileCardFragmentDoc = gql`
  fragment userProfileCard on UserProfile {
    fullName
  }
`;
export const ReviewCardFragmentDoc = gql`
  fragment review on Review {
    id
    content
    date
    rating
    restaurantId
    userProfile {
      ...userProfileCard
    }
  }
  ${UserProfileCardFragmentDoc}
`;
export const RestaurantDetailsDocument = gql`
  query restaurantDetails($id: Int!) {
    restaurant(id: $id) {
      id
      averageRating
      description
      location
      imageUrl
      reviews {
        ...review
      }
      title
      totalReviews
    }
  }
  ${ReviewCardFragmentDoc}
`;

/**
 * __useRestaurantDetailsQuery__
 *
 * To run a query within a React component, call `useRestaurantDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRestaurantDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRestaurantDetailsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRestaurantDetailsQuery(
  baseOptions: Apollo.QueryHookOptions<
    RestaurantDetailsQuery,
    RestaurantDetailsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    RestaurantDetailsQuery,
    RestaurantDetailsQueryVariables
  >(RestaurantDetailsDocument, options);
}
export function useRestaurantDetailsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    RestaurantDetailsQuery,
    RestaurantDetailsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    RestaurantDetailsQuery,
    RestaurantDetailsQueryVariables
  >(RestaurantDetailsDocument, options);
}
export type RestaurantDetailsQueryHookResult = ReturnType<
  typeof useRestaurantDetailsQuery
>;
export type RestaurantDetailsLazyQueryHookResult = ReturnType<
  typeof useRestaurantDetailsLazyQuery
>;
export type RestaurantDetailsQueryResult = Apollo.QueryResult<
  RestaurantDetailsQuery,
  RestaurantDetailsQueryVariables
>;
export const CurrentUserDocument = gql`
  query currentUser {
    currentUser {
      id
      role
    }
  }
`;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CurrentUserQuery,
    CurrentUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(
    CurrentUserDocument,
    options,
  );
}
export function useCurrentUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CurrentUserQuery,
    CurrentUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    CurrentUserQuery,
    CurrentUserQueryVariables
  >(CurrentUserDocument, options);
}
export type CurrentUserQueryHookResult = ReturnType<
  typeof useCurrentUserQuery
>;
export type CurrentUserLazyQueryHookResult = ReturnType<
  typeof useCurrentUserLazyQuery
>;
export type CurrentUserQueryResult = Apollo.QueryResult<
  CurrentUserQuery,
  CurrentUserQueryVariables
>;
