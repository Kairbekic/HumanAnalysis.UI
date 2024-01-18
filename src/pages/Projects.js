import { useEffect, useState } from "react"
import Project from "../components/project/Project"
import { projects } from "../helpers/projectsList"

const API_URL = "https://localhost:7184"

const Projects = () => {
  // const [projects, setProjects] = useState([])
  // const [error, setError] = useState("")

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const res = await fetch(`${API_URL}/Project`)
  //       const projects = await res.json()
  //       console.log(projects)
  //       setProjects(projects)
  //     } catch (error) {
  //       setError(error.message)
  //     }
  //   }
  //   fetchData()
  // }, [])

  // console.log(projects)

  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projects.map((project, index) => {
            return (
              <Project
                key={index}
                title={project.title}
                img={project.img}
                index={index}
              />
            )
          })}
        </ul>
      </div>
    </main>
  )
}

export { projects }
export default Projects
