import React from "react"
import ReactDOM from "react-dom"
import { ApolloProvider } from "react-apollo"
import client from "./graphql"
import App from "./components/App"

const Index = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

ReactDOM.render(
  <Index />,
  document.getElementById("root")
)
