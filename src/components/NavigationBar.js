import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
	.navbar {
		background-color: #222;
	}
	.navbar-brand,
	.navbar-nav .nav-link {
		color: #bbb;

		&:hover {
			color: #fff;
		}
	}
`;

export const NavigationBar = () => {
	return (
		<Styles>
			<Navbar expand="lg" variant="dark">
				<Container>
					<Navbar.Brand href="/">Code Life</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">
							<Nav.Link href="/">Home</Nav.Link>
							<Nav.Link href="/about">About</Nav.Link>
							<Nav.Link href="/news">News</Nav.Link>
							<Nav.Link href="/contact">Contact</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Styles>
	);
};
