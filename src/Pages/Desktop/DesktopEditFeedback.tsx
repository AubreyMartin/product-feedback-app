import {  Card,CardContent,Typography,Box,CardActions,Button,TextField, } from '@mui/material';
import SelectDropDown from "../../shared-library/Select/SelectDropDown.tsx";
import { useState } from "react";



  


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
  minHeight: '1325px',
  minWidth: '1440px',
  margin: "20px auto 0",
  backgroundColor: "custom.backgroundAlt",
}}
>
<Typography variant="body1" color="textSecondary">05 Desktop Edit Feedback</Typography>

<Box sx={{ margin:'55px 0px 67px 114px '}}>
       <svg width="76" height="20" viewBox="0 0 76 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_843)">
<path d="M25.894 11.458V9.638H30.85C30.8967 10.4127 30.8173 11.1453 30.612 11.836C30.4067 12.5173 30.0893 13.1193 29.66 13.642C29.2307 14.1647 28.694 14.5753 28.05 14.874C27.4153 15.1633 26.678 15.308 25.838 15.308C24.802 15.308 23.878 15.0887 23.066 14.65C22.2633 14.2113 21.6287 13.6047 21.162 12.83C20.7047 12.046 20.476 11.136 20.476 10.1C20.476 9.064 20.714 8.16333 21.19 7.398C21.666 6.62333 22.3147 6.026 23.136 5.606C23.9573 5.186 24.886 4.976 25.922 4.976C26.958 4.976 27.84 5.19533 28.568 5.634C29.296 6.06333 29.8887 6.61867 30.346 7.3L28.232 8.392C28.008 8.00933 27.7093 7.68733 27.336 7.426C26.972 7.16467 26.5007 7.034 25.922 7.034C25.3807 7.034 24.8813 7.15533 24.424 7.398C23.976 7.64067 23.6167 7.99067 23.346 8.448C23.0847 8.90533 22.954 9.456 22.954 10.1C22.954 10.744 23.08 11.304 23.332 11.78C23.5933 12.2467 23.948 12.6107 24.396 12.872C24.844 13.124 25.3527 13.25 25.922 13.25C26.6407 13.25 27.21 13.082 27.63 12.746C28.05 12.4007 28.3393 11.9713 28.498 11.458H25.894ZM31.8503 11.78C31.8503 11.0987 32.009 10.506 32.3263 10.002C32.653 9.498 33.0917 9.106 33.6423 8.826C34.2023 8.546 34.8323 8.406 35.5323 8.406C36.2417 8.406 36.8717 8.546 37.4223 8.826C37.973 9.106 38.407 9.498 38.7243 10.002C39.051 10.506 39.2143 11.0987 39.2143 11.78C39.2143 12.452 39.051 13.04 38.7243 13.544C38.407 14.048 37.973 14.44 37.4223 14.72C36.8717 15 36.2417 15.14 35.5323 15.14C34.8323 15.14 34.2023 15 33.6423 14.72C33.0917 14.44 32.653 14.048 32.3263 13.544C32.009 13.04 31.8503 12.452 31.8503 11.78ZM34.0343 11.78C34.0343 12.2747 34.179 12.6667 34.4683 12.956C34.767 13.2453 35.1217 13.39 35.5323 13.39C35.943 13.39 36.293 13.2453 36.5823 12.956C36.881 12.6667 37.0303 12.2747 37.0303 11.78C37.0303 11.2853 36.881 10.8933 36.5823 10.604C36.293 10.3053 35.943 10.156 35.5323 10.156C35.1217 10.156 34.767 10.3053 34.4683 10.604C34.179 10.8933 34.0343 11.2853 34.0343 11.78ZM52.5238 12.242C52.5238 13.2127 52.1784 13.9173 51.4878 14.356C50.8064 14.7853 49.8824 15 48.7158 15H44.8798V5.2H48.4918C49.1638 5.2 49.7611 5.29333 50.2838 5.48C50.8064 5.65733 51.2171 5.93267 51.5158 6.306C51.8144 6.67 51.9638 7.132 51.9638 7.692C51.9638 8.168 51.8378 8.57867 51.5858 8.924C51.3338 9.26933 50.9884 9.54 50.5498 9.736C51.1098 9.932 51.5764 10.2353 51.9498 10.646C52.3324 11.0473 52.5238 11.5793 52.5238 12.242ZM48.2258 7.034H47.2458V9.092H48.2258C48.6364 9.092 48.9538 8.99867 49.1778 8.812C49.4018 8.62533 49.5138 8.36867 49.5138 8.042C49.5138 7.71533 49.4018 7.468 49.1778 7.3C48.9538 7.12267 48.6364 7.034 48.2258 7.034ZM47.2458 13.166H48.4498C48.9071 13.166 49.2898 13.0727 49.5978 12.886C49.9151 12.6993 50.0738 12.3727 50.0738 11.906C50.0738 11.4767 49.9151 11.178 49.5978 11.01C49.2898 10.8327 48.9071 10.744 48.4498 10.744H47.2458V13.166ZM54.6666 10.534L53.9526 9.12C54.326 8.94267 54.7646 8.77467 55.2686 8.616C55.782 8.45733 56.342 8.378 56.9486 8.378C57.518 8.378 58.0266 8.462 58.4746 8.63C58.9226 8.78867 59.2773 9.022 59.5386 9.33C59.8 9.638 59.9306 10.016 59.9306 10.464V15H57.9006V14.118C57.7046 14.454 57.4106 14.7107 57.0186 14.888C56.636 15.056 56.2206 15.14 55.7726 15.14C55.362 15.14 54.9793 15.0653 54.6246 14.916C54.2793 14.7573 53.9993 14.524 53.7846 14.216C53.5793 13.908 53.4766 13.5347 53.4766 13.096C53.4766 12.48 53.6913 11.9947 54.1206 11.64C54.5593 11.276 55.1846 11.094 55.9966 11.094C56.3886 11.094 56.748 11.136 57.0746 11.22C57.4013 11.2947 57.6766 11.388 57.9006 11.5V10.94C57.9006 10.3053 57.4946 9.988 56.6826 9.988C56.4026 9.988 56.1226 10.0207 55.8426 10.086C55.5626 10.1513 55.3153 10.2307 55.1006 10.324C54.8953 10.408 54.7506 10.478 54.6666 10.534ZM55.6186 12.984C55.6186 13.236 55.7026 13.432 55.8706 13.572C56.048 13.7027 56.2673 13.768 56.5286 13.768C56.874 13.768 57.182 13.6653 57.4526 13.46C57.7233 13.2453 57.8726 12.928 57.9006 12.508C57.518 12.34 57.1026 12.256 56.6546 12.256C56.2813 12.256 56.0153 12.3213 55.8566 12.452C55.698 12.5733 55.6186 12.7507 55.6186 12.984ZM63.2915 11.78C63.2915 12.2933 63.4595 12.6993 63.7955 12.998C64.1315 13.2967 64.5375 13.446 65.0135 13.446C65.3962 13.446 65.7602 13.3667 66.1055 13.208C66.4508 13.04 66.7168 12.802 66.9035 12.494V14.552C66.6795 14.7293 66.3995 14.874 66.0635 14.986C65.7275 15.0887 65.3168 15.14 64.8315 15.14C64.1128 15.14 63.4735 15 62.9135 14.72C62.3535 14.44 61.9102 14.048 61.5835 13.544C61.2662 13.04 61.1075 12.452 61.1075 11.78C61.1075 11.0987 61.2662 10.5107 61.5835 10.016C61.9102 9.512 62.3535 9.12 62.9135 8.84C63.4735 8.56 64.1128 8.42 64.8315 8.42C65.3168 8.42 65.7275 8.476 66.0635 8.588C66.3995 8.69067 66.6795 8.82133 66.9035 8.98V11.052C66.7168 10.744 66.4415 10.5107 66.0775 10.352C65.7135 10.1933 65.3588 10.114 65.0135 10.114C64.6962 10.114 64.4068 10.1887 64.1455 10.338C63.8842 10.478 63.6742 10.674 63.5155 10.926C63.3662 11.178 63.2915 11.4627 63.2915 11.78ZM72.7858 8.56H75.3058L72.5478 11.22L75.5858 15H73.0938L70.4338 11.724V15H68.4038V4.08H70.4338V10.828L72.7858 8.56Z" fill="#647196"/>
<path d="M4.33447 14L0.334473 10L4.33447 6" stroke="#4661E6" stroke-width="2"/>
</g>
<defs>
<clipPath id="clip0_0_843">
<rect width="75.6656" height="20" fill="white" transform="translate(0.334473)"/>
</clipPath>
</defs>
       </svg>

       </Box>


      {/* Card  */}
      <Card
        className="SuggestionsEmpty"
        sx={{
          backgroundColor: "white",
          minHeight: '910px',
          maxHeight: '910px',
          minWidth: '540px',
          maxWidth: '540px',
          margin: '25px 40px 22px 115px',
          borderRadius: "10px",
        }}
      >   
         <Box sx={{margin:'0px 0px 0px 44px '}}><svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="28" cy="28" r="28" fill="url(#paint0_radial_0_801)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.0825 19.4809L32.8315 16L39.345 22.2719L35.7969 25.952L29.0825 19.4809ZM16 39.5949C16.9207 35.6533 19.4867 25.5743 19.4867 25.5743L27.6895 20.7535L34.5209 27.1499L29.3017 34.97L16.313 40L22.4703 34.2104C23.513 34.5998 24.9857 34.2478 25.7818 33.3736C26.8328 32.2255 26.7539 30.4423 25.605 29.3914C24.456 28.3404 22.5848 28.3404 21.5339 29.4885C20.751 30.3444 20.4812 31.8544 20.9287 32.8498L16 39.5949Z" fill="white"/>
<defs>
<radialGradient id="paint0_radial_0_801" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(58.184 -5.81647) rotate(129.411) scale(93.4169)">
<stop stop-color="#E84D70"/>
<stop offset="0.530886" stop-color="#A337F6"/>
<stop offset="1" stop-color="#28A7ED"/>
</radialGradient>
</defs>
</svg>


         </Box>
 

        <CardContent
          sx={{
            minHeight: 308,
            maxHeight: 308,
            minWidth: 278,
            maxWidth: 278,
            margin: '0px 0px 0px 44px',
            background: "white",
            padding: 0,
          }}
        >
          {/* Heading */}
          <Box
            sx={{
              backgroundColor: "",
              marginBottom: "25px",
              margin: '30px 0px 76px 0px',
              minWidth:'456px',
            }}
          >
            <Typography variant="h1" fontSize={24} color="textSecondary">
              Editing ‘Add a dark theme option’
            </Typography>
          </Box>

          {/* Feedback Title */}
          <Box
            sx={{
              minHeight: "105px",
              maxHeight: "105px",
              minWidth: "456px",
              maxWidth: "456px",
              backgroundColor: " ",
            }}
          >
            {/* Feedback Title */}

            <Typography
              variant="h6"
              fontSize={13} sx={{margin: '0px 0px 0px 0px '}}>
              Feedback Title
            </Typography>

            {/*  Feedback Description */}
            <Typography
              variant="body2"
              color="textSecondary"
              fontSize={13}
              sx={{margin: '0px 0px 15px 0px '}}>
              Add a short, descriptive headline
            </Typography>

            {/*  Feedback TextField */}

              <TextField
                variant="outlined"
                fullWidth
                placeholder="Add a dark theme option"
              />
           
          </Box>

          {/* Category box */}
          <Box
            sx={{
              minHeight: "236px",
              maxHeight: "236px",
              minWidth: "456px",
              maxWidth: "456px",
              margin: ' 27px 0px 27px 0px',
              backgroundColor: "",
            }}
          >
            {/* Category Title */}

            <Typography
              variant="h6"
              fontSize={14}> 
              Category
            </Typography>

            {/* Category Description */}
            <Typography
              variant="body2"
              color="textSecondary"
              fontSize={13}
              sx={{ margin:'0px 0px 15px 0px '
              
              }}
            >
              Choose a category for your feedback
            </Typography>

            {/* Category SelectDropDown */}
          
              <SelectDropDown
                options={options}
                selectedValue={featureOption}
                onChange={setFeatureOption}
              />{" "}
         
          {/* Update Status SelectDropDown */}
        
            {/* Category Title */}
            <Typography
              variant="h6"
              fontSize={14}
             sx={{margin: '28px 0px 0px 0px '}}
            >
              Update Status
            </Typography>
            {/* Update Status Description */}
            <Typography
              variant="body2"
              color="textSecondary"
              fontSize={14} sx={{margin:'0px 0px 15px 0px '}}
            >
              Change feature state
            </Typography>
            {/* Update Status SelectDropDown */}
              <SelectDropDown
                options={options}
                selectedValue={featureOption}
                onChange={setFeatureOption}
              />{" "}
            
          </Box>

          {/* Feedback Detail box */}
          <Box
            sx={{
              minHeight: "154px",
              maxHeight: "154px",
              minWidth: "456px",
              maxWidth: "456px",
              margin: '22px 0px 31px 0px'
           }}
          >
            {/* Feedback Detail Title */}
            <Typography
              variant="h6"
              fontSize={13}>
              Feedback Details
            </Typography>

            {/* Feedback Detail Description */}
            <Typography
              variant="body2"
              color="textSecondary"
              fontSize={14} sx={{ margin: '0px 0px 15px 0px '
              }}
            >
              Include any specific comments on what should be improved, added,
              etc.
            </Typography>

            <TextField
                variant="outlined"
                fullWidth
                multiline
                placeholder="It would help people with light sensitivities and who prefer dark mode. "
                sx={{
                  width: "456px",
                  height: "96px",
                  "& .MuiOutlinedInput-root": {
                    height: "100%",
                    fontSize: "15px",}, 
                }}
              />
           
          </Box>

          {/* Add feedback Button & Cancel Button   */}
          <CardActions
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: '5px',
             margin: '30px 0px 0px 0px'
            }}
          >


            <Button
              sx={{
                minHeight: '44px',
                maxHeight: '44px',
                minWidth: '93px',
                maxWidth: '93pxs',
                marginLeft: "0px",
                backgroundColor: "#D73737",
                color: "#F2F4FE",
                padding: "10px",
                margin: '0px 110px 0px 0px'
              }}
            >
              {" "}
              Delete
            </Button>
           

            <Button
              sx={{
                minHeight: '44px',
                maxHeight: '44px',
                minWidth: '93px',
                maxWidth: '93px',
                marginLeft: "0px",
                backgroundColor: "secondary.light",
                color: "#F2F4FE",
                padding: "10px",
                margin: '0px 0px 0px 0px'
              }}
            >
              {" "}
              Cancel
            </Button>

            <Button
              sx={{
                minHeight: '44px',
                maxHeight: '44px',
                minWidth: '144px',
                maxWidth: '144px',
                backgroundColor: "primary.main",
                color: "#F2F4FE",
                padding: "10px", }}
            >
              {" "}
              Save Changes
            </Button>

         
          </CardActions>
        </CardContent>
      </Card>
    </Box>


);
};

export default MyCardComponent;
