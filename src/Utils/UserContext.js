import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "dummy",
    email: "email@dummy.com",
  },
});

export default UserContext;
