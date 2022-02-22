import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Menu from '@mui/material/Menu';
import Logo from "../static/pec-logo.png";

const menu = ["Home", "About", "Conference Committee", "Call for Papers", "Important Details", "Contact Us", "Register/Login"]
const about = ['About Institute', 'About Conference'];
const committee = ['Organizing Committee', 'Advisory Board'];
const details = ['Important Dates', 'Payment Gateway'];


const NavigationBar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElAbout, setAnchorElAbout] = React.useState(null);
	const [anchorElCommittee, setAnchorElCommittee] = React.useState(null);
	const [anchorElDetails, setAnchorElDetails] = React.useState(null);
	
	
	const handleOpenMenu = (event) => {
		let type="XX"
		console.log(type)
		setAnchorElAbout(event.currentTarget);
		if(type === "Nav"){
			setAnchorElNav(event.currentTarget);
		} else if(type === "About"){
			console.log("Hello")
			setAnchorElAbout(event.currentTarget);
		} else if(type === "Committee"){
			setAnchorElCommittee(event.currentTarget);
		} else if(type === "Details"){
			setAnchorElDetails(event.currentTarget);
		}
		
	};
	const handleCloseMenu = (event, type) => {
		if(type === "Nav"){
			setAnchorElNav(null);
		} else if(type === "About"){
			setAnchorElAbout(null);
		} else if(type === "Committee"){
			setAnchorElCommittee(null);
		} else if(type === "Details"){
			setAnchorElDetails(null);
		}
		
	};
	
	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Box
						component="img"
						sx={{mr: 2, display: {xs: 'none', md: 'flex'}}}
						alt="PEC Logo"
						src={Logo}/>
					<Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
						<Button
							key="Home"
							onClick={handleCloseMenu("Nav")}
							sx={{my: 2, color: 'white', display: 'block'}}
						><Link href="#" underline="hover">
							Home
						</Link>
						</Button>
						<Button
							key="About"
							onClick={handleOpenMenu("About")}
							sx={{my: 2, color: 'white', display: 'block'}}
						>AboutT
						</Button>
						<Menu
							id="fade-menu"
							MenuListProps={{
								'aria-labelledby': 'fade-button',
							}}
							anchorEl={anchorElAbout}
							// open={open}
							onClose={handleCloseMenu("About")}
							TransitionComponent={Fade}
						>
							<MenuItem onClick={handleCloseMenu("About")}>Profile</MenuItem>
							<MenuItem onClick={handleCloseMenu("About")}>My account</MenuItem>
							<MenuItem onClick={handleCloseMenu("About")}>Logout</MenuItem>
						</Menu>
						{menu.map((items) => (
							<Button
								key={items}
								onClick={handleCloseMenu("Nav")}
								sx={{my: 2, color: 'white', display: 'block'}}
							>
								{items}
							</Button>
						))}
					</Box>
					
					
					{/*<Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>*/}
					{/*	<IconButton*/}
					{/*		size="large"*/}
					{/*		aria-label="account of current user"*/}
					{/*		aria-controls="menu-appbar"*/}
					{/*		aria-haspopup="true"*/}
					{/*		onClick={handleOpenMenu("Nav")}*/}
					{/*		color="inherit"*/}
					{/*	>*/}
					{/*		<MenuIcon/>*/}
					{/*	</IconButton>*/}
					{/*	<Menu*/}
					{/*		id="menu-appbar"*/}
					{/*		anchorEl={anchorElNav}*/}
					{/*		anchorOrigin={{*/}
					{/*			vertical: 'bottom',*/}
					{/*			horizontal: 'left',*/}
					{/*		}}*/}
					{/*		keepMounted*/}
					{/*		transformOrigin={{*/}
					{/*			vertical: 'top',*/}
					{/*			horizontal: 'left',*/}
					{/*		}}*/}
					{/*		open={Boolean(anchorElNav)}*/}
					{/*		onClose={handleCloseMenu("Nav")}*/}
					{/*		sx={{*/}
					{/*			display: {xs: 'block', md: 'none'},*/}
					{/*		}}*/}
					{/*	>*/}
					{/*		{menu.map((item) => (*/}
					{/*			<MenuItem key={item} onClick={handleCloseMenu("Nav")}>*/}
					{/*				<Typography textAlign="center">{item}</Typography>*/}
					{/*			</MenuItem>*/}
					{/*		))}*/}
					{/*	</Menu>*/}
					{/*</Box>*/}
					{/*<Box*/}
					{/*	component="img"*/}
					{/*	sx={{flexGrow: 0.01, display: {xs: 'flex', md: 'none'} }}*/}
					{/*	alt="PEC Logo"*/}
					{/*	src={Logo}*/}
					{/*/>*/}
				
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default NavigationBar;
