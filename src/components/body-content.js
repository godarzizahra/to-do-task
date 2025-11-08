import { El } from "../Utils/El.js";
import { Modal } from "./modal.js";

export function body() {
	const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

	const headerRow = [
		El({
			element: "div",
			innerText: "Task Name",
			className: "border-2 p-2 border-gray-300 text-left",
		}),
		El({
			element: "div",
			innerText: "Priority",
			className: "border-2 p-2 border-gray-300",
		}),
		El({
			element: "div",
			innerText: "Status",
			className: "border-2 p-2 border-gray-300",
		}),
		El({
			element: "div",
			innerText: "Deadline",
			className: "border-2 p-2 border-gray-300",
		}),
		El({
			element: "div",
			innerText: "Actions",
			className: "border-2 p-2 border-gray-300",
		}),
	];

	//
	const taskRows = tasks.flatMap((task) => [
		El({
			element: "span",
			innerText: task.name,
			className: "border-2 p-2 border-gray-300 text-left",
		}),
		El({
			element: "div",
			className: "border-2 p-2 border-gray-300",
			children: [
				El({
					element: "span",
					innerText: task.priority,
					className:
						task.priority === "High"
							? "rounded-full bg-[#dc3545] text-white py-1 px-3"
							: task.priority === "Medium"
							? "rounded-full bg-[#28a745] text-black py-1 px-3"
							: "rounded-full bg-[#bdb2b2] text-white py-1 px-3",
				}),
			],
		}),
		El({
			element: "div",
			className: "border-2 p-2 border-gray-300",
			children: [
				El({
					element: "span",
					innerText: task.status,
					className:
						task.status === "Todo"
							? "rounded-full bg-[#dc3545] text-white py-1 px-3"
							: task.status === "Doing"
							? "rounded-full bg-[#ffc107] text-black py-1 px-3"
							: "rounded-full bg-[#28a745] text-white py-1 px-3",
				}),
			],
		}),
		El({
			element: "div",
			className: "border-2 p-2 border-gray-300",
			children: [
				El({
					element: "span",
					innerText: task.deadline || "-",
					className: "rounded-full border-1 border-blue-400 py-1 px-3",
				}),
			],
		}),
		El({
			element: "div",
			className:
				"border-2 p-2 border-gray-300 flex justify-center items-center gap-4 ",
			children: [
				//
				El({
					element: "img",
					src: "../../public/trash-blank-alt-svgrepo-com.svg",
					className: "w-6 bg-red-500 rounded-xs cursor-pointer",
					eventListener: [
						{
							event: "click",
							callback: () => {
								const updatedTasks = tasks.filter((t) => t.id !== task.id);
								localStorage.setItem("tasks", JSON.stringify(updatedTasks));
								location.reload();
							},
						},
					],
				}),
				//
				El({
					element: "img",
					src: "../../public/pencil-svgrepo-com.svg",
					className: "w-6 bg-blue-500 rounded-xs cursor-pointer",
					eventListener: [
						{
							event: "click",
							callback: () => {
								document.body.append(Modal(task));
							},
						},
					],
				}),
				//
				El({
					element: "img",
					src: "../../public/eye-svgrepo-com.svg",
					className: "w-6 bg-gray-400 rounded-xs cursor-pointer",
					onclick: () => showTaskModal(task),
				}),
			],
		}),
	]);

	return El({
		element: "div",
		className:
			"m-2 grid grid-cols-5 justify-center items-center text-center gap-1",
		children: [...headerRow, ...taskRows],
	});
}

function showTaskModal(task) {
	const modal = El({
		element: "div",
		className:
			"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center",
		children: [
			El({
				element: "div",
				className: "bg-white p-6 rounded-lg w-96 shadow-lg relative",
				children: [
					El({
						element: "h2",
						innerText: "Task Details",
						className: "text-xl font-semibold mb-4",
					}),
					El({
						element: "p",
						innerText: `Name: ${task.name}`,
						className: "mb-2",
					}),
					El({
						element: "p",
						innerText: `Priority: ${task.priority}`,
						className: "mb-2",
					}),
					El({
						element: "p",
						innerText: `Status: ${task.status}`,
						className: "mb-2",
					}),
					El({
						element: "p",
						innerText: `Deadline: ${task.deadline || "-"}`,
						className: "mb-4",
					}),
					El({
						element: "p",
						innerText: `Details: ${task.details || "-"}`,
						className: "mb-4",
					}),
					El({
						element: "button",
						innerText: "Close",
						className:
							"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600",
						onclick: () => document.body.removeChild(modal),
					}),
				],
			}),
		],
	});

	document.body.appendChild(modal);
}
