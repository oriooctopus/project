import React, { StrictMode, useContext, Suspense } from 'react';

import { Router, Redirect } from '@reach/router';
import { AuthContext } from './AuthContext';

import { Login } from './pages/Login';
import { Registration } from './pages/Registration';
import { Logout } from './pages/Logout';
import { Page404 } from './pages/Page404';

import { NavBar } from './components/organisms/NavBar/index.tsx';
import { Spinner } from './legacyComponents/Spinner';

import AddRestaurant from 'src/pages/AddRestaurant/index.tsx';
import AddReviewComment from 'src/pages/AddReviewComment/index.tsx';
import EditReviewComment from 'src/pages/EditReviewComment/index.tsx';
import EditRestaurant from 'src/pages/EditRestaurant/index.tsx';
import RestaurantDetails from 'src/pages/RestaurantDetails/index.tsx';
import AddReview from 'src/pages/AddReview/index.tsx';
import Restaurants from 'pages/Restaurants/index.tsx';
import UnansweredReviews from 'pages/UnansweredReviews/index.tsx';
import EditReview from 'pages/EditReview/index.tsx';
import OwnerHome from 'pages/OwnerHome/index.tsx';
import EditUser from 'pages/EditUser/index.tsx';
import Users from 'pages/Users/index.tsx';

import 'styles/main.scss';

const adminRoutes = [
  <EditReview path="/review/edit/:reviewId" />,
  <AddReview path="/review/add/:restaurantId" />,
  <EditReviewComment path="/review-comment/edit/:reviewCommentId" />,
  <EditRestaurant path="/restaurant/edit/:restaurantId" />,
  <RestaurantDetails path="/restaurant/:restaurantId" />,
  <Users path="/users" />,
  <EditUser path="/user/edit/:userId" />,
  <Restaurants path="/" />,
];

const ownerRoutes = [
  <AddReviewComment path="/review-comment/add/:reviewId" />,
  <EditReviewComment path="/review-comment/edit/:reviewCommentId" />,
  <AddRestaurant path="/restaurant/add" />,
  <EditRestaurant path="/restaurant/edit/:restaurantId" />,
  <RestaurantDetails path="/restaurant/:restaurantId" />,
  <UnansweredReviews path="/unanswered-reviews" />,
  <UnansweredReviews path="/unanswered-reviews/:pageNumber" />,
  <OwnerHome path="/" />,
];

const customerRoutes = [
  <AddReview path="/review/add/:restaurantId" />,
  <EditReview path="/review/edit/:reviewId" />,
  <RestaurantDetails path="/restaurant/:restaurantId" />,
  <Restaurants path="/" />,
];

const authenticatedRoutes = [
  <Redirect from="/login" to="/" noThrow />,
  <Redirect from="/register" to="/" noThrow />,
];

const unauthenticatedRoutes = [
  <Login path="/login" />,
  <Registration path="/register" />,
  <Redirect from="/" to="/login" noThrow />,
  <Redirect from="/logout" to="/login" noThrow />,
];

export const App = () => {
  const {
    isAuth,
    userData: { role },
  } = useContext(AuthContext);

  return (
    <StrictMode>
      <div>
        <Suspense fallback={<Spinner />}>
          <NavBar />
          <main className="pb-4">
            <Router>
              <Page404 default />
              {!isAuth && unauthenticatedRoutes}
              {isAuth && authenticatedRoutes}
              {role === 'admin' && adminRoutes}
              {role === 'owner' && ownerRoutes}
              {role === 'user' && customerRoutes}
              <Logout path="/logout" />
            </Router>
          </main>
        </Suspense>
      </div>
    </StrictMode>
  );
};
