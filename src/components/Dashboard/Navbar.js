import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import { AccountCircle, Logout, Delete } from '@mui/icons-material';

export default function Navbar() {
  const { user, logout, deleteAccount } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleMenuClose();
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account?')) {
      deleteAccount();
      handleMenuClose();
    }
  };

  return (
    <header className="navbar">
      <div className="logo">Dashboard</div>
      <div className="user-menu">
        <IconButton onClick={handleMenuOpen}>
          <Avatar>
            <AccountCircle />
          </Avatar>
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem disabled>{user?.email}</MenuItem>
          <MenuItem onClick={handleLogout}>
            <Logout fontSize="small" /> Logout
          </MenuItem>
          <MenuItem onClick={handleDeleteAccount}>
            <Delete fontSize="small" /> Delete Account
          </MenuItem>
        </Menu>
      </div>
    </header>
  );
}