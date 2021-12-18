import * as authService from '../services/authService';
import { useHistory } from "react-router-dom";
import AuthContext from '../context/authContext';
import { useContext, useEffect } from 'react';


const Logout = () => {
  const history = useHistory();
  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    authService.logout(user.accessToken)
      .then(() => {
        logout();
        history.push('/')
      })
  })

  return null
}

export default Logout;