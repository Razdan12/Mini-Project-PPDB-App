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
import PortfolioAdmin from "./admin/page/portfolio/PortfolioAdmin";
import ServiceAdmin from "./admin/page/service/ServiceAdmin";
import ResumeAdmin from "./admin/page/resume/ResumeAdmin";
import Message from "./admin/page/Message";
import AddPortfolio from "./admin/page/portfolio/AddPortfolio";
import EditPortfolio from "./admin/page/portfolio/EditPortfolio";
import EditEducation from "./admin/page/resume/EditEducation";
import AddEducation from "./admin/page/resume/AddEducation";
import EditExperience from "./admin/page/resume/EditExperience";
import AddExperience from "./admin/page/resume/AddExperience";
import AddSkill from "./admin/page/resume/AddSkill";
import Editskill from "./admin/page/resume/EditSkill";
import EditService from "./admin/page/service/EditService";
import AddService from "./admin/page/service/AddService";

const errorLink = onError(({graphQLErrors}) => {
  if (graphQLErrors){
    graphQLErrors?.map(({message}) => {
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
          <Route path="/message" element={<Message />} />
          <Route path="/add-portofolio" element={<AddPortfolio />} />
          <Route path="/edit-portofolio" element={<EditPortfolio />} />
          <Route path="/edit-education" element={<EditEducation />} />
          <Route path="/add-education" element={<AddEducation />} />
          <Route path="/edit-experience" element={<EditExperience />} />
          <Route path="/add-experience" element={<AddExperience />} />
          <Route path="/add-skill" element={<AddSkill />} />
          <Route path="/edit-skill" element={<Editskill />} />
          <Route path="/edit-service" element={<EditService />} />
          <Route path="/add-service" element={<AddService />} />
          
        </Routes>
      </BrowserRouter>


    </div>
    </ApolloProvider>
  );
}

export default App;
