import { Grid } from '@mui/material'
import googleIcon from '../../assets/SVGs/googleIcon.svg'
import facebookIcon from '../../assets/SVGs/facebookIcon.svg'
import SocialAuthLogic from './socialAuth'

function SocialAuth() {
  const { googleAuth, facebookAuth } = SocialAuthLogic()
  const isMobile = window.innerWidth <= 768

  return (
    <div style={{ margin: isMobile ? '0' : '-1rem 0 1rem 1rem' }}>
      <Grid container justifyContent={isMobile ? 'center' : 'flex-start'} spacing={1}>
        <Grid item xs={3}>
          <img
            src={googleIcon}
            style={{ cursor: 'pointer' }}
            alt="googleIcon"
            onClick={googleAuth}
          />
        </Grid>
        <Grid item xs={4}>
          <img
            src={facebookIcon}
            style={{ cursor: 'pointer' }}
            alt="facebookIcon"
            onClick={facebookAuth}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default SocialAuth
