import React from 'react';
import { Typography, Grid } from '@material-ui/core';

export default () => (
  <Grid
    spacing={2}
    alignContent="center"
    alignItems="center"
    container
    direction="column"
  >
    <Grid item>
      <Typography variant="h5">React Compound Slider</Typography>
    </Grid>
    <Grid item xs={8}>
      <Typography>
        A tiny React slider component with no opinion about markup or styles.
      </Typography>
    </Grid>
    <Grid item xs={8}>
      <div
        style={{
          borderRadius: 4,
          padding: 4,
          backgroundColor: 'rgba(0,0,0,0.1)',
        }}
      >
        <Typography>npm install react-compound-slider</Typography>
      </div>
    </Grid>
    <Grid item>
      <svg
        width="350px"
        height="350px"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 120.5 120.5"
      >
        <g>
          <rect rx="5" width="120.5" height="120.5" fill="rgba(0,0,0,0.1)" />
        </g>
        <g>
          <circle fill="#fff" cx="60.3" cy="60.3" r="60.3" />
          <path d="M59,94.5c0.3-1.3,0.5-2.7,0.5-4c0-1.3-0.2-2.7-0.5-4h46.5v8H59 M57.7,95.5h48.8v-10H57.7c0.5,1.6,0.8,3.3,0.8,5 C58.5,92.2,58.2,93.9,57.7,95.5L57.7,95.5z" />
          <path d="M17.5,94.5v-8H24c-0.3,1.3-0.5,2.7-0.5,4c0,1.3,0.2,2.7,0.5,4H17.5 M16.5,95.5h8.8c-0.5-1.6-0.8-3.3-0.8-5 c0-1.7,0.3-3.4,0.8-5h-8.8V95.5L16.5,95.5z" />
          <path d="M59,34.5c0.3-1.3,0.5-2.7,0.5-4s-0.2-2.7-0.5-4h46.5v8H59 M57.7,35.5h48.8v-10H57.7c0.5,1.6,0.8,3.3,0.8,5 C58.5,32.2,58.2,33.9,57.7,35.5L57.7,35.5z" />
          <path d="M17.5,34.5v-8H24c-0.3,1.3-0.5,2.7-0.5,4s0.2,2.7,0.5,4H17.5 M16.5,35.5h8.8c-0.5-1.6-0.8-3.3-0.8-5c0-1.7,0.3-3.4,0.8-5 h-8.8V35.5L16.5,35.5z" />
          <path d="M17.5,64.5v-8H64c-0.3,1.3-0.5,2.7-0.5,4s0.2,2.7,0.5,4H17.5 M16.5,65.5h48.8c-0.5-1.6-0.8-3.3-0.8-5s0.3-3.4,0.8-5 H16.5V65.5L16.5,65.5z" />
          <path d="M99,64.5c0.3-1.3,0.5-2.7,0.5-4s-0.2-2.7-0.5-4h6.5v8H99 M97.7,65.5h8.8v-10h-8.8c0.5,1.6,0.8,3.3,0.8,5 S98.2,63.9,97.7,65.5L97.7,65.5z" />
          <g>
            <path d="M41.5,104.5c-7.7,0-14-6.3-14-14s6.3-14,14-14s14,6.3,14,14S49.2,104.5,41.5,104.5 M41.5,105.5c8.3,0,15-6.7,15-15 s-6.7-15-15-15s-15,6.7-15,15S33.2,105.5,41.5,105.5L41.5,105.5z" />
          </g>
          <g>
            <path d="M81.5,74.5c-7.7,0-14-6.3-14-14s6.3-14,14-14s14,6.3,14,14S89.2,74.5,81.5,74.5 M81.5,75.5c8.3,0,15-6.7,15-15 s-6.7-15-15-15s-15,6.7-15,15S73.2,75.5,81.5,75.5L81.5,75.5z" />
          </g>
          <g>
            <path d="M41.5,44.5c-7.7,0-14-6.3-14-14s6.3-14,14-14s14,6.3,14,14S49.2,44.5,41.5,44.5 M41.5,45.5c8.3,0,15-6.7,15-15 s-6.7-15-15-15s-15,6.7-15,15S33.2,45.5,41.5,45.5L41.5,45.5z" />
          </g>
        </g>
      </svg>
    </Grid>
  </Grid>
);
