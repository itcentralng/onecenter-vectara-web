import { Box, Container, Theme, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Card from "./Card";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => {
  return {
    text: {
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
  };
});
function TextContent() {
  const classes = useStyles();
  return (
    <Container className={`space-btw ${classes.text}`} sx={{ height: "100%", flexDirection: "column" }}>
      {" "}
      <Typography color="white" variant="h3">
        <Link to="/">OneCenter</Link>
      </Typography>
      <Box className={classes.text}>
        <Typography color="white" variant="h2">
          Start Your Journey With Us.
        </Typography>
        <Typography color="white" variant="body1" sx={{ opacity: 1, fontWeight: "200" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id illo eligendi reprehenderit eos accusamus deleniti magnam hic dignissimos neque! Laboriosam voluptatem nam, autem cupiditate
          dignissimos similique modi hic aliquid qui.
        </Typography>
      </Box>
      <Card />
    </Container>
  );
}

export default TextContent;
