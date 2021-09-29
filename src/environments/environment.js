const Base_url_server = () => {
    let BaseURL = "http://localhost:5000";
  
    if (process.env.REACT_APP_SERVER === "production") {
      return (BaseURL = "deployed_link");
    } else {
      return BaseURL;
    }
  };
  
  export const environment = {
    BaseURL: Base_url_server(),
  };