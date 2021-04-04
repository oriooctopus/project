import React, { StrictMode, useContext, Suspense } from 'react';

import { Router, Redirect } from '@reach/router';

import { AuthContext } from './AuthContext';

import { Login } from './pages/Login';
import { Registration } from './pages/Registration';
import { Logout } from './pages/Logout';
import { Page404 } from './pages/Page404';

import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Spinner } from './components/Spinner';

import RestaurantDetails from 'src/containers/GetRestaurantDetails';
import ReviewRestaurant from 'src/pages/ReviewRestaurant';
import Restaurants from 'pages/Restaurants';
import EditReview from 'pages/EditReview';

import 'styles/main.scss';

const adminRoutes = [<EditReview path="/review/edit/:reviewId" />];

const Home = React.lazy(() => import('./pages/Home'));

export const App = () => {
  const { isAuth } = useContext(AuthContext);
  const { userData } = useContext(AuthContext);
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
                <Home path="/" />

                {
                  // If is not authenticated...
                }
                {!isAuth && <Login path="/login" />}
                {!isAuth && <Registration path="/register" />}
                {!isAuth && (
                  <Redirect
                    from="/user-administration"
                    to="/login"
                    noThrow
                  />
                )}
                {!isAuth && (
                  <Redirect from="/logout" to="/login" noThrow />
                )}

                {
                  // If it's authenticated user...
                }
                {isAuth && <Redirect from="/login" to="/" noThrow />}
                {isAuth && (
                  <Redirect from="/register" to="/" noThrow />
                )}

                {
                  // If it's authenticated user but don't have administrator role...
                }
                {isAuth && !userData.isAdmin && (
                  <Redirect
                    from="/user-administration"
                    to="/"
                    noThrow
                  />
                )}

                {/* {userData.isAdmin && adminRoutes} */}
                {adminRoutes}

                <ReviewRestaurant path="/review/add/:restaurantId" />
                <Restaurants path="/restaurants" />

                <RestaurantDetails path="/restaurant/:restaurantId" />
                <Logout path="/logout" />
              </Router>
            </main>
            <div className="row pb-5"></div>
            <Footer />
          </Suspense>
        </div>
      </div>
    </StrictMode>
  );
};
