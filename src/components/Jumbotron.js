import { Button } from "react-bootstrap";
import React from "react";
import { Jumbotron as Jumbo } from "react-bootstrap";
export const Jumbotron = () => (
	<div>
		<Jumbo>
			<h1>Breaking News!</h1>
			<p>
				This is a simple hero unit, a simple jumbotron-style component for
				calling extra attention to featured content or information.
			</p>
			<p>
				<Button variant="primary">Learn more</Button>
			</p>
		</Jumbo>
	</div>
);
