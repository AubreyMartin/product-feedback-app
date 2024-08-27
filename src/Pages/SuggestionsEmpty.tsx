import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { CardContent } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';


const MyCardComponent = () => {
  return (
    <Box> 
      <Typography variant="body1" color="textSecondary">
        {" "}
        02 SuggestionsEmpty
      </Typography>
    <Card
      className="SuggestionsEmpty"
      sx={{
        backgroundColor: "red",minHeight: 460,maxHeight: 460,minWidth: 327,maxWidth: 327, borderRadius: '10px'
      }}
    >
      <CardContent sx={{minHeight: 308,maxHeight: 308,
                        minWidth: 278,maxWidth: 278, 
                        marginTop: '75px',marginBottom: '75px',
                        marginRight: '24px',marginLeft: '24px', 
                        background: "white", }}>

          {/* Title */}
          <Typography variant="h6" fontSize={18} sx={{
  minHeight: '26px',
  maxHeight: '26px',
  minWidth: '207px',
  maxWidth: '207px',
  marginTop: '0px',
  marginBottom: '0px',
  marginRight: '35px',
  marginLeft: '35px',
  background: '0px',
  
}}>
            There is no feedback yet.
          </Typography>

          {/* Description */}
          <Typography variant="body2" color="textSecondary" fontSize={13} sx={{
  minHeight: '57px',
  maxHeight: '57px',
  minWidth: '278px',
  maxWidth: '278px',
  marginTop: '0px',
  marginBottom: '0px',
  marginRight: '0px',
  marginLeft: '0px',
  background: '0px',
  padding: '05px'
}}>
          Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.
          </Typography>              
      


       {/* Add feedback Button  */}
      <CardActions>
       <Button sx={{minHeight: 40,maxHeight: 40,
                     minWidth: 134,maxWidth: 134, 
                     marginTop: '',marginBottom: '',
                     marginRight:'71px',marginLeft: '71px', backgroundColor: "black", padding: '10px' }}> + Add Feedback</Button>
       </CardActions>


      </CardContent>
    </Card>
    </Box>
  );
};

export default MyCardComponent;
