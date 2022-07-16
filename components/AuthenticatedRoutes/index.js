import React from "react";

const authenticatedRoute = (Component = null, options = {}) => {
    class AuthenticatedRoute extends React.Component {
      state = {
        loading: true,
      };
  
      render() {
        const { loading } = this.state;
  
        if (loading) {
          return <div />;
        }
  
        return <Component {...this.props} />;
      }
    }
  
    return AuthenticatedRoute;
};
  
export default authenticatedRoute;