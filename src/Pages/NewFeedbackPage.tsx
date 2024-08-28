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
        03 New Feedback Page     
      </Typography>
    <Card
      className="SuggestionsEmpty"
      sx={{
        backgroundColor: "white",minHeight: 708,maxHeight: 708,minWidth: 327,maxWidth: 327, borderRadius: '10px'
      }}
    >
      <CardContent sx={{minHeight: 308,maxHeight: 308,
                        minWidth: 278,maxWidth: 278, 
                        marginTop: '75px',marginBottom: '75px',
                        marginRight: '24px',marginLeft: '24px', 
                        background: "white",padding: 0, }}>


       {/* Heading */}
         <Box sx={{ 
            backgroundColor:"" }}>  
           <Typography variant="h1" fontSize={18}  color="textSecondary">
            Create New Feedback
           </Typography>
           </Box>


         {/* Feedback Title */}
        <Box sx={{ 
          minHeight: '105px',maxHeight: '105px',
          minWidth: '279px', maxWidth: '279px',
          marginTop: '0px', marginBottom: '0px',
          marginRight: '0px', marginLeft: '0px',backgroundColor:" blue",  }}>

        {/* Feedback Title */}
            
          <Typography variant="h6" fontSize={13} sx={{
                             minHeight: '19px',
                             maxHeight: '19px',
                             minWidth: '87px',
                             maxWidth: '87px',
                             marginTop: '0px',
                             marginBottom: '0px',
                        
                            background: '0px',}}>

           Feedback Title
          </Typography>

          {/*  Feedback Description */}
          <Typography variant="body2" color="textSecondary" fontSize={13} sx={{
          minHeight: '19px',
          maxHeight: '19px',
          minWidth: '183px',
          maxWidth: '183px',
          marginTop: '0px',
          marginBottom: '25px',
          marginRight: '0px',
          marginLeft: '0px',
          background: '0px',
          padding: '0px',}}>

          Add a short, descriptive headline
          </Typography>   
          </Box> 

        {/* Category box */}  
        <Box sx={{ 
          minHeight: '105px',maxHeight: '105px',
          minWidth: '279px', maxWidth: '279px',
          marginTop: '10px', marginBottom: '10px',
          marginRight: '0px', marginLeft: '0px',backgroundColor:" red", }}>

        {/* Category Title */}
            
          <Typography variant="h6" fontSize={13} sx={{
                             minHeight: '19px',
                             maxHeight: '19px',
                             minWidth: '87px',
                             maxWidth: '87px',
                             marginTop: '0px',
                             marginBottom: '0px',
                        
                            background: '0px',}}>

            Category
          </Typography>

          {/* Category Description */}
          <Typography variant="body2" color="textSecondary" fontSize={13} sx={{
          minHeight: '19px',
          maxHeight: '19px',
          minWidth: '183px',
          maxWidth: '183px',
          marginTop: '0px',
          marginBottom: '25px',
          marginRight: '0px',
          marginLeft: '0px',
          background: '0px',
          padding: '0px',}}>

          Choose a category for your feedback
          </Typography>   
          </Box>       

        {/* Feedback Detail box */}  
          <Box sx={{ 
          minHeight: '196px',maxHeight: '196px',
          minWidth: '279px', maxWidth: '279px',
          marginTop: '0px', marginBottom: '0px',
          marginRight: '0px', marginLeft: '0px',backgroundColor:" yellow",  }}>

        {/* Feedback Detail Title */}
          <Typography variant="h6" fontSize={13} sx={{
                            //  minHeight: '19px',
                            //  maxHeight: '19px',
                            //  minWidth: '96px',
                            //  maxWidth: '96px',
                             marginTop: '0px',
                             marginBottom: '0px',
                            background: '0px',}}>

           Feedback Details
          </Typography>

          {/* Feedback Detail Description */}
          <Typography variant="body2" color="textSecondary" fontSize={13} sx={{
          minHeight: '38px',
          maxHeight: '38px',
          minWidth: '279px',
          maxWidth: '279px',
          marginTop: '0px',
          marginBottom: '25px',
          marginRight: '0px',
          marginLeft: '0px',
          background: '0px',
          padding: '0px',}}>

           Include any specific comments on what should be improved, added, etc.
          </Typography>   
          </Box>            



       {/* Add feedback Button & Cancel Button   */}
      <CardActions sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Center align the buttons horizontally
            gap: '10px' ,// Optional: adds space between the buttons
            marginRight:'71px',marginLeft: '71px', }}>


            <Button sx={{minHeight: 40,maxHeight: 40,
                     minWidth: 279,maxWidth: 279, 
                     marginTop: '',marginBottom: '',
                    
                     backgroundColor: "primary.main",color: '#F2F4FE', padding: '10px' }}> + Add Feedback</Button>


           <Button sx={{minHeight: 40,maxHeight: 40,
                     minWidth: 279,maxWidth: 279, 
                     marginTop: '',marginBottom: '', marginLeft:'0px',
                     backgroundColor: "secondary.light",color: '#F2F4FE', padding: '10px' }}> Cancel</Button>

      </CardActions>


      </CardContent>
    </Card>
    </Box>
  );
};

export default MyCardComponent;