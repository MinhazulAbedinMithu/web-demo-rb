import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

export const News = (props) => {
	const { title, description, url, urlToImage } = props.article;

	return (
		<Card className="d-flex m-4 rounded">
			<Row>
				<Col md="6">
					<Card.Header>
						<img src={urlToImage} className="w-100" />
					</Card.Header>
				</Col>
				<Col md="6">
					<Card.Body>
						<Card.Title>{title}</Card.Title>
						<Card.Text>{description}</Card.Text>
						<Button variant="primary" href={url}>
							Go somewhere
						</Button>
					</Card.Body>
				</Col>
			</Row>
		</Card>
	);
};
