import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import LogoutIcon from "@mui/icons-material/Logout";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/features/auth/authSlice";
import { useNavigate, Link, NavLink } from "react-router-dom";

function SecondaryListItems() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitLogOut = () => {
    localStorage.removeItem("token");
    dispatch(logout());
  };

  return (
    <>
      <React.Fragment>
        <NavLink
          to="/playlist"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItemButton>
            <ListItemIcon>
              <i class="fa-solid fa-music"></i>
            </ListItemIcon>
            <ListItemText primary="Playlist" />
          </ListItemButton>
        </NavLink>

        <NavLink
          to="/personal"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItemButton>
            <ListItemIcon>
              <i class="fa-solid fa-user"></i>
            </ListItemIcon>
            <ListItemText primary="Personal" />
          </ListItemButton>
        </NavLink>

        <NavLink
          to="/album"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItemButton>
            <ListItemIcon>
              <i class="fa-solid fa-books"></i>
            </ListItemIcon>
            <ListItemText primary="Album" />
          </ListItemButton>
        </NavLink>

        <ListItemButton>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText onClick={submitLogOut} primary="Logout" />
        </ListItemButton>
      </React.Fragment>
    </>
  );
}
export default SecondaryListItems;
