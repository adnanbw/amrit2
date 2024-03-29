import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Image from "material-ui-image";
import about from '../../images/About.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(10)
  },
  image: {
    maxWidth: "100%",
    height: "auto"
  },
  heading: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    fontFamily: 'Roboto Thin',
  },
  text: {
    padding: theme.spacing(2),
    fontFamily: 'Roboto Condensed',
    paddingBottom: theme.spacing(4),
    textAlign: 'left',
  }
}));

function AboutUs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h3" align="center" className={classes.heading}>About Us</Typography>
      <Grid container spacing={6}style={{padding:10}}>
        <Grid item xs={12} sm={6}>
          <Image
            src={about}
            aspectRatio={16 / 12}
            disableSpinner
            className={classes.image}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.text}>
            {/* <Typography variant="h3" align="center">About Us</Typography> */}
            <Typography variant="body1">
              Amrit Dawani, an Indore-based fashion designer, specializes in
              couture for women’s and men’s wear. He started his label ‘The Q by
              Amrit Dawani’ in 2013. His design style can be described as a mix
              of contemporary silhouettes and finely detailed embroideries.{" "}
              <br /> <br />
              Amrit Dawani identifies as an artist, a couturier, and a designer
              who recreates the magic of hand-crafted techniques through
              concepts, structures, and images. His idea of fashion transcends
              products bringing new ideas to life, creating tools of confident
              self-expression, and an intellectual commitment to good taste. He
              takes cues from his mother’s style statements to design his
              masterpieces. His brand combines the sophisticated elegance of
              handmade techniques with a Modern Indian grace that makes space
              for boundless creativity.
            </Typography>
          </div>
  </Grid>

      </Grid>
    </div>
  );
}

export default AboutUs;