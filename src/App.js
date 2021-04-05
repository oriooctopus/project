import React, { StrictMode, useContext, Suspense } from 'react';

import { Router, Redirect } from '@reach/router';
import { AuthContext } from './AuthContext';

import { Login } from './pages/Login';
import { Registration } from './pages/Registration';
import { Logout } from './pages/Logout';
import { Page404 } from './pages/Page404';

import { NavBar } from './legacyComponents/NavBar';
import { Spinner } from './legacyComponents/Spinner';

import AddRestaurant from 'src/pages/AddRestaurant';
import AddReviewComment from 'src/pages/AddReviewComment/index.tsx';
import EditReviewComment from 'src/pages/EditReviewComment/index.tsx';
import EditRestaurant from 'src/pages/EditRestaurant';
import RestaurantDetails from 'src/pages/RestaurantDetails/index.tsx';
import AddReview from 'src/pages/AddReview';
import Restaurants from 'pages/Restaurants/index.tsx';
import UnansweredReviews from 'pages/UnansweredReviews/index.tsx';
import EditReview from 'pages/EditReview';
import OwnerHome from 'pages/OwnerHome/index.tsx';
import Home from 'pages/Home';

import 'styles/main.scss';

const adminRoutes = [
  <EditReview path="/review/edit/:reviewId" />,
  <AddReview path="/review/add/:restaurantId" />,
  <EditReviewComment path="/review-comment/edit/:reviewCommentId" />,
  <EditRestaurant path="/restaurant/edit/:restaurantId" />,
  <Restaurants path="/restaurants" />,
  <RestaurantDetails path="/restaurant/:restaurantId" />,
  <Home path="/" />,
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
  <Restaurants path="/restaurants" />,
  <RestaurantDetails path="/restaurant/:restaurantId" />,
  <Home path="/" />,
];

export const App = () => {
  const { isAuth, userData } = useContext(AuthContext);
  console.log('user data', userData);

  return (
    <StrictMode>
      <div>
        <div className="">
          <Suspense fallback={<Spinner />}>
            <NavBar />
            <main className="pb-4">
              <Router>
                <Page404 default />

                {!isAuth && <Login path="/login" />}
                {!isAuth && <Registration path="/register" />}

                {!isAuth && (
                  <Redirect from="/logout" to="/login" noThrow />
                )}
                {isAuth && <Redirect from="/login" to="/" noThrow />}
                {isAuth && (
                  <Redirect from="/register" to="/" noThrow />
                )}

                {userData.role === 'admin' && adminRoutes}
                {userData.role === 'owner' && ownerRoutes}
                {userData.role === 'user' && customerRoutes}

                <Logout path="/logout" />
              </Router>
            </main>
          </Suspense>
        </div>
      </div>
    </StrictMode>
  );
};
