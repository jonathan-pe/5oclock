import { Switch, Route } from 'react-router-dom'
import Home from '../../modules/home/home'

const EventrRouter = () => {
  return (
    <Switch>
      <Route path='/' component={Home} />
    </Switch>
  )
}

export default EventrRouter
