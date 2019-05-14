import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    input: {
      margin: theme.spacing.unit,
    },
  });
  
class Welcome extends React.Component{
    render(){
        function Inputs(props) {
            const { classes } = props;
        }
        Inputs.propTypes = {
                classes: PropTypes.object.isRequired,
        };
        return(
            <div>
                    <h1>Welcome, Name</h1>
                    <div className="customlistview">
                        <div className="imagecontainer">
                            <img className="rounded-circle" src="https://img.mobiscroll.com/demos/Requiem_for_a_Dream.png" />
                            <span className="online"></span>
                        </div>
                    </div>
                    <div className={classes.container}>
                    <Input
                        placeholder="Tell your friends what's on your mind"
                        className={classes.input}
                        inputProps={{
                        'aria-label': 'Description',
                        }}
                    />
                    </div>
            </div>
        )
    }
}
export default withStyles(styles)(Inputs);
