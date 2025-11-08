import { El } from "../Utils/El.js";

export function footer(currentPage, totalPages, onPrev, onNext) {
	return El({
		element: "div",
		className: "flex gap-2 justify-end items-center px-4 mt-4",
		children: [
			El({
				element: "button",
				innerText: "<",
				className: `border rounded-sm px-3 py-1 ${
					currentPage === 1
						? "opacity-50 cursor-not-allowed"
						: "hover:bg-gray-200"
				}`,
				eventListener:
					currentPage > 1 ? [{ event: "click", callback: onPrev }] : [],
			}),
			El({
				element: "span",
				innerText: `Page ${currentPage} of ${totalPages}`,
				className: "text-gray-700 font-semibold",
			}),
			El({
				element: "button",
				innerText: ">",
				className: `border rounded-sm px-3 py-1 ${
					currentPage === totalPages
						? "opacity-50 cursor-not-allowed"
						: "hover:bg-gray-200"
				}`,
				eventListener:
					currentPage < totalPages
						? [{ event: "click", callback: onNext }]
						: [],
			}),
		],
	});
}
