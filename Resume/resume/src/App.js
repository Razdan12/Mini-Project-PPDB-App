import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,

} from "@apollo/client"
import {onError} from '@apollo/client/link/error'
import Home from "./page/Home";
import Login from "./component/Form/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeAdmin from "./admin/HomeAdmin";
import AboutAdmin from "./admin/page/AboutAdmin";
import ProfileAdmin from "./admin/page/ProfileAdmin";
import PortfolioAdmin from "./admin/page/PortfolioAdmin";
import ServiceAdmin from "./admin/page/ServiceAdmin";
import ResumeAdmin from "./admin/page/ResumeAdmin";

const errorLink = onError(({graphQLErrors}) => {
  if (graphQLErrors){
    graphQLErrors.map(({message}) => {
      alert(`Graph Ql Eror ${message}`)
    })
  }
})


const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri:'https://quick-raccoon-82.hasura.app/v1/graphql',
  headers:{
    'x-hasura-admin-secret' : 'VnVP6VG1OT1suqWkF7so2T0mhFtD6Ko5DJOZu83ITu3QU5vtqKEpcNOjKiJD1ggB'
  }
  
});


function App() {

  return (
    <ApolloProvider client={client}>
    <div>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<HomeAdmin />} />
          <Route path="/about" element={<AboutAdmin />} />
          <Route path="/profile" element={<ProfileAdmin />} />
          <Route path="/portfolio" element={<PortfolioAdmin />} />
          <Route path="/service" element={<ServiceAdmin />} />
          <Route path="/resume" element={<ResumeAdmin />} />
          
        </Routes>
      </BrowserRouter>


    </div>
    </ApolloProvider>
  );
}

export default App;
