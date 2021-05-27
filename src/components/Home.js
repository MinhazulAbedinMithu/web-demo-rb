import React from "react";
import { TopHeadLines } from "./TopHeadLines";

export const Home = () => (
	<div>
		<h1 className="text-primary">Hello World</h1>
		<p>
			"Hello, World!" programs vary in complexity between different languages.
			In some languages, particularly scripting languages, the "Hello, World!"
			program can be written as a single statement, while in others
			(particularly many low-level languages) there can be many more statements
			required. For example, in Python, to print the string Hello, World!
			followed by a newline, one only needs to write print("Hello, World!"). In
			contrast, the equivalent code in C++ [1] requires the import of the
			input/output software library, the manual declaration of an entry point,
			and the explicit instruction that the output string should be sent to the
			standard output stream. Generally, programming languages that give the
			programmer more control over the machine will result in more complex
			"Hello, World" programs.
		</p>
		<TopHeadLines />
	</div>
);
