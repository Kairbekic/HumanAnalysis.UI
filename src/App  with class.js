import "./styles/main.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Project from "./pages/Project"
import Contacts from "./pages/Contacts"

import ScrollToTop from "./utils/scrollToTop"
import { Component } from "react"

class App extends Component {
  constructor() {
    super()
    this.state = {
      users: [],
    }
  }

  getUsers = async () => {
    var response = await fetch("api/users", {
      method: "get",
    })

    var responsejson = await response.json()
    this.setState({
      users: responsejson,
    })
  }

  render() {
    const users = this.state.users.map((item, index) => (
      <li key={index}>{item.name}</li>
    ))

    return (
      <div className="App">
        <button onClick={this.getUsers}>Загрузить список пользователей</button>
        <ul>{users}</ul>
      </div>
    )
  }
}

//   return (
//     <div className="App">
//       <Router>
//         <ScrollToTop />
//         <Navbar />
//         <Routes>
//           <Route
//             path="/"
//             element={<Home />}
//           />
//           <Route
//             path="/projects"
//             element={<Projects />}
//           />
//           <Route
//             path="/project/:id"
//             element={<Project />}
//           />
//           <Route
//             path="/contacts"
//             element={<Contacts />}
//           />
//         </Routes>
//         <Footer />
//       </Router>
//     </div>
//   )
// }

export default App
