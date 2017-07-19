import Menu from './ui/Menu'
import ShowErrors from './containers/ShowErrors'
import GoalProgress from './containers/GoalProgress'
import '../stylesheets/index.scss'

export const App = ({children}) => {

    return (
        <div className="app">
            <Menu />
            {/*<ShowErrors />*/}
            {children}
            {/*<GoalProgress />*/}
        </div>
    );
}

export const Whoops404 = ({ location }) =>
    <div className="whoops-404">
        <h1>Whoops, route not found</h1>
        <p>Cannot find content for {location.pathname}</p>
    </div>