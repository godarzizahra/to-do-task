import { El } from "../Utils/El.js";
import { footer } from "./footer.js";
import { Modal } from "./modal.js";

export function body() {
	const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

	const tasksPerPage = 5;
	let currentPage = 1;

	const tableContainer = El({
		element: "div",
		className:
			"m-2 grid grid-cols-5 justify-center items-center text-center gap-1",
	});

	const footerContainer = El({
		element: "div",
		className: "mt-4",
	});

	const container = El({
		element: "div",
		className: "flex flex-col",
		children: [tableContainer, footerContainer],
	});

	function showTaskModal(task) {
		const modal = El({
			element: "div",
			className:
				"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
			children: [
				El({
					element: "div",
					className: "bg-white p-6 rounded-lg shadow-lg w-80",
					children: [
						El({
							element: "h2",
							innerText: "Task Details",
							className: "text-xl font-bold mb-4",
						}),
						El({
							element: "p",
							innerText: `Name: ${task.name}`,
						}),
						El({
							element: "p",
							innerText: `Priority: ${task.priority}`,
						}),
						El({
							element: "p",
							innerText: `Status: ${task.status}`,
						}),
						El({
							element: "p",
							innerText: `Deadline: ${task.deadline || "-"}`,
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
								"mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600",
							eventListener: [
								{
									event: "click",
									callback: () => modal.remove(),
								},
							],
						}),
					],
				}),
			],
		});

		document.body.append(modal);
	}

	function render() {
		const start = (currentPage - 1) * tasksPerPage;
		const end = start + tasksPerPage;
		const visibleTasks = tasks.slice(start, end);

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

		const taskRows = visibleTasks.flatMap((task) => [
			El({
				element: "div",
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
					"border-2 p-2 border-gray-300 flex justify-center items-center gap-4",
				children: [
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
									tasks.splice(0, tasks.length, ...updatedTasks);
									container.replacechildren(...render());
								},
							},
						],
					}),
					El({
						element: "img",
						src: "../../public/pencil-svgrepo-com.svg",
						className: "w-6 bg-blue-500 rounded-xs cursor-pointer",
						eventListener: [
							{
								event: "click",
								callback: () => document.body.append(Modal(task)),
							},
						],
					}),
					El({
						element: "img",
						src: "../../public/eye-svgrepo-com.svg",
						className: "w-6 bg-gray-400 rounded-xs cursor-pointer",
						eventListener: [
							{
								event: "click",
								callback: () => showTaskModal(task),
							},
						],
					}),
				],
			}),
		]);

		const totalPages = Math.ceil(tasks.length / tasksPerPage);

		tableContainer.replaceChildren(...headerRow, ...taskRows);

		footerContainer.replaceChildren(
			footer(
				currentPage,
				totalPages,
				() => {
					if (currentPage > 1) {
						currentPage--;
						render();
					}
				},
				() => {
					if (currentPage < totalPages) {
						currentPage++;
						render();
					}
				}
			)
		);
	}

	render();

	return container;
}
