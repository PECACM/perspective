import React, {Component} from "react";

import Navbar from "reactjs-navbar";
import logo from "../static/pec-logo.png";
import {TailSpin} from "react-loader-spinner";

import "reactjs-navbar/dist/index.css";

class NavigationBar extends Component{
	
	render(){
		return (
			<Navbar
				logo={logo}
				loader={<TailSpin color="#00BFFF" height={80} width={80}/>}
				menuItems={[
					{
						title: "Home",
						isAuth: true,
						onClick: () => {
							// What you want to do...
							alert("Its coffee time...");
						},
					},
					
					{
						title: "About",
						isAuth: true,
						subItems: [
							{
								title: "About Institute",
								isAuth: true,
								onClick: () => {
									// What you want to do...
									alert("Its About Institue time...");
								},
							},
							{
								title: "About Conference",
								isAuth: true,
								onClick: () => {
									// What you want to do...
									alert("Its About Conference time...");
								},
							}
						],
					},
					{
						title: "Conference Commitee",
						isAuth: true,
						subItems: [
							{
								title: "Organizing Committee",
								isAuth: true,
								onClick: () => {
									// What you want to do...
									alert("Its Org Com time...");
								},
							},
							{
								title: "Advisory Board",
								isAuth: true,
								onClick: () => {
									// What you want to do...
									alert("Its Advisory Board time...");
								},
							}
						],
					},
					{
						title: "Call for Papers",
						isAuth: true,
						onClick: () => {
							// What you want to do...
							alert("Its Call for Papers time...");
						},
					},
					{
						title: "Important Details",
						isAuth: true,
						subItems: [
							{
								title: "Important Dates",
								isAuth: true,
								onClick: () => {
									// What you want to do...
									alert("I need another cup Dates of coffee...");
								},
							},
							{
								title: "Payment Gateway",
								isAuth: true,
								onClick: () => {
									// What you want to do...
									alert("I need another cup Payment of coffee...");
								},
							},
						],
					},
					{
						title: "Contact Us",
						isAuth: true,
						onClick: () => {
							// What you want to do...
							alert("I need another cup Contact US of coffee...");
						},
					},
					{
						title: "Register/Login",
						isAuth: true,
						onClick: () => {
							// What you want to do...
							alert("I need another cup Register/Login of coffee...");
						},
					},
				]}
			/>
		);
	}
}

export default NavigationBar