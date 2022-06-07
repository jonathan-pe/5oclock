import { Switch, Route } from 'react-router-dom'
import Home from '../../modules/home/home'
import WhyPage from '../../modules/why/why'
import NotFoundPage from '../../modules/notFound'
import DrinkDetailsPage from '../../modules/drinkDetails/drinkDetails'

const Router = () => {
  return (
    <Switch>
      <Route exact path='/why' component={WhyPage} />
      <Route exact path='/' component={Home} />
      <Route path='/drinks/:drinkId' component={DrinkDetailsPage} />

      <Route path='*' component={NotFoundPage} />
    </Switch>
  )
}

export default Router
