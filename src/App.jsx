import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import Router from './pages/Router';

import { usePrevious } from './hooks';

import './App.css';

const App = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(store => store.auth.isAuthenticated);
  const prevIsAuthenticated = usePrevious(isAuthenticated);

  useEffect(() => {
    if (!prevIsAuthenticated && isAuthenticated) {
      history.replace('/');
    }

    return () => {};
  }, [dispatch, isAuthenticated, prevIsAuthenticated, history]);

  return <Router />;
};

export default App;
