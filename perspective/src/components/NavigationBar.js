import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import Logo from "../static/pec-logo.png";

const menu = ["Home", "About", "Conference Committee", "Call for Papers", "Important Details", "Contact Us", "Register/Login"]
const about = ['About Institute', 'About Conference'];
const committee = ['Organizing Committee', 'Advisory Board'];
const details = ['Important Dates', 'Payment Gateway'];


const NavigationBar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);
	
	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};
	
	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};
	
	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	
	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Box
						component="img"
						sx={{mr: 2, display: {xs: 'none', md: 'flex'}}}
						alt="PEC Logo"
						src={Logo}
						noWrap
					/>
					
					<Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon/>
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: {xs: 'block', md: 'none'},
							}}
						>
							{menu.map((item) => (
								<MenuItem key={item} onClick={handleCloseNavMenu}>
									<Typography textAlign="center">{item}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Box
						component="img"
						sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}
						alt="PEC Logo"
						src={Logo}
					/>
					<Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
						{menu.map((items) => (
							<Button
								key={items}
								onClick={handleCloseNavMenu}
								sx={{my: 2, color: 'white', display: 'block'}}
							>
								{items}
							</Button>
						))}
					</Box>
				
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default NavigationBar;
