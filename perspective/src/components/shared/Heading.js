//mui imports
import { makeStyles } from "@mui/styles";
import { Grid, Button } from "@mui/material";

const useStyles = makeStyles({
  root: {
    background: "#e7f1fd",
    color: "#106eea",
    textTransform: "uppercase",
    borderRadius: "50px",
    fontSize: "13px",
    letterSpacing: "1px",
    fontWeight: "700",
    margin: "auto",
    cursor: "context-menu",
  },
});

function Heading(props) {
  const classes = useStyles();
  return (
    <Grid container justify="center" mt={2}>
      <Button className={classes.root}>{props.title}</Button>
    </Grid>
  );
}
export default Heading;
