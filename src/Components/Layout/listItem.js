import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import SearchIcon from '@mui/icons-material/Search';
import {Link, NavLink} from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';

export const mainListItems = (
    <React.Fragment>

        <NavLink
            to="/home"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
            style={{ textDecoration: 'none', color:'black'}}
        >
            <ListItemButton>
                <ListItemIcon>
                <i className="fa-solid fa-house"></i>
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItemButton>
        </NavLink>

        <Link to="/search"  style={{ textDecoration: 'none', color:'black' }}>
            <ListItemButton>
                <ListItemIcon>
                    <SearchIcon />
                </ListItemIcon>
                <ListItemText primary="Search" /> 
            </ListItemButton>
        </Link>

        <NavLink
            to="library"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
            style={{ textDecoration: 'none', color:'black' }}
        >
            <ListItemButton>
                <ListItemIcon>
                <i className="fa-solid fa-list-music"></i>
                </ListItemIcon>
                <ListItemText primary="Library" />
            </ListItemButton>
        </NavLink>

    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <ListSubheader component="div" inset>
            Saved reports
        </ListSubheader>
        
        <ListItemButton>
            <ListItemIcon>
                <LogoutIcon/>
            </ListItemIcon>
            <ListItemText primary="Logout" />
        </ListItemButton>
    </React.Fragment>
);
