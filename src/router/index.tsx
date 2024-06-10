import {createBrowserRouter} from 'react-router-dom'

import App from '../App'
import Home from '../views/Home/Home'
import NotFound from '../views/NotFound/NotFound'
import History from '../views/History/History'
import Account from '../views/Account/Account'

enum Route {
    ROOT = '/',
    HOME = '/home',
    HISTORY = '/history',
    ACCOUNT = '/account',
    NOTFOUND = '*',
}

const publicRoutes = [
    {
        path: Route.HOME,
        element: <Home />,
    },
    {
        path: Route.HISTORY,
        element: <History />,
    },
    {
        path: Route.ACCOUNT,
        element: <Account />,
    },
    {
        path: Route.NOTFOUND,
        element: <NotFound />,
    },
]

const routes = [
    {
        path: Route.ROOT,
        element: <App />,
        children: [...publicRoutes],
    },
]

const router = createBrowserRouter(routes)

export {router, Route}
