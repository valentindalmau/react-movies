import FunctionsABM from "./FunctionsABM"
import FunctionsFromMovie from "./FunctionsFromMovie"
import Theaters from "./Theaters"
import Welcome from "./Welcome"

const routes = [
    { path: "/", component: Welcome, exact: true },
    { path: "/cartelera", component: Theaters, exact: true },
    { path: "/gestionar", component: FunctionsABM, exact: false },
    { path: "/cartelera/funciones/:id(\\d+)", component: FunctionsFromMovie }
]

export default routes