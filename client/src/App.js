import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import "./App.css";
import Menu from "./pages/Menu";

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  connectToDevTools: true,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <main>
        <Menu />
      </main>
    </ApolloProvider>
  );
}

export default App;
