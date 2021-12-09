import * as authService from '../services/authService';
import { useHistory } from "react-router-dom";


const Logout = () => {
  const history = useHistory();

    authService.logout().then(

      history.push('/')
    )

    return null
}

export default Logout;