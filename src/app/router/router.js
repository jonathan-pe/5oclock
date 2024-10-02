import { createBrowserRouter } from 'react-router-dom'
import Home from '../../modules/home/home'
import WhyPage from '../../modules/why/why'
import NotFoundPage from '../../modules/notFound'
import DrinkDetailsPage from '../../modules/drinkDetails/drinkDetails'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/why',
    element: <WhyPage />,
  },
  {
    path: '/drinks/:drinkId',
    element: <DrinkDetailsPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

export default Router
