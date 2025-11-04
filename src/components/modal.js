import { El } from '../Utils/El.js';

export function Modal() {
  const overlay = El({
    element: 'div',
    className:
      'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50',
  });

  const box = El({
    element: 'div',
    className:
      'p-5 w-2/3 text-white bg-[#6200ea] flex flex-col gap-5 items-center rounded-sm shadow-lg',
    children: [
      El({
        element: 'h1',
        innerText: 'Add New Task',
        className: 'text-xl',
      }),
      El({
        element: 'div',
        className: 'p-5 w-100 grid grid-cols-2 gap-10 rounded-sm',
        children: [
          El({ element: 'label', innerText: 'your Task' }),
          El({
            element: 'input',
            type: 'text',
            className: 'w-full border p-1 rounded-sm',
            id: 'task-name',
          }),
          El({ element: 'label', innerText: 'task priority' }),
          El({
            element: 'select',
            className: 'w-full border p-1 rounded-sm',
            id: 'task-priority',
            children: [
              El({
                element: 'option',
                innerText: 'Low',
                className: 'bg-[#6200ea]',
              }),
              El({
                element: 'option',
                innerText: 'Medium',
                className: 'bg-[#6200ea]',
              }),
              El({
                element: 'option',
                innerText: 'High',
                className: 'bg-[#6200ea]',
              }),
            ],
          }),
          El({ element: 'label', innerText: 'task status' }),
          El({
            element: 'select',
            className: 'w-full border p-1 rounded-sm',
            id: 'task-status',
            children: [
              El({
                element: 'option',
                innerText: 'Todo',
                className: 'bg-[#6200ea]',
              }),
              El({
                element: 'option',
                innerText: 'Doing',
                className: 'bg-[#6200ea]',
              }),
              El({
                element: 'option',
                innerText: 'Done',
                className: 'bg-[#6200ea]',
              }),
            ],
          }),
          El({ element: 'label', innerText: 'task deadline' }),
          El({
            element: 'input',
            type: 'date',
            className: 'w-full border p-1 rounded-sm',
            id: 'task-deadline',
          }),
          El({ element: 'label', innerText: 'task details' }),
          El({
            element: 'input',
            className: 'w-full h-20 border p-1 rounded-sm',
            id: 'task-details',
          }),
          El({
            element: 'button',
            innerText: 'Save',
            className:
              'w-full col-span-full border p-1 rounded-sm bg-white text-[#6200ea] font-semibold',
            eventListener: [
              {
                event: 'click',
                callback: () => {
                  const taskData = {
                    name: document.getElementById('task-name').value,
                    priority: document.getElementById('task-priority').value,
                    status: document.getElementById('task-status').value,
                    deadline: document.getElementById('task-deadline').value,
                    details: document.getElementById('task-details').value,
                  };
                  const existing =
                    JSON.parse(localStorage.getItem('tasks')) || [];
                  existing.push(taskData);
                  localStorage.setItem('tasks', JSON.stringify(existing));

                  alert('tasks saved successfully!');
                  overlay.remove();
                },
              },
            ],
          }),

          El({
            element: 'button',
            innerText: 'Close',
            className:
              'w-full col-span-full border p-1 rounded-sm bg-[#b840f3] text-white hover:bg-[#9c32d9]',
            eventListener: [
              {
                event: 'click',
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
