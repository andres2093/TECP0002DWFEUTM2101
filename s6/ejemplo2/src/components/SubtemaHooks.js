import { useParams } from "react-router-dom"

const SubtemaHooks = () => {
  const { subtema } = useParams()
  return (
    <p>
      { subtema }
    </p>
  )
}

export default SubtemaHooks