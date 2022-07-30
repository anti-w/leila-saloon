import PropTypes from 'prop-types';
import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUser } from '../services/signUser';
import { api } from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const recoveredUser = localStorage.getItem('user');

    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }

    setLoading(false);
  }, []);

  const login = (email, password) => {
    signUser({ email, password })
      .then((response) => {
        console.log(response);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token', JSON.stringify(response.data.token));
        api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

        setUser(response.data);
        navigate('/meals');
      })
      .catch(({ response }) => {
        alert(response.data.msg);
      });
  };

  const logout = () => {
    alert('Nos vemos depois. :(');
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = null;
    setUser(null);
    navigate('/');
  };
  return (
    <AuthContext.Provider
      value={{
        authenticated: !!user,
        user,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
