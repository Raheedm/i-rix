import Grid from '@mui/material/Grid'
import headingLogo from '../../assets/irixlogo.png'

import './header.css'

const HomeNav = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      className="footer"
      sx={{ marginBottom: '2rem' }}
    >
      
      <Grid item sx={{ paddingTop: 2 }}>
        <img src={headingLogo} alt="UEM" className="img" style={{ height: '310px' ,width:'500px' }} />
      </Grid>
      
    </Grid>
  )
}

export default HomeNav
