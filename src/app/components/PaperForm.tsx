"use client";
import { useEffect } from "react";

interface Props {
  formSlug: string
  showSpinner?: number
}

const PaperForm = ({ formSlug, showSpinner = 1 }: Props) => {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://paperform.co/__embed.min.js";
		document.body.appendChild(script);
	}, []);

	return <div data-paperform-id={formSlug} data-spinner={showSpinner} />;
};
export default PaperForm;
