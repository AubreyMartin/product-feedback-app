import Typography from "@mui/material/Typography";
import { Card, CardContent,Box, TextField } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { useState } from "react";
import SelectDropDown from "../../shared-library/Select/SelectDropDown.tsx";
import AddIcon from "@mui/icons-material/Add";

const MyCardComponent = () => {
  const [featureOption, setFeatureOption] = useState<string>("");
  const options = [
    { value: "Feature", label: "Feature" },
    { value: "UI", label: "UI" },
    { value: "UX", label: "UX" },
    { value: "Enhancement", label: "Enhancement" },
    { value: "Bug", label: "Bug" },
  ];

  return (
    <Box
      sx={{
        minHeight: 1024,
        maxWidth: 768,
        margin: "20px auto 0",
        backgroundColor: "custom.backgroundAlt",
      }}
    >
      <Typography variant="body1" color="textSecondary">
        03 Tablet New Feedback Page
      </Typography>

      {/* Card */}
      <Card elevation={0}
  sx={{
    boxShadow: 'none',
    border: 'none', background:"yellow",  margin: '0px 0px 0px 0px', minHeight: '745px', maxHeight: '745px', minWidth: '540px', maxWidth: '540px', 

  }}>
        <Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "red",
              borderRadius: "50%",
              minWidth: "40px",
              minHeight: "40px",
              padding: "10px",
              margin: "0px 24px",
              "&:hover": {
                backgroundColor: "darkred",
              },
            }}
          >
            <AddIcon style={{ color: "white", padding: 0 }} />
          </Button>
        </Box>

        <CardContent
          sx={{
            minHeight: "657px",
            maxWidth: "540px",
            margin: "0px 44px",
            background: "red",
            padding: 0,
          }}
        >
          {/* Heading */}
          <Box sx={{ backgroundColor: "red", marginBottom: "25px" }}>
            <Typography variant="h1" fontSize={24} color="textSecondary">
              Create New Feedback
            </Typography>
          </Box>

          {/* Feedback Title */}
          <Box
            sx={{
              minHeight: "106px",
              maxWidth: "456px",
              margin: "0px 44px 22px",
              background: "",
            }}
          >
            <Typography variant="h6" fontSize={13} sx={{ marginBottom: "0px" }}>
              Feedback Title
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              fontSize={14}
              sx={{ marginBottom: "8px" }}
            >
              Add a short, descriptive headline
            </Typography>
            <TextField variant="outlined" fullWidth />
          </Box>

          {/* Category box */}
          <Box
            sx={{
              minHeight: "105px",
              maxWidth: "456px",
              margin: "0px 44px 22px",
              backgroundColor: "",
            }}
          >
            <Typography variant="h6" fontSize={13}>
              Category
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              fontSize={14}
              sx={{ marginBottom: "8px" }}
            >
              Choose a category for your feedback
            </Typography>
            <SelectDropDown
              options={options}
              selectedValue={featureOption}
              onChange={setFeatureOption}
              style={ width: "456px" }
            />
          </Box>

          {/* Feedback Detail box */}
          <Box
            sx={{
              minHeight: "196px",
              maxWidth: "456px",
              margin: "0px 44px",
             
            }}
          >
            <Typography variant="h6" fontSize={14}>
              Feedback Details
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              fontSize={13}
              sx={{ marginBottom: "20px" }}
            >
              Include any specific comments on what should be improved, added, etc.
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              multiline
              sx={{
                width: "456px",
                height: "96px",
                "& .MuiOutlinedInput-root": { height: "100%" },
              }}
            />
          </Box>

          {/* Add feedback & Cancel buttons */}
          <CardActions
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "16px",
              margin: "32px 40px 40px 242px",
            }}
          >
            <Button
              sx={{
                minHeight: "44px",
                maxWidth: "93px",
                backgroundColor: "secondary.light",
                color: "#F2F4FE",
                padding: "10px",
              }}
            >
              Cancel
            </Button>
            <Button
              sx={{
                minHeight: "44px",
                maxWidth: "144px",
                backgroundColor: "primary.main",
                color: "#F2F4FE",
                padding: "10px",
              }}
            >
              + Add Feedback
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </Box>
  );
};

export default MyCardComponent;
