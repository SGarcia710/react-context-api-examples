import { createContext } from "react";

// const initialContext = {
//   users: ["Sebastián García", "Jonatan Ordoñez"],
//   title: "Site Title"
// };

const AppContext = createContext({});

export const AppProvider = AppContext.Provider;
export const AppConsumer = AppContext.Consumer;
export default AppContext;
