import React from 'react';
import Paper from '@material-ui/core/Paper'

export const UserSingleView = () => {
  // const { selectedUser } = useUserView();

  return (
    <div>
      <h1>Single User View</h1>
      <Paper elevation={10} variant="outlined" square>
            <h1>Hello World</h1>
      </Paper>
    </div>
  );

}