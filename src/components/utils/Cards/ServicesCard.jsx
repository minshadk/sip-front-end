import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Test } from "../../../Assets/Images/ImageSemiAutoImport";
// import PublishIcon from "@mui/icons-material/Publish";

// importing images

// import HandsShakeImgae from "../../../Assets/Images/handsshake.jpg";
import search from "../../../Assets/Images/search.png";


// icons
// import AccessibleIcon from '@mui/icons-material/Accessible';

export default function ServicesCard(props) {
  const { title, description, imageUrl } = props;

  return (
    <Card
      sx={{
        width: "270px",
        borderRadius: "5px",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt="green iguana"
        />
    
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{color:"#333"}}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
