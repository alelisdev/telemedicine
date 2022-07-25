import jwtDecode from 'jwt-decode';

const decodeToken = token => {
    if (token) {
        return jwtDecode(token);
    } else {
        return false;
    }
};
  
export default decodeToken;