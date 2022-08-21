import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import menuIcon from '../../assets/images/menu.svg';
import styles from './Menu.module.css';
import { Link, NavLink } from 'react-router-dom';

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
          sx={{ width: "50vw", height: "100%", background: "white" }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
      >
          <List sx={{ width: "100%", paddingTop: 2 }}>
              {["Home", "About us", "Contact us"].map((text, index) => (
                  <ListItem
                      key={text}
                      disablePadding
                      sx={{ width: "100%", display: "flex", justifyContent: "center" }}
                  >
                      <NavLink
                          className={styles.link}
                          to={text.toLowerCase().split(" ").join("")}
                          style={({ isActive }) => ({
                              color: isActive ? "#059042" : "#5D9081",
                              fontWeight: isActive ? "700" : "300",
                              pointerEvents: isActive ? "none" : "",
                              lineHeight: 2,
                          })}
                          // style={{ lineHeight: 2, color: "#059042", fontWeight: "bold" }}
                      >
                          {text}
                      </NavLink>
                  </ListItem>
              ))}
          </List>
      </Box>
  );

  return (
      <div className={styles.headermenu}>
          <React.Fragment>
              <button className={styles.menuBtn} onClick={toggleDrawer("right", true)}>
                  <img
                      className={styles.menuIcon}
                      src={menuIcon}
                      alt="menuIcon"                      
                  />
              </button>
              <Drawer anchor={"right"} open={state["right"]} onClose={toggleDrawer("right", false)}>
                  {list("right")}
              </Drawer>
          </React.Fragment>
      </div>
  );
}
