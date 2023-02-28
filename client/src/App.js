import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import "./App.css";
import Navbar from "./components/Navbar";
import Menu from "./pages/Menu";
import Cart from "./components/Cart";
import User from "./pages/User";
import { StoreProvider } from "./utils/GlobalState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  connectToDevTools: true,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <StoreProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/user" element={<User />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </StoreProvider>
    </ApolloProvider>
  );
}

export default App;
