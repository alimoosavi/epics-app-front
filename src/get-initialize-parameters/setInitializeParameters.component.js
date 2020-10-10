import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {blue} from '@material-ui/core/colors';
import {InputLabel} from '@material-ui/core';
import {getParametersApi, setParametersApi} from "./setParameters.api";

const useStyles = makeStyles({
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
    list: {
        display: 'flex',
        flexDirection: 'column'
    }
});

export const parameterNames = ['threshold', 'powerph', 'volume', 'mole'];

const ParameterDialog = (props) => {

    const [parameters, setParameters] = React.useState({threshold: 0, powerph: 0, volume: 0, mole: 0})

    const setParameter = (parameter, value) => setParameters({...parameters, [parameter]: value})

    const getPrameters = async () => {
        try {
            setParameters(await getParametersApi());
        } catch (e) {
            console.error(e);
        }
    }

    const submitParameters = async () => {
        try {
            console.log(parameters)
            await setParametersApi({...parameters , time: new Date().getTime()});
        } catch (e) {
            console.error(e)
        }
    }

    useEffect( () => {
        getPrameters()
        return () => {
            console.log("This will be logged on unmount");
        }
    } , []);

    return (

        <div>
            <List>

                {parameterNames.map((parameterName) =>
                    (
                        <React.Fragment key={parameterName}>
                            <InputLabel>
                                {parameterName}
                            </InputLabel>
                            <TextField
                                type={"number"}
                                value={parameters[parameterName]}
                                onChange={event => setParameter(parameterName, event.target.value)}
                                variant="outlined"
                            />
                        </React.Fragment>
                    )
                )}

            </List>

            <Button variant="contained" color="primary" onClick={submitParameters}>
                submit parameters
            </Button>
        </div>
    );
}

export default ParameterDialog;