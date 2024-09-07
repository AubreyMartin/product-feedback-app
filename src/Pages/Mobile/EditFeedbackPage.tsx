import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { CardContent, Box, TextField } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { useState } from "react";
import SelectDropDown from "../../shared-library/Select/SelectDropDown.tsx";

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
    //  Page title
    <Box>
      <Typography variant="body1" color="textSecondary">
        {" "}
        04 Edit Feedback Page
      </Typography>

      {/* Card  */}
      <Card
        className="SuggestionsEmpty"
        sx={{
          backgroundColor: "white",
          minHeight: 893,
          maxHeight: 893,
          minWidth: 327,
          maxWidth: 327,
          borderRadius: "10px",
        }}
      >
        {/* <Button
      variant="contained"
      sx={{
        backgroundColor: 'red',
        borderRadius: '50%',
        minWidth: '40px',
        minHeight: '40px',
        padding: '10px',
        marginRight: '24px',marginLeft: '24px', 
        marginTop: '0px',marginBottom: '0px',
        '&:hover': {
          backgroundColor: 'darkred',
        }
      }}
    >
      <AddIcon style={{ color: 'white' ,marginTop: '0px',marginBottom: '0px',padding:'0px' }} />
    </Button> */}

        <CardContent
          sx={{
            minHeight: 308,
            maxHeight: 308,
            minWidth: 278,
            maxWidth: 278,
            marginTop: "23px",
            marginBottom: "75px",
            marginRight: "24px",
            marginLeft: "24px",
            background: "white",
            padding: 0,
          }}
        >
          {/* Heading */}
          <Box
            sx={{
              backgroundColor: "",
              marginBottom: "25px",
            }}
          >
            <Typography variant="h1" fontSize={18} color="textSecondary">
              Editing ‘Add a dark theme option’
            </Typography>
          </Box>

          {/* Feedback Title */}
          <Box
            sx={{
              minHeight: "105px",
              maxHeight: "105px",
              minWidth: "279px",
              maxWidth: "279px",
              marginTop: "0px",
              marginBottom: "0px",
              marginRight: "0px",
              marginLeft: "0px",
              backgroundColor: " white",
            }}
          >
            {/* Feedback Title */}

            <Typography
              variant="h6"
              fontSize={13}
              sx={{
                minHeight: "19px",
                maxHeight: "19px",
                minWidth: "87px",
                maxWidth: "87px",
                marginTop: "0px",
                marginBottom: "0px",
                background: "custom.backgroundAlt",
              }}
            >
              Feedback Title
            </Typography>

            {/*  Feedback Description */}
            <Typography
              variant="body2"
              color="textSecondary"
              fontSize={13}
              sx={{
                minHeight: "19px",
                maxHeight: "19px",
                minWidth: "183px",
                maxWidth: "183px",
                marginTop: "0px",
                marginBottom: "8px",
                marginRight: "0px",
                marginLeft: "0px",
                background: "0px",
                padding: "0px",
              }}
            >
              Add a short, descriptive headline
            </Typography>
            {/*  Feedback TextField */}

            <Box
              sx={{
                minHeight: "48px",
                maxHeight: "48px",
                minWidth: "279px",
                maxWidth: "279px",
                marginTop: "0px",
                marginBottom: "0px",
                marginRight: "0px",
                marginLeft: "0px",
              }}
            >
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Add a dark theme option"
              />
            </Box>
          </Box>

          {/* Category box */}
          <Box
            sx={{
              minHeight: "105px",
              maxHeight: "105px",
              minWidth: "279px",
              maxWidth: "279px",
              marginTop: "10px",
              marginBottom: "10px",
              marginRight: "0px",
              marginLeft: "0px",
              backgroundColor: " white",
            }}
          >
            {/* Category Title */}

            <Typography
              variant="h6"
              fontSize={13}
              sx={{
                minHeight: "19px",
                maxHeight: "19px",
                minWidth: "87px",
                maxWidth: "87px",
                marginTop: "0px",
                marginBottom: "0px",
                background: "0px",
              }}
            >
              Category
            </Typography>

            {/* Category Description */}
            <Typography
              variant="body2"
              color="textSecondary"
              fontSize={13}
              sx={{
                minHeight: "19px",
                maxHeight: "19px",
                minWidth: "183px",
                maxWidth: "183px",
                marginTop: "0px",
                marginBottom: "25px",
                marginRight: "0px",
                marginLeft: "0px",
                background: "0px",
                padding: "0px",
              }}
            >
              Choose a category for your feedback
            </Typography>

            {/* Category SelectDropDown */}
            <Box
              sx={{
                minHeight: "48px",
                maxHeight: "48px",
                minWidth: "279px",
                maxWidth: "279px",
                marginTop: "0px",
                marginBottom: "0px",
                marginRight: "0px",
                marginLeft: "0px",
              }}
            >
              <SelectDropDown
                options={options}
                selectedValue={featureOption}
                onChange={setFeatureOption}
              />{" "}
            </Box>
          </Box>

          {/* Update Status SelectDropDown */}
          <Box
            sx={{
              minHeight: "105px",
              maxHeight: "105px",
              minWidth: "279px",
              maxWidth: "279px",
              marginTop: "10px",
              marginBottom: "10px",
              marginRight: "0px",
              marginLeft: "0px",
              backgroundColor: " white",
            }}
          >
            {/* Category Title */}

            <Typography
              variant="h6"
              fontSize={13}
              sx={{
                minHeight: "19px",
                maxHeight: "19px",
                minWidth: "87px",
                maxWidth: "87px",
                marginTop: "0px",
                marginBottom: "0px",
                background: "0px",
              }}
            >
              Update Status
            </Typography>

            {/* Update Status Description */}
            <Typography
              variant="body2"
              color="textSecondary"
              fontSize={13}
              sx={{
                minHeight: "19px",
                maxHeight: "19px",
                minWidth: "183px",
                maxWidth: "183px",
                marginTop: "0px",
                marginBottom: "25px",
                marginRight: "0px",
                marginLeft: "0px",
                background: "0px",
                padding: "0px",
              }}
            >
              Change feature state
            </Typography>

            {/* Update Status SelectDropDown */}
            <Box
              sx={{
                minHeight: "48px",
                maxHeight: "48px",
                minWidth: "279px",
                maxWidth: "279px",
                marginTop: "0px",
                marginBottom: "0px",
                marginRight: "0px",
                marginLeft: "0px",
              }}
            >
              <SelectDropDown
                options={options}
                selectedValue={featureOption}
                onChange={setFeatureOption}
              />{" "}
            </Box>
          </Box>

          {/* Feedback Detail box */}
          <Box
            sx={{
              minHeight: "196px",
              maxHeight: "196px",
              minWidth: "279px",
              maxWidth: "279px",
              marginTop: "0px",
              marginBottom: "0px",
              marginRight: "0px",
              marginLeft: "0px",
              backgroundColor: " white",
            }}
          >
            {/* Feedback Detail Title */}
            <Typography
              variant="h6"
              fontSize={13}
              sx={{
                //  minHeight: '19px',
                //  maxHeight: '19px',
                //  minWidth: '96px',
                //  maxWidth: '96px',
                marginTop: "0px",
                marginBottom: "0px",
                background: "0px",
              }}
            >
              Feedback Details
            </Typography>

            {/* Feedback Detail Description */}
            <Typography
              variant="body2"
              color="textSecondary"
              fontSize={13}
              sx={{
                minHeight: "38px",
                maxHeight: "38px",
                minWidth: "279px",
                maxWidth: "279px",
                marginTop: "0px",
                marginBottom: "25px",
                marginRight: "0px",
                marginLeft: "0px",
                background: "0px",
                padding: "0px",
              }}
            >
              Include any specific comments on what should be improved, added,
              etc.
            </Typography>

            <Box
              sx={{
                minHeight: "120px",
                maxHeight: "120px",
                minWidth: "279px",
                maxWidth: "279px",
                marginTop: "0px",
                marginBottom: "0px",
                marginRight: "0px",
                marginLeft: "0px",
              }}
            >
              <TextField
                variant="outlined"
                fullWidth
                multiline
                placeholder="It would help people with light sensitivities and who prefer dark mode. "
                sx={{
                  width: "279px",
                  height: "120px",
                  "& .MuiOutlinedInput-root": {
                    height: "100%",
                    fontSize: "13px",
                    textAlign: "start",
                  }, // Ensures the input field takes the full height
                }}
              />
            </Box>
          </Box>

          {/* Add feedback Button & Cancel Button   */}
          <CardActions
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Center align the buttons horizontally
              gap: "16px", // Optional: adds space between the buttons
              marginRight: "71px",
              marginLeft: "71px",
              marginTop: "40px",
            }}
          >
            <Button
              sx={{
                minHeight: 40,
                maxHeight: 40,
                minWidth: 279,
                maxWidth: 279,
                marginTop: "",
                marginBottom: "",

                backgroundColor: "primary.main",
                color: "#F2F4FE",
                padding: "10px",
              }}
            >
              {" "}
              Save Changes
            </Button>

            <Button
              sx={{
                minHeight: 40,
                maxHeight: 40,
                minWidth: 279,
                maxWidth: 279,
                marginTop: "",
                marginBottom: "",
                marginLeft: "0px",
                backgroundColor: "secondary.light",
                color: "#F2F4FE",
                padding: "10px",
              }}
            >
              {" "}
              Cancel
            </Button>

            <Button
              sx={{
                minHeight: 40,
                maxHeight: 40,
                minWidth: 279,
                maxWidth: 279,
                marginTop: "",
                marginBottom: "",
                marginLeft: "0px",
                backgroundColor: "red",
                color: "#F2F4FE",
                padding: "10px",
              }}
            >
              {" "}
              Delete
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </Box>
  );
};

export default MyCardComponent;
