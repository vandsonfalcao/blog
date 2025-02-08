"use client";

import { markdownToHtml } from "@/utils/markdownToHtml";
import { useEffect, useState } from "react";

type Props = {
	content: string;
};
export const Markdown = (props: Props) => {
	const [content, setContent] = useState<string | null>(null);
	useEffect(() => {
		async function makeContent() {
			const html = await markdownToHtml(props.content);
			setContent(html);
		}

		makeContent();
	}, [props.content]);
	if (!content) return null;
	return <div dangerouslySetInnerHTML={{ __html: content }} />;
};
