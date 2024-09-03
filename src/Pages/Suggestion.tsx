import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

// Define an interface for MediaCard props
interface MediaCardProps {
  title: string;
  description: string;
}

const MediaCard: React.FC<MediaCardProps> = ({ title, description }) => (
  <Card
    className="Suggestion Card"
    sx={{
      minHeight: 200,
      maxHeight: 200,
      minWidth: 327,
      maxWidth: 327,
      background: "white",
      // padding: '48px 44px', // Shorthand for top/bottom and right/left
      borderRadius: "10px",
      justifyContent: "center",
      marginLeft: "25px",
      marginRight: "25px",
      marginTop: "20px",
      marginBottom: "20px",
      paddingBottom: "24px",
      boxShadow: "none",
    }}
  >
    <CardContent
      sx={{
        minHeight: 66,
        minWidth: 278,
        maxHeight: 66,
        maxWidth: 278,
        paddingRight: "24px",
        paddingLeft: "24px",
        paddingTop: "25px",
      }}
    >
      <Typography variant="h4" component="div" color="secondary.light">
        {title}
      </Typography>
      <Typography
        color="custom.gray"
        fontFamily="Jost, sans-serif"
        fontSize={13}
        sx={{
          maxWidth: "278px",
          maxHeight: "38px",
          minWidth: "278px",
          minHeight: "38px",
        }}
      >
        {description}
      </Typography>
    </CardContent>

    <CardActions
      sx={{
        display: "flex",
        flexDirection: "column",
        border: "20px",
        padding: "25px",
        marginTop: "12px",
      }}
    >
      <Button
        size="small"
        sx={{
          flex: 1,
          minWidth: 111,
          minHeight: 30,
          maxWidth: 111,
          maxHeight: 30,
          alignSelf: "flex-start",
          backgroundColor: "custom.backgroundAlt",
          color: "info.main",
          paddingLeft: "10px",
          border: "10px",
        }}
      >
        Enhancement
      </Button>

      <Box
        sx={{
          display: "flex",
          gap: 21,
          MinWidth: 279,
          minHeight: 32,
          MaxWidth: 279,
          maxHeight: 32,
          paddingTop: "15px",
          padding: "25px",
          marginBottom: "24px",
        }}
      >
        <Button
          size="small"
          sx={{
            flex: 1,
            minWidth: 69,
            minHeight: 32,
            maxWidth: 69,
            maxHeight: 32,
            backgroundColor: "custom.backgroundAlt",
            color: "secondary.light",
          }}
        >
          Learn
        </Button>

        <Button
          size="small"
          sx={{
            flex: 1,
            minWidth: 40,
            minHeight: 19,
            maxWidth: 40,
            maxHeight: 19,
            backgroundColor: "custom.backgroundAlt",
            color: "secondary.light",
          }}
        >
          More4
        </Button>
      </Box>
    </CardActions>
  </Card>
);

// Main Component
export default function CardGrid() {
  const cardData = [
    {
      title: "Add tags for solutions",
      description: "Easier to search for solutions based on a specific stack.",
    },
    {
      title: "Add a dark theme option",
      description:
        "It would help people with light sensitivities and who prefer dark mode.",
    },
    {
      title: "Q&A within the challenge hubs",
      description: "Challenge-specific Q&A would make for easy reference.",
    },
    {
      title: "Allow image/video upload",
      description: "Images and screencasts can enhance comments on solutions.",
    },
    {
      title: "Ability to follow others",
      description: "Stay updated on comments and solutions other people post.",
    },
    {
      title: "Preview images not loading",
      description:
        "Challenge preview images are missing when you apply a filter.",
    },
  ];

  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        padding: 2,
        flexDirection: "row",
        overflowX: "auto",
      }}
    >
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <MediaCard title={card.title} description={card.description} />
        </Grid>
      ))}
    </Grid>
  );
}
