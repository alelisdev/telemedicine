const baseUrl = process.env.NODE_ENV === "production" 
? 'http://104.248.237.230:5000/' 
: 'http://localhost:5000';

export default baseUrl;