const baseUrl = process.env.NODE_ENV === "production" 
? 'http://178.128.154.101:5000'
: 'http://localhost:5000';

export default baseUrl;