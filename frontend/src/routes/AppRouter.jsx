import { Routes } from "react-router-dom"
import renderRouter from "../utils/functions/renderRouter"
import configRouter from "./configRouter"


const AppRouter = () => {
  return <Routes>{renderRouter(configRouter)}</Routes>
}

export default AppRouter
