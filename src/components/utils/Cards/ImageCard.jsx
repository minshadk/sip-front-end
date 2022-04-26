import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Test } from "../../../Assets/Images/ImageSemiAutoImport";

// import HandsShakeImgae from "../../../Assets/Images/handsshake.jpg";
// import search from "../../../Assets/Images/search.png";

// icons
// import AccessibleIcon from '@mui/icons-material/Accessible';

export default function ImageCard(props) {
  const { title, description, imageUrl } = props;
  console.log(imageUrl);
  console.log(description)
  return (
    <Card
      sx={{
        width: "270px",
        paddingX: 2,
        borderRadius: "5px",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight:"500px",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="100%"
          image={imageUrl}
        />
      </CardActionArea>
    </Card>
  );
}
