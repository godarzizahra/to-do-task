import { El } from "../Utils/El.js";
export function footer() {
	return El({
		element: "div",
		className: "flex gap-2 justify-end items-center px-4",
		children: [
			El({
				element: "button",
				innerText: "<",
				className: "border-1 rounded-sm ",
			}),
			El({
				element: "span",
				innerText: "page 1",
			}),
			El({
				element: "button",
				innerText: ">",
				className: "border-1 rounded-sm ",
			}),
		],
	});
}
