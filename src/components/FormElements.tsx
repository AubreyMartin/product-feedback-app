import { Box, Stack, TextField, Typography } from "@mui/material";

const FormElements = () => {
  return (
    <Box>
      <Typography variant="body1" color="textSecondary"> 05 FORM ELEMENTS</Typography>
      <Stack spacing={2} direction="row" alignItems="center" justifyContent="center" sx={{ mt: 4 }}>
        <Box sx={{ width: "300px", height: "100px" }}>
          <Typography variant="body2" textAlign="center" color="textSecondary">
            Text Field - Default
          </Typography>
          <TextField sx={{ mt: '.5rem' }} variant="outlined" fullWidth/>
        </Box>

        <Box sx={{ width: "300px", height: "100px" }}>
          <Typography variant="body2" textAlign="center" color="textSecondary">
            Text Field - Filled
          </Typography>
          <TextField sx={{ mt: '.5rem' }} variant="outlined" fullWidth value="Lorem ipsum dolor"/>
        </Box>

        <Box sx={{ width: "300px", height: "100px" }}>

          <Typography variant="body2" textAlign="center" color="textSecondary">
            Text Field - Active
          </Typography>
          <TextField sx={{ mt: '.5rem' }} variant="outlined" fullWidth focused value="Lorem ipsum dolor"/>
        </Box>

        <Box sx={{ width: "300px", height: "100px" }}>

          <Typography variant="body2" textAlign="center" color="textSecondary">
            Text Field - Error
          </Typography>
          <TextField sx={{ mt: '.5rem' }} variant="outlined" fullWidth margin="normal" error
                     helperText="Can't be empty"/>
        </Box>


      </Stack>

      {/*<FormControl sx={{ width: "250px" }} margin="normal" variant="outlined">*/}
      {/*  <InputLabel>Feature</InputLabel>*/}
      {/*  <Select defaultValue="">*/}
      {/*    <MenuItem value="Feature">Feature</MenuItem>*/}
      {/*    <MenuItem value="UI">UI</MenuItem>*/}
      {/*    <MenuItem value="UX">UX</MenuItem>*/}
      {/*    <MenuItem value="Enhancement">Enhancement</MenuItem>*/}
      {/*    <MenuItem value="Bug">Bug</MenuItem>*/}
      {/*  </Select>*/}
      {/*</FormControl>*/}
    </Box>
  );
};

export default FormElements;


