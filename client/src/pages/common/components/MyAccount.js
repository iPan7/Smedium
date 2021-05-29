import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
    "& > *": {
      margin: theme.spacing(4),
    },
  },
}))

export default function MyAccount() {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [lastname, setLastname] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    setLastname(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-multiline-flexible"
          label="First Name"
          multiline
          rowsMax={4}
          value={value}
          onChange={handleChange}

        />
        <TextField
          id="standard-multiline-flexible"
          label="Last Name"
          multiline
          rowsMax={4}
          value={lastname}
          onChange={handleChange}
        />
      </div>
      <div>
        <h3>AVATAR</h3>
        <label htmlFor="contained-button-file">
        <input
            label="Avatar"
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
          />
        </label>
        <div className={classes.root}>
        </div>
      </div>
      <div>
        {/* <Button onClick={}>Submit</Button> */}
      </div>
    </form>
  );
}
