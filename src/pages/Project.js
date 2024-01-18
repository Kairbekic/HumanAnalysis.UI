import { useParams } from "react-router-dom"
// import { projects } from "../helpers/projectsList"
import { projects } from "./Projects"
import { useEffect, useState } from "react"
import { getPosts } from "../api/ProjectsList"

const Project = () => {
  const { id } = useParams()
  const project = projects[id]
  console.log(projects)
  // // const [posts, setPosts] = useState([])

  // useEffect(() => {
  //   getPosts(+id + 1)
  // }, [])
  console.log("id ", id)
  console.log(project)

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img
            src={project.imgBig}
            alt={project.title}
            className="project-details__cover"
          />
          <div className="project-details__desc">
            <p>{project.description}</p>
          </div>

          <div className="project-details__skills">
            <p>Skills: {project.skills}</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Project
