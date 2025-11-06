import { createContext, useContext, useEffect, useReducer } from "react";
import { AuthActionTypes, authReducer, initialState } from "./auth.js"

// Create context
export const AuthContext = createContext();

// Auth Provider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Initialize auth state from localStorage on app start
  useEffect(() => {
    const initializeAuth = () => {
      try {
        const token = localStorage.getItem('authToken');
        const userRole = localStorage.getItem('userRole');
        const userEmail = localStorage.getItem('userEmail');
        const userId = localStorage.getItem('userId');

        if (token && userRole && userEmail) {
          dispatch({
            type: AuthActionTypes.LOGIN_SUCCESS,
            payload: {
              token,
              userRole,
              userEmail,
              userId
            }
          });
        } else {
          dispatch({ type: AuthActionTypes.SET_LOADING, payload: false });
        }
      } catch (error) {
        console.error('Error initializing auth:', error);
        dispatch({ type: AuthActionTypes.SET_LOADING, payload: false });
      }
    };

    initializeAuth();
  }, []);

  // Login function
  const login = (userData) => {
    const { token, role, email, userId } = userData;
    
    // Save to localStorage
    localStorage.setItem('authToken', token);
    localStorage.setItem('userRole', role);
    localStorage.setItem('userEmail', email);
    if (userId) {
      localStorage.setItem('userId', userId);
    }
    localStorage.setItem('loginTime', new Date().toISOString());

    // Update context state
    dispatch({
      type: AuthActionTypes.LOGIN_SUCCESS,
      payload: {
        token,
        userRole: role,
        userEmail: email,
        userId
      }
    });
  };

  // Logout function
  const logout = () => {
    // Clear localStorage
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userId');
    localStorage.removeItem('loginTime');

    // Update context state
    dispatch({ type: AuthActionTypes.LOGOUT });
  };

  
  // Update user function
  const updateUser = (userData) => {
    if (userData.role) {
      localStorage.setItem('userRole', userData.role);
    }
    if (userData.email) {
      localStorage.setItem('userEmail', userData.email);
    }

    dispatch({
      type: AuthActionTypes.UPDATE_USER,
      payload: userData
    });
  };

  // Check if user has specific role
  const hasRole = (requiredRole) => {
    return state.userRole === requiredRole;
  };

  // Check if user has any of the required roles
  const hasAnyRole = (requiredRoles) => {
    return requiredRoles.includes(state.userRole);
  };

  const value = {
    // State
    ...state,
    
    // Actions
    login,
    logout,
    updateUser,
    hasRole,
    hasAnyRole
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};