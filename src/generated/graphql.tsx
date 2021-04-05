import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
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
  description: Scalars['String'];
  title: Scalars['String'];
  imageUrl: Scalars['String'];
  location: Scalars['String'];
};

export type AddReviewCommentInput = {
  comment: Scalars['String'];
  reviewId: Scalars['Int'];
};

export type AddReviewInput = {
  content: Scalars['String'];
  rating: Scalars['Int'];
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



export type EditRestaurantInput = {
  description: Scalars['String'];
  id: Scalars['Int'];
  title: Scalars['String'];
  imageUrl: Scalars['String'];
  userId: Scalars['Int'];
  location: Scalars['String'];
};

export type EditReviewCommentInput = {
  id: Scalars['Int'];
  comment: Scalars['String'];
  reviewId: Scalars['Int'];
};

export type EditReviewInput = {
  id: Scalars['Int'];
  content: Scalars['String'];
  rating: Scalars['Int'];
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
  id: Scalars['Int'];
};


export type MutationEditReviewArgs = {
  input: EditReviewInput;
};


export type MutationAddReviewCommentArgs = {
  input: AddReviewCommentInput;
};


export type MutationDeleteReviewCommentArgs = {
  id: Scalars['Int'];
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

export type PaginationQueryPageInfo = {
  __typename?: 'PaginationQueryPageInfo';
  endCursor?: Maybe<Scalars['Int']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
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
  getUnansweredReviewsForOwner?: Maybe<UnansweredReviews>;
  restaurant?: Maybe<Restaurant>;
  review?: Maybe<Review>;
  reviewComment?: Maybe<ReviewComment>;
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
  after?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  ratingsMinimum?: Maybe<Scalars['Int']>;
};


export type QueryGetUnansweredReviewsForOwnerArgs = {
  after?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryRestaurantArgs = {
  id: Scalars['Int'];
};


export type QueryReviewArgs = {
  id: Scalars['Int'];
};


export type QueryReviewCommentArgs = {
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
  averageRating?: Maybe<Scalars['Float']>;
  canAddReview: Scalars['Boolean'];
  title: Scalars['String'];
  description: Scalars['String'];
  highestReview?: Maybe<Review>;
  imageUrl: Scalars['String'];
  lowestReview?: Maybe<Review>;
  location: Scalars['String'];
  reviews?: Maybe<Array<Maybe<Review>>>;
  totalReviews: Scalars['Int'];
  userId: Scalars['Int'];
};

export type RestaurantEdges = {
  __typename?: 'RestaurantEdges';
  node?: Maybe<Restaurant>;
  cursor?: Maybe<Scalars['Int']>;
};

export type Restaurants = {
  __typename?: 'Restaurants';
  totalCount?: Maybe<Scalars['Int']>;
  edges?: Maybe<Array<Maybe<RestaurantEdges>>>;
  pageInfo?: Maybe<PaginationQueryPageInfo>;
};

export type Review = {
  __typename?: 'Review';
  id: Scalars['Int'];
  canAddComment: Scalars['Boolean'];
  canModify: Scalars['Boolean'];
  createdAt: Scalars['String'];
  content: Scalars['String'];
  date: Scalars['String'];
  rating: Scalars['Int'];
  restaurant?: Maybe<Restaurant>;
  userId: Scalars['Int'];
  restaurantId: Scalars['Int'];
  reviewComment?: Maybe<ReviewComment>;
  userProfile: UserProfile;
};

export type ReviewComment = {
  __typename?: 'ReviewComment';
  id: Scalars['Int'];
  canModify: Scalars['Boolean'];
  comment: Scalars['String'];
  review: Review;
  reviewId: Scalars['Int'];
  restaurantId: Scalars['Int'];
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

export type UnansweredReviewEdges = {
  __typename?: 'UnansweredReviewEdges';
  node?: Maybe<Review>;
  cursor?: Maybe<Scalars['Int']>;
};

export type UnansweredReviews = {
  __typename?: 'UnansweredReviews';
  totalCount?: Maybe<Scalars['Int']>;
  edges?: Maybe<Array<Maybe<UnansweredReviewEdges>>>;
  pageInfo?: Maybe<PaginationQueryPageInfo>;
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
  id: Scalars['Int'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
};

export type DeleteReviewCommentMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteReviewCommentMutation = (
  { __typename?: 'Mutation' }
  & { deleteReviewComment?: Maybe<(
    { __typename?: 'ReviewComment' }
    & Pick<ReviewComment, 'id'>
  )> }
);

export type DeleteRestaurantMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteRestaurantMutation = (
  { __typename?: 'Mutation' }
  & { deleteRestaurant?: Maybe<(
    { __typename?: 'Restaurant' }
    & Pick<Restaurant, 'id'>
  )> }
);

export type CreateReviewMutationVariables = Exact<{
  content: Scalars['String'];
  rating: Scalars['Int'];
  restaurantId: Scalars['Int'];
}>;


export type CreateReviewMutation = (
  { __typename?: 'Mutation' }
  & { addReview?: Maybe<(
    { __typename?: 'Review' }
    & Pick<Review, 'id'>
  )> }
);

export type DeleteReviewMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteReviewMutation = (
  { __typename?: 'Mutation' }
  & { deleteReview?: Maybe<(
    { __typename?: 'Review' }
    & Pick<Review, 'id'>
  )> }
);

export type EditReviewMutationVariables = Exact<{
  id: Scalars['Int'];
  content: Scalars['String'];
  rating: Scalars['Int'];
}>;


export type EditReviewMutation = (
  { __typename?: 'Mutation' }
  & { editReview?: Maybe<(
    { __typename?: 'Review' }
    & Pick<Review, 'id'>
  )> }
);

export type RestaurantFragment = (
  { __typename?: 'Restaurant' }
  & Pick<Restaurant, 'id' | 'averageRating' | 'canAddReview' | 'description' | 'imageUrl' | 'location' | 'title' | 'totalReviews'>
  & { highestReview?: Maybe<(
    { __typename?: 'Review' }
    & ReviewFragment
  )>, lowestReview?: Maybe<(
    { __typename?: 'Review' }
    & ReviewFragment
  )>, reviews?: Maybe<Array<Maybe<(
    { __typename?: 'Review' }
    & ReviewFragment
  )>>> }
);

export type ReviewFragment = (
  { __typename?: 'Review' }
  & Pick<Review, 'id' | 'canAddComment' | 'canModify' | 'content' | 'date' | 'rating' | 'restaurantId'>
  & { userProfile: (
    { __typename?: 'UserProfile' }
    & UserProfileCardFragment
  ), reviewComment?: Maybe<(
    { __typename?: 'ReviewComment' }
    & ReviewCommentFragment
  )> }
);

export type ReviewCommentFragment = (
  { __typename?: 'ReviewComment' }
  & Pick<ReviewComment, 'id' | 'canModify' | 'comment'>
);

export type ReviewRestaurantQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ReviewRestaurantQuery = (
  { __typename?: 'Query' }
  & { restaurant?: Maybe<(
    { __typename?: 'Restaurant' }
    & Pick<Restaurant, 'id' | 'title'>
  )> }
);

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = (
  { __typename?: 'Query' }
  & { currentUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'role'>
  )> }
);

export type UserProfileCardFragment = (
  { __typename?: 'UserProfile' }
  & Pick<UserProfile, 'fullName'>
);

export type CreateRestaurantMutationVariables = Exact<{
  description: Scalars['String'];
  imageUrl: Scalars['String'];
  location: Scalars['String'];
  title: Scalars['String'];
}>;


export type CreateRestaurantMutation = (
  { __typename?: 'Mutation' }
  & { addRestaurant?: Maybe<(
    { __typename?: 'Restaurant' }
    & Pick<Restaurant, 'id'>
  )> }
);

export type AddReviewCommentMutationVariables = Exact<{
  reviewId: Scalars['Int'];
  comment: Scalars['String'];
}>;


export type AddReviewCommentMutation = (
  { __typename?: 'Mutation' }
  & { addReviewComment?: Maybe<(
    { __typename?: 'ReviewComment' }
    & Pick<ReviewComment, 'restaurantId'>
  )> }
);

export type AddReviewCommentDataQueryVariables = Exact<{
  reviewId: Scalars['Int'];
}>;


export type AddReviewCommentDataQuery = (
  { __typename?: 'Query' }
  & { review?: Maybe<(
    { __typename?: 'Review' }
    & Pick<Review, 'id' | 'content' | 'rating'>
    & { restaurant?: Maybe<(
      { __typename?: 'Restaurant' }
      & Pick<Restaurant, 'id' | 'title'>
    )> }
  )> }
);

export type EditRestaurantMutationVariables = Exact<{
  description: Scalars['String'];
  id: Scalars['Int'];
  imageUrl: Scalars['String'];
  location: Scalars['String'];
  title: Scalars['String'];
  userId: Scalars['Int'];
}>;


export type EditRestaurantMutation = (
  { __typename?: 'Mutation' }
  & { editRestaurant?: Maybe<(
    { __typename?: 'Restaurant' }
    & Pick<Restaurant, 'id'>
  )> }
);

export type EditReviewPageQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type EditReviewPageQuery = (
  { __typename?: 'Query' }
  & { review?: Maybe<(
    { __typename?: 'Review' }
    & Pick<Review, 'id' | 'content' | 'rating'>
    & { restaurant?: Maybe<(
      { __typename?: 'Restaurant' }
      & Pick<Restaurant, 'id' | 'title'>
    )> }
  )> }
);

export type EditReviewCommentMutationVariables = Exact<{
  id: Scalars['Int'];
  reviewId: Scalars['Int'];
  comment: Scalars['String'];
}>;


export type EditReviewCommentMutation = (
  { __typename?: 'Mutation' }
  & { editReviewComment?: Maybe<(
    { __typename?: 'ReviewComment' }
    & Pick<ReviewComment, 'restaurantId'>
  )> }
);

export type EditReviewCommentDataQueryVariables = Exact<{
  reviewCommentId: Scalars['Int'];
}>;


export type EditReviewCommentDataQuery = (
  { __typename?: 'Query' }
  & { reviewComment?: Maybe<(
    { __typename?: 'ReviewComment' }
    & Pick<ReviewComment, 'comment' | 'restaurantId'>
    & { review: (
      { __typename?: 'Review' }
      & Pick<Review, 'id' | 'content' | 'rating'>
      & { restaurant?: Maybe<(
        { __typename?: 'Restaurant' }
        & Pick<Restaurant, 'id' | 'title'>
      )> }
    ) }
  )> }
);

export type OwnerHomeQueryVariables = Exact<{ [key: string]: never; }>;


export type OwnerHomeQuery = (
  { __typename?: 'Query' }
  & { getUnansweredReviewsForOwner?: Maybe<(
    { __typename?: 'UnansweredReviews' }
    & Pick<UnansweredReviews, 'totalCount'>
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'UnansweredReviewEdges' }
      & { node?: Maybe<(
        { __typename?: 'Review' }
        & ReviewFragment
      )> }
    )>>> }
  )>, restaurants?: Maybe<(
    { __typename?: 'Restaurants' }
    & Pick<Restaurants, 'totalCount'>
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'RestaurantEdges' }
      & { node?: Maybe<(
        { __typename?: 'Restaurant' }
        & RestaurantFragment
      )> }
    )>>> }
  )> }
);

export type RestaurantDetailsQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type RestaurantDetailsQuery = (
  { __typename?: 'Query' }
  & { restaurant?: Maybe<(
    { __typename?: 'Restaurant' }
    & Pick<Restaurant, 'canAddReview'>
    & RestaurantFragment
  )>, currentUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'role'>
  )> }
);

export type RestaurantsQueryVariables = Exact<{
  after?: Maybe<Scalars['Int']>;
  limit: Scalars['Int'];
  ratingsMinimum?: Maybe<Scalars['Int']>;
}>;


export type RestaurantsQuery = (
  { __typename?: 'Query' }
  & { restaurants?: Maybe<(
    { __typename?: 'Restaurants' }
    & Pick<Restaurants, 'totalCount'>
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'RestaurantEdges' }
      & { node?: Maybe<(
        { __typename?: 'Restaurant' }
        & RestaurantFragment
      )> }
    )>>> }
  )> }
);

export type UnansweredReviewsQueryVariables = Exact<{
  after?: Maybe<Scalars['Int']>;
  limit: Scalars['Int'];
}>;


export type UnansweredReviewsQuery = (
  { __typename?: 'Query' }
  & { getUnansweredReviewsForOwner?: Maybe<(
    { __typename?: 'UnansweredReviews' }
    & Pick<UnansweredReviews, 'totalCount'>
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'UnansweredReviewEdges' }
      & { node?: Maybe<(
        { __typename?: 'Review' }
        & ReviewFragment
      )> }
    )>>> }
  )> }
);

export const UserProfileCardFragmentDoc = gql`
    fragment userProfileCard on UserProfile {
  fullName
}
    `;
export const ReviewCommentFragmentDoc = gql`
    fragment reviewComment on ReviewComment {
  id
  canModify
  comment
}
    `;
export const ReviewFragmentDoc = gql`
    fragment review on Review {
  id
  canAddComment
  canModify
  content
  date
  rating
  restaurantId
  userProfile {
    ...userProfileCard
  }
  reviewComment {
    ...reviewComment
  }
}
    ${UserProfileCardFragmentDoc}
${ReviewCommentFragmentDoc}`;
export const RestaurantFragmentDoc = gql`
    fragment restaurant on Restaurant {
  id
  averageRating
  canAddReview
  description
  highestReview {
    ...review
  }
  imageUrl
  location
  lowestReview {
    ...review
  }
  reviews {
    ...review
  }
  title
  totalReviews
}
    ${ReviewFragmentDoc}`;
export const DeleteReviewCommentDocument = gql`
    mutation deleteReviewComment($id: Int!) {
  deleteReviewComment(id: $id) {
    id
  }
}
    `;
export type DeleteReviewCommentMutationFn = Apollo.MutationFunction<DeleteReviewCommentMutation, DeleteReviewCommentMutationVariables>;

/**
 * __useDeleteReviewCommentMutation__
 *
 * To run a mutation, you first call `useDeleteReviewCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteReviewCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteReviewCommentMutation, { data, loading, error }] = useDeleteReviewCommentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteReviewCommentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteReviewCommentMutation, DeleteReviewCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteReviewCommentMutation, DeleteReviewCommentMutationVariables>(DeleteReviewCommentDocument, options);
      }
export type DeleteReviewCommentMutationHookResult = ReturnType<typeof useDeleteReviewCommentMutation>;
export type DeleteReviewCommentMutationResult = Apollo.MutationResult<DeleteReviewCommentMutation>;
export type DeleteReviewCommentMutationOptions = Apollo.BaseMutationOptions<DeleteReviewCommentMutation, DeleteReviewCommentMutationVariables>;
export const DeleteRestaurantDocument = gql`
    mutation deleteRestaurant($id: Int!) {
  deleteRestaurant(id: $id) {
    id
  }
}
    `;
export type DeleteRestaurantMutationFn = Apollo.MutationFunction<DeleteRestaurantMutation, DeleteRestaurantMutationVariables>;

/**
 * __useDeleteRestaurantMutation__
 *
 * To run a mutation, you first call `useDeleteRestaurantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRestaurantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRestaurantMutation, { data, loading, error }] = useDeleteRestaurantMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteRestaurantMutation(baseOptions?: Apollo.MutationHookOptions<DeleteRestaurantMutation, DeleteRestaurantMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteRestaurantMutation, DeleteRestaurantMutationVariables>(DeleteRestaurantDocument, options);
      }
export type DeleteRestaurantMutationHookResult = ReturnType<typeof useDeleteRestaurantMutation>;
export type DeleteRestaurantMutationResult = Apollo.MutationResult<DeleteRestaurantMutation>;
export type DeleteRestaurantMutationOptions = Apollo.BaseMutationOptions<DeleteRestaurantMutation, DeleteRestaurantMutationVariables>;
export const CreateReviewDocument = gql`
    mutation createReview($content: String!, $rating: Int!, $restaurantId: Int!) {
  addReview(
    input: {content: $content, rating: $rating, restaurantId: $restaurantId}
  ) {
    id
  }
}
    `;
export type CreateReviewMutationFn = Apollo.MutationFunction<CreateReviewMutation, CreateReviewMutationVariables>;

/**
 * __useCreateReviewMutation__
 *
 * To run a mutation, you first call `useCreateReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReviewMutation, { data, loading, error }] = useCreateReviewMutation({
 *   variables: {
 *      content: // value for 'content'
 *      rating: // value for 'rating'
 *      restaurantId: // value for 'restaurantId'
 *   },
 * });
 */
export function useCreateReviewMutation(baseOptions?: Apollo.MutationHookOptions<CreateReviewMutation, CreateReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateReviewMutation, CreateReviewMutationVariables>(CreateReviewDocument, options);
      }
export type CreateReviewMutationHookResult = ReturnType<typeof useCreateReviewMutation>;
export type CreateReviewMutationResult = Apollo.MutationResult<CreateReviewMutation>;
export type CreateReviewMutationOptions = Apollo.BaseMutationOptions<CreateReviewMutation, CreateReviewMutationVariables>;
export const DeleteReviewDocument = gql`
    mutation deleteReview($id: Int!) {
  deleteReview(id: $id) {
    id
  }
}
    `;
export type DeleteReviewMutationFn = Apollo.MutationFunction<DeleteReviewMutation, DeleteReviewMutationVariables>;

/**
 * __useDeleteReviewMutation__
 *
 * To run a mutation, you first call `useDeleteReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteReviewMutation, { data, loading, error }] = useDeleteReviewMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteReviewMutation(baseOptions?: Apollo.MutationHookOptions<DeleteReviewMutation, DeleteReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteReviewMutation, DeleteReviewMutationVariables>(DeleteReviewDocument, options);
      }
export type DeleteReviewMutationHookResult = ReturnType<typeof useDeleteReviewMutation>;
export type DeleteReviewMutationResult = Apollo.MutationResult<DeleteReviewMutation>;
export type DeleteReviewMutationOptions = Apollo.BaseMutationOptions<DeleteReviewMutation, DeleteReviewMutationVariables>;
export const EditReviewDocument = gql`
    mutation editReview($id: Int!, $content: String!, $rating: Int!) {
  editReview(input: {content: $content, rating: $rating, id: $id}) {
    id
  }
}
    `;
export type EditReviewMutationFn = Apollo.MutationFunction<EditReviewMutation, EditReviewMutationVariables>;

/**
 * __useEditReviewMutation__
 *
 * To run a mutation, you first call `useEditReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editReviewMutation, { data, loading, error }] = useEditReviewMutation({
 *   variables: {
 *      id: // value for 'id'
 *      content: // value for 'content'
 *      rating: // value for 'rating'
 *   },
 * });
 */
export function useEditReviewMutation(baseOptions?: Apollo.MutationHookOptions<EditReviewMutation, EditReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditReviewMutation, EditReviewMutationVariables>(EditReviewDocument, options);
      }
export type EditReviewMutationHookResult = ReturnType<typeof useEditReviewMutation>;
export type EditReviewMutationResult = Apollo.MutationResult<EditReviewMutation>;
export type EditReviewMutationOptions = Apollo.BaseMutationOptions<EditReviewMutation, EditReviewMutationVariables>;
export const ReviewRestaurantDocument = gql`
    query reviewRestaurant($id: Int!) {
  restaurant(id: $id) {
    id
    title
  }
}
    `;

/**
 * __useReviewRestaurantQuery__
 *
 * To run a query within a React component, call `useReviewRestaurantQuery` and pass it any options that fit your needs.
 * When your component renders, `useReviewRestaurantQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReviewRestaurantQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useReviewRestaurantQuery(baseOptions: Apollo.QueryHookOptions<ReviewRestaurantQuery, ReviewRestaurantQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReviewRestaurantQuery, ReviewRestaurantQueryVariables>(ReviewRestaurantDocument, options);
      }
export function useReviewRestaurantLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReviewRestaurantQuery, ReviewRestaurantQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReviewRestaurantQuery, ReviewRestaurantQueryVariables>(ReviewRestaurantDocument, options);
        }
export type ReviewRestaurantQueryHookResult = ReturnType<typeof useReviewRestaurantQuery>;
export type ReviewRestaurantLazyQueryHookResult = ReturnType<typeof useReviewRestaurantLazyQuery>;
export type ReviewRestaurantQueryResult = Apollo.QueryResult<ReviewRestaurantQuery, ReviewRestaurantQueryVariables>;
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
export function useCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
      }
export function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export const CreateRestaurantDocument = gql`
    mutation createRestaurant($description: String!, $imageUrl: String!, $location: String!, $title: String!) {
  addRestaurant(
    input: {description: $description, imageUrl: $imageUrl, location: $location, title: $title}
  ) {
    id
  }
}
    `;
export type CreateRestaurantMutationFn = Apollo.MutationFunction<CreateRestaurantMutation, CreateRestaurantMutationVariables>;

/**
 * __useCreateRestaurantMutation__
 *
 * To run a mutation, you first call `useCreateRestaurantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRestaurantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRestaurantMutation, { data, loading, error }] = useCreateRestaurantMutation({
 *   variables: {
 *      description: // value for 'description'
 *      imageUrl: // value for 'imageUrl'
 *      location: // value for 'location'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useCreateRestaurantMutation(baseOptions?: Apollo.MutationHookOptions<CreateRestaurantMutation, CreateRestaurantMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRestaurantMutation, CreateRestaurantMutationVariables>(CreateRestaurantDocument, options);
      }
export type CreateRestaurantMutationHookResult = ReturnType<typeof useCreateRestaurantMutation>;
export type CreateRestaurantMutationResult = Apollo.MutationResult<CreateRestaurantMutation>;
export type CreateRestaurantMutationOptions = Apollo.BaseMutationOptions<CreateRestaurantMutation, CreateRestaurantMutationVariables>;
export const AddReviewCommentDocument = gql`
    mutation addReviewComment($reviewId: Int!, $comment: String!) {
  addReviewComment(input: {reviewId: $reviewId, comment: $comment}) {
    restaurantId
  }
}
    `;
export type AddReviewCommentMutationFn = Apollo.MutationFunction<AddReviewCommentMutation, AddReviewCommentMutationVariables>;

/**
 * __useAddReviewCommentMutation__
 *
 * To run a mutation, you first call `useAddReviewCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddReviewCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addReviewCommentMutation, { data, loading, error }] = useAddReviewCommentMutation({
 *   variables: {
 *      reviewId: // value for 'reviewId'
 *      comment: // value for 'comment'
 *   },
 * });
 */
export function useAddReviewCommentMutation(baseOptions?: Apollo.MutationHookOptions<AddReviewCommentMutation, AddReviewCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddReviewCommentMutation, AddReviewCommentMutationVariables>(AddReviewCommentDocument, options);
      }
export type AddReviewCommentMutationHookResult = ReturnType<typeof useAddReviewCommentMutation>;
export type AddReviewCommentMutationResult = Apollo.MutationResult<AddReviewCommentMutation>;
export type AddReviewCommentMutationOptions = Apollo.BaseMutationOptions<AddReviewCommentMutation, AddReviewCommentMutationVariables>;
export const AddReviewCommentDataDocument = gql`
    query addReviewCommentData($reviewId: Int!) {
  review(id: $reviewId) {
    id
    content
    rating
    restaurant {
      id
      title
    }
  }
}
    `;

/**
 * __useAddReviewCommentDataQuery__
 *
 * To run a query within a React component, call `useAddReviewCommentDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useAddReviewCommentDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAddReviewCommentDataQuery({
 *   variables: {
 *      reviewId: // value for 'reviewId'
 *   },
 * });
 */
export function useAddReviewCommentDataQuery(baseOptions: Apollo.QueryHookOptions<AddReviewCommentDataQuery, AddReviewCommentDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AddReviewCommentDataQuery, AddReviewCommentDataQueryVariables>(AddReviewCommentDataDocument, options);
      }
export function useAddReviewCommentDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AddReviewCommentDataQuery, AddReviewCommentDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AddReviewCommentDataQuery, AddReviewCommentDataQueryVariables>(AddReviewCommentDataDocument, options);
        }
export type AddReviewCommentDataQueryHookResult = ReturnType<typeof useAddReviewCommentDataQuery>;
export type AddReviewCommentDataLazyQueryHookResult = ReturnType<typeof useAddReviewCommentDataLazyQuery>;
export type AddReviewCommentDataQueryResult = Apollo.QueryResult<AddReviewCommentDataQuery, AddReviewCommentDataQueryVariables>;
export const EditRestaurantDocument = gql`
    mutation editRestaurant($description: String!, $id: Int!, $imageUrl: String!, $location: String!, $title: String!, $userId: Int!) {
  editRestaurant(
    input: {description: $description, id: $id, imageUrl: $imageUrl, location: $location, title: $title, userId: $userId}
  ) {
    id
  }
}
    `;
export type EditRestaurantMutationFn = Apollo.MutationFunction<EditRestaurantMutation, EditRestaurantMutationVariables>;

/**
 * __useEditRestaurantMutation__
 *
 * To run a mutation, you first call `useEditRestaurantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditRestaurantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editRestaurantMutation, { data, loading, error }] = useEditRestaurantMutation({
 *   variables: {
 *      description: // value for 'description'
 *      id: // value for 'id'
 *      imageUrl: // value for 'imageUrl'
 *      location: // value for 'location'
 *      title: // value for 'title'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useEditRestaurantMutation(baseOptions?: Apollo.MutationHookOptions<EditRestaurantMutation, EditRestaurantMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditRestaurantMutation, EditRestaurantMutationVariables>(EditRestaurantDocument, options);
      }
export type EditRestaurantMutationHookResult = ReturnType<typeof useEditRestaurantMutation>;
export type EditRestaurantMutationResult = Apollo.MutationResult<EditRestaurantMutation>;
export type EditRestaurantMutationOptions = Apollo.BaseMutationOptions<EditRestaurantMutation, EditRestaurantMutationVariables>;
export const EditReviewPageDocument = gql`
    query editReviewPage($id: Int!) {
  review(id: $id) {
    id
    content
    rating
    restaurant {
      id
      title
    }
  }
}
    `;

/**
 * __useEditReviewPageQuery__
 *
 * To run a query within a React component, call `useEditReviewPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useEditReviewPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEditReviewPageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useEditReviewPageQuery(baseOptions: Apollo.QueryHookOptions<EditReviewPageQuery, EditReviewPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EditReviewPageQuery, EditReviewPageQueryVariables>(EditReviewPageDocument, options);
      }
export function useEditReviewPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EditReviewPageQuery, EditReviewPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EditReviewPageQuery, EditReviewPageQueryVariables>(EditReviewPageDocument, options);
        }
export type EditReviewPageQueryHookResult = ReturnType<typeof useEditReviewPageQuery>;
export type EditReviewPageLazyQueryHookResult = ReturnType<typeof useEditReviewPageLazyQuery>;
export type EditReviewPageQueryResult = Apollo.QueryResult<EditReviewPageQuery, EditReviewPageQueryVariables>;
export const EditReviewCommentDocument = gql`
    mutation editReviewComment($id: Int!, $reviewId: Int!, $comment: String!) {
  editReviewComment(input: {id: $id, comment: $comment, reviewId: $reviewId}) {
    restaurantId
  }
}
    `;
export type EditReviewCommentMutationFn = Apollo.MutationFunction<EditReviewCommentMutation, EditReviewCommentMutationVariables>;

/**
 * __useEditReviewCommentMutation__
 *
 * To run a mutation, you first call `useEditReviewCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditReviewCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editReviewCommentMutation, { data, loading, error }] = useEditReviewCommentMutation({
 *   variables: {
 *      id: // value for 'id'
 *      reviewId: // value for 'reviewId'
 *      comment: // value for 'comment'
 *   },
 * });
 */
export function useEditReviewCommentMutation(baseOptions?: Apollo.MutationHookOptions<EditReviewCommentMutation, EditReviewCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditReviewCommentMutation, EditReviewCommentMutationVariables>(EditReviewCommentDocument, options);
      }
export type EditReviewCommentMutationHookResult = ReturnType<typeof useEditReviewCommentMutation>;
export type EditReviewCommentMutationResult = Apollo.MutationResult<EditReviewCommentMutation>;
export type EditReviewCommentMutationOptions = Apollo.BaseMutationOptions<EditReviewCommentMutation, EditReviewCommentMutationVariables>;
export const EditReviewCommentDataDocument = gql`
    query editReviewCommentData($reviewCommentId: Int!) {
  reviewComment(id: $reviewCommentId) {
    comment
    restaurantId
    review {
      id
      content
      rating
      restaurant {
        id
        title
      }
    }
  }
}
    `;

/**
 * __useEditReviewCommentDataQuery__
 *
 * To run a query within a React component, call `useEditReviewCommentDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useEditReviewCommentDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEditReviewCommentDataQuery({
 *   variables: {
 *      reviewCommentId: // value for 'reviewCommentId'
 *   },
 * });
 */
export function useEditReviewCommentDataQuery(baseOptions: Apollo.QueryHookOptions<EditReviewCommentDataQuery, EditReviewCommentDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EditReviewCommentDataQuery, EditReviewCommentDataQueryVariables>(EditReviewCommentDataDocument, options);
      }
export function useEditReviewCommentDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EditReviewCommentDataQuery, EditReviewCommentDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EditReviewCommentDataQuery, EditReviewCommentDataQueryVariables>(EditReviewCommentDataDocument, options);
        }
export type EditReviewCommentDataQueryHookResult = ReturnType<typeof useEditReviewCommentDataQuery>;
export type EditReviewCommentDataLazyQueryHookResult = ReturnType<typeof useEditReviewCommentDataLazyQuery>;
export type EditReviewCommentDataQueryResult = Apollo.QueryResult<EditReviewCommentDataQuery, EditReviewCommentDataQueryVariables>;
export const OwnerHomeDocument = gql`
    query ownerHome {
  getUnansweredReviewsForOwner(after: 0, limit: 5) {
    totalCount
    edges {
      node {
        ...review
      }
    }
  }
  restaurants(after: 0, limit: 5) {
    totalCount
    edges {
      node {
        ...restaurant
      }
    }
  }
}
    ${ReviewFragmentDoc}
${RestaurantFragmentDoc}`;

/**
 * __useOwnerHomeQuery__
 *
 * To run a query within a React component, call `useOwnerHomeQuery` and pass it any options that fit your needs.
 * When your component renders, `useOwnerHomeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOwnerHomeQuery({
 *   variables: {
 *   },
 * });
 */
export function useOwnerHomeQuery(baseOptions?: Apollo.QueryHookOptions<OwnerHomeQuery, OwnerHomeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OwnerHomeQuery, OwnerHomeQueryVariables>(OwnerHomeDocument, options);
      }
export function useOwnerHomeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OwnerHomeQuery, OwnerHomeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OwnerHomeQuery, OwnerHomeQueryVariables>(OwnerHomeDocument, options);
        }
export type OwnerHomeQueryHookResult = ReturnType<typeof useOwnerHomeQuery>;
export type OwnerHomeLazyQueryHookResult = ReturnType<typeof useOwnerHomeLazyQuery>;
export type OwnerHomeQueryResult = Apollo.QueryResult<OwnerHomeQuery, OwnerHomeQueryVariables>;
export const RestaurantDetailsDocument = gql`
    query restaurantDetails($id: Int!) {
  restaurant(id: $id) {
    ...restaurant
    canAddReview
  }
  currentUser {
    role
  }
}
    ${RestaurantFragmentDoc}`;

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
export function useRestaurantDetailsQuery(baseOptions: Apollo.QueryHookOptions<RestaurantDetailsQuery, RestaurantDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RestaurantDetailsQuery, RestaurantDetailsQueryVariables>(RestaurantDetailsDocument, options);
      }
export function useRestaurantDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RestaurantDetailsQuery, RestaurantDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RestaurantDetailsQuery, RestaurantDetailsQueryVariables>(RestaurantDetailsDocument, options);
        }
export type RestaurantDetailsQueryHookResult = ReturnType<typeof useRestaurantDetailsQuery>;
export type RestaurantDetailsLazyQueryHookResult = ReturnType<typeof useRestaurantDetailsLazyQuery>;
export type RestaurantDetailsQueryResult = Apollo.QueryResult<RestaurantDetailsQuery, RestaurantDetailsQueryVariables>;
export const RestaurantsDocument = gql`
    query restaurants($after: Int, $limit: Int!, $ratingsMinimum: Int) {
  restaurants(after: $after, limit: $limit, ratingsMinimum: $ratingsMinimum) {
    totalCount
    edges {
      node {
        ...restaurant
      }
    }
  }
}
    ${RestaurantFragmentDoc}`;

/**
 * __useRestaurantsQuery__
 *
 * To run a query within a React component, call `useRestaurantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRestaurantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRestaurantsQuery({
 *   variables: {
 *      after: // value for 'after'
 *      limit: // value for 'limit'
 *      ratingsMinimum: // value for 'ratingsMinimum'
 *   },
 * });
 */
export function useRestaurantsQuery(baseOptions: Apollo.QueryHookOptions<RestaurantsQuery, RestaurantsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RestaurantsQuery, RestaurantsQueryVariables>(RestaurantsDocument, options);
      }
export function useRestaurantsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RestaurantsQuery, RestaurantsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RestaurantsQuery, RestaurantsQueryVariables>(RestaurantsDocument, options);
        }
export type RestaurantsQueryHookResult = ReturnType<typeof useRestaurantsQuery>;
export type RestaurantsLazyQueryHookResult = ReturnType<typeof useRestaurantsLazyQuery>;
export type RestaurantsQueryResult = Apollo.QueryResult<RestaurantsQuery, RestaurantsQueryVariables>;
export const UnansweredReviewsDocument = gql`
    query unansweredReviews($after: Int, $limit: Int!) {
  getUnansweredReviewsForOwner(after: $after, limit: $limit) {
    totalCount
    edges {
      node {
        ...review
      }
    }
  }
}
    ${ReviewFragmentDoc}`;

/**
 * __useUnansweredReviewsQuery__
 *
 * To run a query within a React component, call `useUnansweredReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUnansweredReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUnansweredReviewsQuery({
 *   variables: {
 *      after: // value for 'after'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useUnansweredReviewsQuery(baseOptions: Apollo.QueryHookOptions<UnansweredReviewsQuery, UnansweredReviewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UnansweredReviewsQuery, UnansweredReviewsQueryVariables>(UnansweredReviewsDocument, options);
      }
export function useUnansweredReviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UnansweredReviewsQuery, UnansweredReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UnansweredReviewsQuery, UnansweredReviewsQueryVariables>(UnansweredReviewsDocument, options);
        }
export type UnansweredReviewsQueryHookResult = ReturnType<typeof useUnansweredReviewsQuery>;
export type UnansweredReviewsLazyQueryHookResult = ReturnType<typeof useUnansweredReviewsLazyQuery>;
export type UnansweredReviewsQueryResult = Apollo.QueryResult<UnansweredReviewsQuery, UnansweredReviewsQueryVariables>;