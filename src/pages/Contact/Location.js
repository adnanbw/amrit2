import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button, Box } from '@material-ui/core';
import img from '../../images/5-2.jpg'
import img2 from '../../images/5-1.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: '1160px',
  },
  image: {
    width: '100%',
    height: 'auto',
    paddingBottom: '20px'
  },
  section: {
    padding: theme.spacing(4),
  },
  button: {
    color: '#ffff !important',
    backgroundColor: 'black !important',
    padding: '10px 20px',
  },
  heading: {
    fontFamily: 'Roboto Thin',
  },
}));

const Location = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box className={classes.section}>
            <img
              src={img}
              alt="Section 1 Image"
              className={classes.image}
            />
            <Typography variant="h5" className={classes.heading} gutterBottom>
              Indore Office
            </Typography>
            <Typography variant="body1" gutterBottom>
                New Palasia, Indore (M.P.) 452001
            </Typography>
            
            <Button className={classes.button} href="https://maps.app.goo.gl/S9H2aGtiwx5pj8Xx9" target="_blank" >Get Direction</Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box className={classes.section}>
            <img
              src={img2}
              alt="Section 2 Image"
              className={classes.image}
            />
            <Typography variant="h5" className={classes.heading} gutterBottom>
              Bhopal Office
            </Typography>
            <Typography variant="body1" gutterBottom>
              1st floor, Krishna Emporio, 10no. Market, above Starbucks, Bhopal (M.P.)
            </Typography>
            <Button className={classes.button} href="https://maps.app.goo.gl/z4CRGV4RDrz3WMKz5" target="_blank" >Get Direction</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Location;