import P from 'prop-types';

import { useContext } from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import {
  AuthContext,
  AuthProvider,
} from './context/authContext';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { User } from './pages/User';
import { GlobalStyles } from './styles/global-styles';

import { darkTheme, lightTheme } from './styles/theme';
import { useDarkMode } from './styles/useDarkMode';

export const AppRoutes = () => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode =
    theme === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/login"
              element={<Login />}
            />
            <Route
              exact
              path="/register"
              element={<Register />}
            />
            <Route
              exact
              path="/user"
              element={
                <Private>
                  <User />
                </Private>
              }
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export const Private = ({ children }) => {
  const { authenticated, loading } =
    useContext(AuthContext);

  if (loading) {
    return <h1>Carregando...</h1>;
  }

  if (!authenticated) {
    return <Navigate to="/" />;
  }

  return children;
};
Private.propTypes = {
  children: P.node.isRequired,
};
