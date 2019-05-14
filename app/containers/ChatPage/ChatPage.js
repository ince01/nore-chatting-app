import React, { Component } from 'react';
import './style.scss';
import CustomListView from '../../components/CustomListView/CustomListView';
import Searchfields from '../../components/Searchfields/Searchfields';
import Textchatbox from '../../components/Textchatbox/Textchatbox';
import Bordertittle from '../../components/Bordertittle/Bordertittle';
import 'bootstrap/dist/css/bootstrap.css';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ScrollableTabsButtonForce from '../../components/ScrollableTabsButtonForce/ScrollableTabsButtonForce';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
});
class ChatPage extends Component {
    
    render() 
    {
        function FullWidthGrid(props) {
            const { ChatPage } = props;
        }
        FullWidthGrid.propTypes = {
            ChatPage: PropTypes.object.isRequired,
        };
        
        return (
            <div className={ChatPage.root}>
                <Grid container spacing={8}>
                    <Grid item xs={3} >
                        <Paper className={ChatPage.paper} style={{marginLeft:'-16px'}}>
                            <div className="separator">
                                <Bordertittle>
                                    <h4>AppChat</h4>
                                    <hr></hr>
                                </Bordertittle>
                                <CustomListView/>
                                <br/>
                                <Searchfields></Searchfields>
                                <ScrollableTabsButtonForce></ScrollableTabsButtonForce>
                                
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={9}>
                        <Paper className={ChatPage.paper}>

                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}


export default withStyles(styles)(ChatPage);