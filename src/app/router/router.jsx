import { Switch, Route } from 'react-router-dom'
import Home from '../../modules/home/home'
import WhyPage from '../../modules/why/why'
import NotFoundPage from '../../modules/notFound'

const EventrRouter = () => {
  return (
    <Switch>
      <Route exact path='/why' component={WhyPage} />
      <Route exact path='/' component={Home} />

      <Route path='*' component={NotFoundPage} />
    </Switch>
  )
}

export default EventrRouter
