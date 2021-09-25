import React, { lazy } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
const CreateTask = lazy(() => import('./../pages/create-task'));
const TaskList = lazy(() => import('./../pages/list-tasks'));
const DeleteTasks = lazy(() => import('./../pages/bulk-delete'));

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path='/list-tasks' component={TaskList} />
                <Route path='/create-task' component={CreateTask} />
                <Route path='/bulk-delete' component={DeleteTasks} />
                <Redirect from="/" to="/list-tasks" />
            </Switch>
        </Router>
    );
}

export default Routes;
