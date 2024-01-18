import "./styles/main.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Project from "./pages/Project"
import Contacts from "./pages/Contacts"

import ScrollToTop from "./utils/scrollToTop"
import { useEffect, useState } from "react"
// import axios from "axios"

// const API_URL = "api/users"

// function App() {
//   const [articles, setArticles] = useState([])

//   useEffect(() => {
//     axios.get(API_URL).then((data) => {
//       setArticles(data.data)
//     })
//   }, [])

//   const getUsers = () => {
//     articles.map((article) => {
//       return <p>{article.name}</p>
//     })
//   }

//   return (
//     <div className="App">
//       <button onClick={getUsers}>Загрузить список пользователей</button>
//     </div>
//   )
// }

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/projects"
            element={<Projects />}
          />
          <Route
            path="/project/:id"
            element={<Project />}
          />
          <Route
            path="/contacts"
            element={<Contacts />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
