import React from 'react';
import { useUserView } from '../UserHooks';
import Paper from '@material-ui/core/Paper'

export const UserSingleView = () => {
  // const { selectedUser } = useUserView();

  return (
    <div>
      <h1>Single User View</h1>;
      <Paper elevation={3} />
    </div>
  
  )


};
