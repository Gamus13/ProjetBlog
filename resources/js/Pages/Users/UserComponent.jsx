import React from 'react'
import Test from './TestComponent';
import HomeComponent from './HomeComponent';
function UserComponent() {
    return (
        <div>
            <Test/>
            <HomeComponent/>
        </div>

    )
}

export default UserComponent
// import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Test from './TestComponent';

// const AppRouter = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/users" component={Test} />
//       </Switch>
//     </Router>
//   );
// };

// export default AppRouter;
