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

const NavigationBar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElAbout, setAnchorElAbout] = React.useState(null);
	const [anchorElCommittee, setAnchorElCommittee] = React.useState(null);
	const [anchorElDetails, setAnchorElDetails] = React.useState(null);
	const openAbout = Boolean(anchorElAbout);
	const openCommittee = Boolean(anchorElCommittee);
	const openDetails = Boolean(anchorElDetails);
	
	
	const handleOpenAbout = (event) => {
		setAnchorElAbout(event.currentTarget);
	};
	const handleCloseAbout = (event) => {
		setAnchorElAbout(null);
	};
	
	const handleOpenCommittee = (event) => {
		setAnchorElCommittee(event.currentTarget);
	};
	const handleCloseCommittee = (event) => {
		setAnchorElCommittee(null);
	};
	
	const handleOpenDetails = (event) => {
		setAnchorElDetails(event.currentTarget);
	};
	const handleCloseDetails = (event) => {
		setAnchorElDetails(null);
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
							sx={{my: 2, color: 'white', display: 'block'}}
						><Link href="#" color="white" underline="hover">Home</Link></Button>
						<Button
							key="About"
							onClick={handleOpenAbout}
							sx={{my: 2, color: 'white', display: 'block'}}
						>About</Button>
						<Menu
							id="fade-menu"
							MenuListProps={{
								'aria-labelledby': 'fade-button',
							}}
							anchorEl={anchorElAbout}
							open={openAbout}
							onClose={handleCloseAbout}
							TransitionComponent={Fade}
						>
							<MenuItem onClick={handleCloseAbout}><Link href="#" underline="hover">About Institute</Link></MenuItem>
							<MenuItem onClick={handleCloseAbout}><Link href="#" underline="hover">About Conference</Link></MenuItem>
						</Menu>
						<Button
							key="Commitee"
							onClick={handleOpenCommittee}
							sx={{my: 2, color: 'white', display: 'block'}}
						>Conference Committee</Button>
						<Menu
							id="fade-menu"
							MenuListProps={{
								'aria-labelledby': 'fade-button',
							}}
							anchorEl={anchorElCommittee}
							open={openCommittee}
							onClose={handleCloseCommittee}
							TransitionComponent={Fade}
						>
							<MenuItem onClick={handleCloseCommittee}><Link href="#" underline="hover">Organizing Committee</Link></MenuItem>
							<MenuItem onClick={handleCloseCommittee}><Link href="#" underline="hover">Advisory Board</Link></MenuItem>
						</Menu>
						<Button
							sx={{my: 2, color: 'white', display: 'block'}}
						><Link href="#" color="white" underline="hover">Call For Papers</Link></Button>
						<Button
							key="About"
							onClick={handleOpenDetails}
							sx={{my: 2, color: 'white', display: 'block'}}
						>Important Details
						</Button>
						<Menu
							id="fade-menu"
							MenuListProps={{
								'aria-labelledby': 'fade-button',
							}}
							anchorEl={anchorElDetails}
							open={openDetails}
							onClose={handleCloseDetails}
							TransitionComponent={Fade}
						>
							<MenuItem onClick={handleCloseDetails}><Link href="#" underline="hover">Important Dates</Link></MenuItem>
							<MenuItem onClick={handleCloseDetails}><Link href="#" underline="hover">Payment	Gateway</Link></MenuItem>
						</Menu>
						<Button
							sx={{my: 2, color: 'white', display: 'block'}}
						><Link href="#" color="white" underline="hover">Contact Us</Link></Button>
						
						<Button
							sx={{my: 2, color: 'white', display: 'block'}}
						><Link href="#" color="white" underline="hover">Login / Register</Link></Button>
					
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
