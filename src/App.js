import React, {useEffect} from 'react';
import './App.css';
import ParameterDialog from "./get-initialize-parameters/setInitializeParameters.component";
import ShowSystemParameters from "./real-time-pvs/showSystemParameters";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import PvLogsTable, {ParametersTab, PressureTab, ThermometerTab} from "./pv-logs/pvLogs.component";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    }
}));

const MyDrawer = (props) => {
    const onClose = () => props.setOpen(false)

    return  (
        <Drawer anchor={'left'} open={props.open} onClose={onClose}>
            <List>
                <ListItem>
                    <Link to={'/set-parameters'} >
                            <span>
                                set parameters
                            </span>
                    </Link>
                </ListItem>

                <ListItem>
                    <Link to={'/show-system-parameters'} >
                            <span>
                                show system parameters
                            </span>
                    </Link>
                </ListItem>


                <ListItem>
                    <Link to={'/parameters-logs'} >
                            <span>
                                parameters logs
                            </span>
                    </Link>
                </ListItem>

                <ListItem>
                    <Link to={'/pressures-logs'} >
                            <span>
                                pressures logs
                            </span>
                    </Link>
                </ListItem>

                <ListItem>
                    <Link to={'/thermometer-logs'} >
                            <span>
                                thermometer logs
                            </span>
                    </Link>
                </ListItem>
            </List>
        </Drawer>
    )
}

const App = () => {

    const [openDrawer, setOpenDrawer] = React.useState(false);
    const classes = useStyles();

    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => setOpenDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>


            <Router>

                <Switch>
                    <Route path="/set-parameters">
                        <ParameterDialog />
                    </Route>

                    <Route path="/show-system-parameters">
                        <ShowSystemParameters />
                    </Route>

                    <Route path="/parameters-logs">
                        <PvLogsTable component={ParametersTab}/>
                    </Route>

                    <Route path="/pressures-logs">
                        <PvLogsTable component={PressureTab}/>
                    </Route>

                    <Route path="/thermometer-logs">
                        <PvLogsTable component={ThermometerTab}/>
                    </Route>
                </Switch>

                <MyDrawer open={openDrawer} setOpen={setOpenDrawer}/>
            </Router>

        </div>
    );
}

export default App;
