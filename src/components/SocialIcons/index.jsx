import React from 'react'
import './socialicons.css'
import { Grid, useMediaQuery } from '@mui/material'
function SocialIcons() {
  const isMobile = useMediaQuery('(max-width:900px)')

  return isMobile ? null : (
    <div>
      <Grid
        item
        display="flex"
        flexDirection={{ lg: 'column', md: 'row', xs: 'row' }}
        alignItems={{ xs: 'center', md: 'center' }}
        justifyContent={{ md: 'center', xs: 'center', sm: 'center' }}
        className="socialicons"
        xs={12}
        lg={1}
      >
        {/* <Grid item>
          <a
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <div className="facebook" />
          </a>
        </Grid> */}
        <Grid item sx={{ my: 1 }}>
          <a
            href="https://www.instagram.com/irix_dcs/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="instagram" />
          </a>
        </Grid>
        {/* <Grid item>
          <a
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <div className="linkedin" />
          </a>
        </Grid> */}
        {/* <Grid item sx={{ my: 1 }}>
          <a href="k" target="_blank" rel="noreferrer">
            <div className="twitter" />
          </a>
        </Grid> */}
        {/* <Grid item>
          <a
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <div className="youtube" />
          </a>
        </Grid> */}
      </Grid>
    </div>
  )
}

export default SocialIcons
