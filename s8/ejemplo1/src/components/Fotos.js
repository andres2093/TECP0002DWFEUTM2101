import React from 'react';
import Grid from '@material-ui/core/Grid';

const Fotos = () => {
	return (
		<Grid container spacing={3}>
			{
        [
          'https://api.lorem.space/image/movie?w=150&h=220',
          'https://picsum.photos/100',
          'https://loremflickr.com/640/360',
          'https://placekitten.com/640/360',
        ].map((item) => (
          <Grid item lg={3} sm={6} xs={12}>
            <div className="foto">
              <img 
                style={{ width: '100%', height: '100%' }} 
                src={item}
              />
            </div>
          </Grid>
        ))
      }
		</Grid>
	);
};

export default Fotos;