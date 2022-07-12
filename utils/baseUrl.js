const baseUrl = process.env.NODE_ENV === "production" 
? 'https://telecarelife.com' 
: 'http://localhost:3000';

export default baseUrl;