import HomePage from './pages/HomePage'
import UsersListPage from './pages/UsersListPage'
import NotFoundPage from './pages/NotFoundPage'
import App from './App'
import AdminsListPage from './pages/AdminsListPage'

const routes = [
  {
    ...HomePage,
    path: '/',
    exact: true
  },
  {
    ...UsersListPage,
    path: '/users'
  },
  {
    ...AdminsListPage,
    path: '/admins'
  },
  {
    ...NotFoundPage
  }
]

export default [{ ...App, routes }]
