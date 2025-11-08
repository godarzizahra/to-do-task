import { El } from "../Utils/El.js";

export function Modal(task = null) {
	const overlay = El({
		element: "div",
		className:
			"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
	});

	const box = El({
		element: "div",
		className:
			"p-5 w-2/3 text-white bg-[#6200ea] flex flex-col gap-5 items-center rounded-sm shadow-lg",
		children: [
			El({
				element: "h1",
				innerText: task ? "Edit Task" : "Add New Task",
				className: "text-xl",
			}),
			El({
				element: "div",
				className: "p-5 w-100 grid grid-cols-2 gap-10 rounded-sm",
				children: [
					El({ element: "label", innerText: "your Task" }),
					El({
						element: "input",
						type: "text",
						id: "task-name",
						className: "w-full border p-1 rounded-sm",
						value: task?.name || "",
					}),
					El({ element: "label", innerText: "task priority" }),
					El({
						element: "select",
						id: "task-priority",
						className: "w-full border p-1 rounded-sm",
						children: [
							...["Low", "Medium", "High"].map((p) =>
								El({
									element: "option",
									className: "bg-[#6200ea]",
									innerText: p,
									selected: task?.priority === p,
								})
							),
						],
					}),
					El({ element: "label", innerText: "task status" }),
					El({
						element: "select",
						id: "task-status",
						className: "w-full border p-1 rounded-sm",
						children: [
							...["Todo", "Doing", "Done"].map((s) =>
								El({
									element: "option",
									className: "bg-[#6200ea]",
									innerText: s,
									selected: task?.status === s,
								})
							),
						],
					}),
					El({ element: "label", innerText: "task deadline" }),
					El({
						element: "input",
						type: "date",
						id: "task-deadline",
						value: task?.deadline || "",
						className: "w-full border p-1 rounded-sm",
					}),
					El({ element: "label", innerText: "task details" }),
					El({
						element: "input",
						id: "task-details",
						className: "w-full h-20 border p-1 rounded-sm",
						value: task?.details || "",
					}),
					El({
						element: "button",
						innerText: "Save",
						className:
							"w-full col-span-full border p-1 rounded-sm bg-white text-[#6200ea] font-semibold",
						eventListener: [
							{
								event: "click",
								callback: () => {
									const newData = {
										id: task?.id || Date.now(),
										name: document.getElementById("task-name").value,
										priority: document.getElementById("task-priority").value,
										status: document.getElementById("task-status").value,
										deadline: document.getElementById("task-deadline").value,
										details: document.getElementById("task-details").value,
									};

									let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

									if (task) {
										const index = tasks.findIndex((t) => t.id === task.id);
										tasks[index] = newData;
									} else {
										tasks.push(newData);
									}

									localStorage.setItem("tasks", JSON.stringify(tasks));
									overlay.remove();
									location.reload();
								},
							},
						],
					}),
					El({
						element: "button",
						innerText: "Close",
						className:
							"w-full col-span-full border p-1 rounded-sm bg-[#b840f3] text-white hover:bg-[#9c32d9]",
						eventListener: [
							{
								event: "click",
								callback: () => overlay.remove(),
							},
						],
					}),
				],
			}),
		],
	});

	overlay.append(box);
	return overlay;
}
