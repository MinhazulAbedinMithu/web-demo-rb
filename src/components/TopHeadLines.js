import React, { useEffect, useState } from "react";
import { News } from "./News";

export const TopHeadLines = () => {
	const url =
		"https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=dc132a8c8d5d411f91f9daa1e1bfeb8b";

	const [ articles, setArticles ] = useState([]);
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setArticles(data.articles));
	}, []);

	return (
		<div>
			<h1>Top Headlines : {articles.length}</h1>
      {articles.map((article) => <News article={article}/>)}
		</div>
	);
};
