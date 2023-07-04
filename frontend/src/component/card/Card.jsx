import * as React from "react";
import Card from "@mui/material/Card";
import Rating from "@mui/material/Rating";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Card.css";
export default function ShopCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={props.image} title={props.name} />
      <CardContent style={{ paddingBottom: "0" }}>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.feedback ? "Feeback: " + props.feedback : props.feedback}
        </Typography>
        <Rating
          name="rating"
          value={props.rating}
          readOnly
          onChange={() => {}}
        />
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            props.onClick();
          }}
          style={{ color: "#96c13d" }}
        >
          Feedback
        </Button>
      </CardActions>
    </Card>
  );
}
