import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import menuIcon from '../../assets/images/menu.png';
import styles from './Menu.module.css';
import { Link } from 'react-router-dom';

export default function Menu() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Home', 'About us', 'Contact us'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <Link to={text.toLowerCase().split(' ').join('')}>{text}</Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
        <React.Fragment >
          <img className={styles.menuIcon} src={menuIcon} alt="menuIcon" onClick={toggleDrawer('right', true)}/>
          <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            {list('right')}
          </Drawer>
        </React.Fragment>
      
    </div>
  );
}
