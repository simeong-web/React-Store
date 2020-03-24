const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://react-reserve-sg.herokuapp.com"
    : "http://localhost:3000";

export default baseUrl;
