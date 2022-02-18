import { useContext } from 'react';
import AuthContext from "../context/authContext";

export const isAuth = (Component) => {
    const WrapperComponent = (props) => {
        const { user } = useContext(AuthContext);
        return user.email
            ? <Component {...props} />
            :  <h2>you have to login</h2>;
    }
    return WrapperComponent;
}