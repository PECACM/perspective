import React from 'react'
import NavigationBar from "./NavigationBar";


//mui imports
import {Button, Grid} from "@mui/material";
import {Box} from '@mui/system';
import Carousel from './carousel/Carousel';
import About from './about/About';
import Committee from './conference_committees/Committee';
import Contact_us from './Contact_us/Contact_us';
import Important_details from './Important_details/Important_details';
import Sponsor from './sponsor/Sponsors';


import VisibilitySensor from 'react-visibility-sensor';

function Home(){
	const [sectionInView, setSectionInView] = React.useState("Home")
	
	function onChange(isVisible, name){
		console.log('Element is now %s', isVisible ? 'visible' : 'hidden', name);
		setSectionInView(name);
	}
	
	return (
		<div>
			
			<Grid container>
				<Grid item>
					<VisibilitySensor onChange={(event) => onChange(event, "Home")}>
						<div>
							
							<Grid item>
								<Box mb={5}>
									<NavigationBar props={sectionInView}/>
								</Box>
							</Grid>
							<Grid item>
								<Carousel/>
							</Grid>
							<Grid item>
								<Box m={5}>
									<Button variant="contained" color="primary">
										Primary Theme
									</Button>
									<Button variant="contained" color="secondary">
										Secondary Theme
									</Button>
								</Box>
							</Grid>
							{/* Navbar (Logo, items, register/login) */}
							{/* Picture carousel (Tagline, org by) */}
							{/* Sponsered by */}
						</div>
					</VisibilitySensor>
				</Grid>
				{/*<VisibilitySensor onChange={(event) => onChange(event, "About")}>*/}
				{/*	<div>/!* About *!/</div>*/}
				{/*</VisibilitySensor>*/}
				{/*<VisibilitySensor onChange={(event) => onChange(event, "Committee")}>*/}
				{/*	<div>/!* Conference committee *!/</div>*/}
				
				{/*</VisibilitySensor>*/}
				{/*<VisibilitySensor onChange={(event) => onChange(event, "Papers")}>*/}
				{/*	<div>/!* Call for papers *!/</div>*/}
				{/*</VisibilitySensor>*/}
				{/*<VisibilitySensor onChange={(event) => onChange(event, "Details")}>*/}
				{/*	<div>/!* Important details *!/</div>*/}
				{/*</VisibilitySensor>*/}
				{/*<VisibilitySensor onChange={(event) => onChange(event, "Contact")}>*/}
				{/*	<div>/!* Contact us (Footer) *!/</div>*/}
				{/*</VisibilitySensor>*/}
			</Grid>
		
      <Sponsor />
      <About />
      <Committee />
      <Important_details />
      <Contact_us />
		
		</div>
	);
}

export default Home