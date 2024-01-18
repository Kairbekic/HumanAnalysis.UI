import { useEffect, useState } from "react"
import Header from "../components/header/Header"
import axios from "axios"

const Home = () => {
  const API_URL = "api/users"

  const [articles, setArticles] = useState([])

  useEffect(() => {
    axios.get(API_URL).then((data) => {
      setArticles(data.data)
    })
  }, [])

  const getUsers = () => {
    console.log(articles)
    articles.map((article) => {
      return <p>{article.name}</p>
    })
  }

  return (
    <>
      <Header />
      <button onClick={getUsers}>Загрузить список пользователей</button>
      {/* <main className="section">
        <div className="container"> */}
      {/* <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>JavaScript, TypeScript, ReactJS, Angular, HTML, CSS, NPM</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>ASP.NET, C#, MS SQL Server, PostgreSQL</p>
            </li>
          </ul> */}
      {/* </div>
      </main> */}
    </>
  )
}

export default Home
