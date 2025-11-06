// src/contexts/AuthContext.js
import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Initial state
 export const initialState = {
  token: null,
  userRole: null,
  userEmail: null,
  userId: null,
  isAuthenticated: false,
  isLoading: true
};

// Action types
 export const AuthActionTypes = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT: 'LOGOUT',
  SET_LOADING: 'SET_LOADING',
  UPDATE_USER: 'UPDATE_USER'
};

// Reducer
 export const authReducer = (state, action) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        userRole: action.payload.userRole,
        userEmail: action.payload.userEmail,
        userId: action.payload.userId,
        isAuthenticated: true,
        isLoading: false
      };
    
    case AuthActionTypes.LOGOUT:
      return {
        ...initialState,
        isLoading: false
      };
    
    case AuthActionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    
    case AuthActionTypes.UPDATE_USER:
      return {
        ...state,
        ...action.payload
      };
    
    default:
      return state;
  }
};

