import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { CardContent, Box, Button, CardActions } from "@mui/material";

const MyCardComponent = () => {
  const cardData = [
    {
      title: "One-click portfolio generation",
      description:
        "Add ability to create professional looking portfolio from profile.",
    },
    {
      title: "Bookmark challenges",
      description: "Be able to bookmark challenges to take later on.",
    },
    {
      title: "Animated solution screenshots",
      description:
        "Screenshots of solutions with animations don't display content.",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "930px",
        maxHeight: "930px",
        maxWidth: 327,
        minWidth: 327,
        margin: "20px",
      }}
    >
      <Typography>06 Roadmap Page</Typography>
      <Box
        sx={{
          minHeight: "100px",
          maxHeight: "100px",
          minWidth: "375px",
          maxWidth: "375px",
          paddingTop: "50px",
          paddingBottom: "30px",
          marginRight: "0px",
          marginLeft: "0px",
          background: "#373F68",
          color: "white",
        }}
      >
        <Typography variant="h2" sx={{ padding: "10px" }}>
          Roadmap
        </Typography>
      </Box>

      <Box
        sx={{
          minHeight: "49px",
          maxHeight: "49px",
          minWidth: "280.5px",
          maxWidth: "280.5px",
          paddingTop: "20px",
          paddingBottom: "20px",
          marginRight: "0px",
          marginLeft: "0px",
          background: "0px",
        }}
      >
        {" "}
        <Typography variant="h2" color="secondary.light">
          {" "}
          In-Progress (3)
        </Typography>
        <Typography
          color="textSecondary"
          fontFamily="Jost, sans-serif"
          fontSize={13}
          sx={{ marginTop: 1 }}
        >
          {" "}
          Features currently being developed
        </Typography>
        {cardData.map((card, index) => (
          <Box key={index} sx={{ marginBottom: "10px" }}>
            <Card
              sx={{
                borderRadius: 2,
                padding: "0px",
                borderTop: "5px solid",
                borderColor: "primary.main",
                minHeight: "233px",
                maxHeight: "233px",
                minWidth: "327px",
                maxWidth: "327px",
              }}
            >
              <CardContent>
                <Box display="flex" alignItems="center">
                  <Box
                    sx={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "primary.main", // Uses theme color for the dot
                      marginRight: "10px", // Space between dot and text
                    }}
                  />
                  <Typography variant="body2">In Progress</Typography>
                </Box>
                <Box
                  sx={{
                    minHeight: "66px",
                    maxHeight: "66px",
                    minWidth: "278px",
                    maxWidth: "278px",
                    marginTop: "px",
                    marginBottom: "0px",
                    marginRight: "0px",
                    marginLeft: "0px",
                    background: "0px",
                  }}
                >
                  <Typography variant="h4" color="secondary.light">
                    {card.title}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    fontFamily="Jost, sans-serif"
                    fontSize={13}
                    sx={{ marginTop: 1 }}
                  >
                    {card.description}
                  </Typography>
                </Box>
              </CardContent>
              <CardActions sx={{ flexDirection: "column", padding: 2 }}>
                <Button
                  sx={{
                    width: 77,
                    height: 30,
                    backgroundColor: "custom.backgroundAlt",
                    color: "info.main",
                    marginLeft: "24px",
                    marginRight: "200px",
                  }}
                >
                  Feature
                </Button>

                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    width: "100%",
                    marginTop: 2,
                  }}
                >
                  <Box
                    sx={{
                      flex: 3,
                      color: "secondary.light",
                      padding: 0,
                      cursor: "pointer",
                      marginleft: "24px",
                      marginRight: "24px",
                    }}
                  >
                    <svg
                      width="69"
                      height="32"
                      viewBox="0 0 69 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="69" height="32" rx="10" fill="#F2F4FE" />
                      <g clip-path="url(#clip0_0_199)">
                        <path
                          d="M40.775 19.961H37.98L40.697 16.932C40.5757 16.9753 40.4457 17.0057 40.307 17.023C40.177 17.0403 40.0253 17.049 39.852 17.049C39.4013 17.049 38.9593 16.932 38.526 16.698C38.0927 16.464 37.7373 16.126 37.46 15.684C37.1827 15.242 37.044 14.7133 37.044 14.098C37.044 13.3527 37.2087 12.7287 37.538 12.226C37.876 11.7147 38.3267 11.3333 38.89 11.082C39.4533 10.822 40.073 10.692 40.749 10.692C41.4337 10.692 42.0533 10.822 42.608 11.082C43.1713 11.3333 43.6177 11.7147 43.947 12.226C44.285 12.7287 44.454 13.3527 44.454 14.098C44.454 14.592 44.35 15.047 44.142 15.463C43.9427 15.879 43.6913 16.269 43.388 16.633L40.775 19.961ZM42.27 14.098C42.27 13.6387 42.1227 13.2703 41.828 12.993C41.542 12.707 41.1823 12.564 40.749 12.564C40.3157 12.564 39.9517 12.707 39.657 12.993C39.3623 13.2703 39.215 13.6387 39.215 14.098C39.215 14.5573 39.3623 14.93 39.657 15.216C39.9517 15.502 40.3157 15.645 40.749 15.645C41.1823 15.645 41.542 15.502 41.828 15.216C42.1227 14.93 42.27 14.5573 42.27 14.098ZM49.2907 19.961H46.4957L49.2127 16.932C49.0914 16.9753 48.9614 17.0057 48.8227 17.023C48.6927 17.0403 48.5411 17.049 48.3677 17.049C47.9171 17.049 47.4751 16.932 47.0417 16.698C46.6084 16.464 46.2531 16.126 45.9757 15.684C45.6984 15.242 45.5597 14.7133 45.5597 14.098C45.5597 13.3527 45.7244 12.7287 46.0537 12.226C46.3917 11.7147 46.8424 11.3333 47.4057 11.082C47.9691 10.822 48.5887 10.692 49.2647 10.692C49.9494 10.692 50.5691 10.822 51.1237 11.082C51.6871 11.3333 52.1334 11.7147 52.4627 12.226C52.8007 12.7287 52.9697 13.3527 52.9697 14.098C52.9697 14.592 52.8657 15.047 52.6577 15.463C52.4584 15.879 52.2071 16.269 51.9037 16.633L49.2907 19.961ZM50.7857 14.098C50.7857 13.6387 50.6384 13.2703 50.3437 12.993C50.0577 12.707 49.6981 12.564 49.2647 12.564C48.8314 12.564 48.4674 12.707 48.1727 12.993C47.8781 13.2703 47.7307 13.6387 47.7307 14.098C47.7307 14.5573 47.8781 14.93 48.1727 15.216C48.4674 15.502 48.8314 15.645 49.2647 15.645C49.6981 15.645 50.0577 15.502 50.3437 15.216C50.6384 14.93 50.7857 14.5573 50.7857 14.098Z"
                          fill="#3A4374"
                        />
                        <path
                          d="M16 18L20 14L24 18"
                          stroke="#4661E6"
                          stroke-width="2"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_0_199">
                          <rect
                            width="40"
                            height="19"
                            fill="white"
                            transform="translate(16 6)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </Box>

                  <Box
                    sx={{
                      color: "secondary.light",
                      padding: 0,
                      cursor: "pointer",
                    }}
                  >
                    <svg
                      width="40"
                      height="19"
                      viewBox="0 0 40 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_0_196)">
                        <path
                          d="M2.62074 17H1.34534L2.24718 16.0895C2.73344 15.5986 3.0371 14.9601 3.11873 14.2674C1.03637 12.8878 0 10.8892 0 8.79388C0 4.92832 3.51913 1 9.0305 1C14.8692 1 18 4.61479 18 8.45522C18 12.321 14.8361 15.9333 9.0305 15.9333C8.0135 15.9333 6.95226 15.7963 6.00478 15.5448C5.10787 16.4735 3.89262 17 2.62074 17Z"
                          fill="#CDD2EE"
                        />
                        <path
                          d="M26.6434 12.388L31.9214 4.9H33.5594V10.516H34.9894V12.388H33.5594V14H31.2714V12.388H26.6434ZM29.5554 10.802H31.5184V8.085L29.5554 10.802Z"
                          fill="#3A4374"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_0_196">
                          <rect width="40" height="19" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Box>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MyCardComponent;
