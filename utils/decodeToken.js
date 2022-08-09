import jwt_decode from 'jwt-decode';

const decodeToken = token => {
    if (token) {
        return jwt_decode(token);
    } else {
        return false;
    }
};
  
export default decodeToken;