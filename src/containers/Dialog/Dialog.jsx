import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import css from './Dialog.module.scss';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

// const styles = (theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(2),
//   },
//   closeButton: {
//     position: 'absolute',
//     right: theme.spacing(1),
//     top: theme.spacing(1),
//     color: theme.palette.grey[500],
//   },
// });
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(6, 0, 3),
  },
  closeButton: {
    position: 'absolute',
    right: '30px',
    top: '50px',
    color: 'green',
    background: '#505dfe',
  },
}));

const DialogTitle = ((props) => {
  const classes = useStyles();
  const { children, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography  {...other}>
      <Typography variant="h6">{children}</Typography>
      {/*{onClose ? (*/}
      {/*  <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>*/}
      {/*    close*/}
      {/*    /!*<CloseIcon />*!/*/}
      {/*  </IconButton>*/}
      {/*) : null}*/}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const Title = (props) => <DialogTitle>{props.children}
    <Button onClick={props.handleClose} />
  </DialogTitle>;
const Buttons = (props) => <DialogActions>
  <Button autoFocus onClick={props.handleClose} color="primary">
    {props.children}
  </Button>
</DialogActions>;
const Content = (props) =>  <DialogContent dividers>
  <Typography gutterBottom>
    {props.children}
  </Typography>
</DialogContent>;

class SuccessModal extends React.Component {
  static Title = Title;
  static Content = Content;
  static Buttons = Buttons;

  render() {
    const { handleClose, isOpen } = this.props;
    return (
      <div>
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={isOpen}>
          {this.props.children}
        </Dialog>
      </div>
    );
  }
}

Dialog.propTypes = {
  children: PropTypes.node,
};

export { SuccessModal }