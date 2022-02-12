import { Route, Redirect } from 'react-router-dom';


export const PublicRoute = ({ 
    isAutenticated,
    component: Component,
    ...rest
}) => {

    return(
        <Route { ... rest }
            component={ (props) => (
                ( isAutenticated )
                    ? ( <Redirect to='/'/>)
                    : ( <Component { ...props }/> )

            )}
        />
    )
}
