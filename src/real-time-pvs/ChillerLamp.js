import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class ChillerLamp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {fillLamp: false}
        this.timerInterval = null;
    }

    generateTimeInterval = () => (setInterval(() => this.setState((currentState) => ({fillLamp: !currentState.fillLamp})), 1000));

    componentDidMount() {
        if (this.props.blanking)
            this.timerInterval = this.generateTimeInterval();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!prevProps.blanking && this.props.blanking)
            this.timerInterval = this.generateTimeInterval();

        else if (prevProps.blanking && !this.props.blanking) {
            clearInterval(this.this.generateTimeInterval)
            this.timerInterval = null;
        }

    }

    render() {
        const {fillLamp} = this.state;
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>

                <Typography style={{margin: 15}}>
                    Chiller Alarm
                </Typography>

                <Card style={{
                    width: 200,
                    height: 200,
                    borderStyle: "solid",
                    borderRadius: '100%',
                    borderWidth: 20,
                    borderColor: "red",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <CardContent>
                        {
                            fillLamp && <div style={{
                                width: 150,
                                height: 150,
                                borderRadius: '100%',
                                backgroundColor: 'red'
                            }}/>
                        }

                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default ChillerLamp;