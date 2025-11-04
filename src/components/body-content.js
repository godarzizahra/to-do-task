import { El } from '../Utils/El.js';

export function body() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  const headerRow = [
    El({
      element: 'div',
      innerText: 'Task Name',
      className: 'border-2 p-2 border-gray-300 text-left',
    }),
    El({
      element: 'div',
      innerText: 'Priority',
      className: 'border-2 p-2 border-gray-300',
    }),
    El({
      element: 'div',
      innerText: 'Status',
      className: 'border-2 p-2 border-gray-300',
    }),
    El({
      element: 'div',
      innerText: 'Deadline',
      className: 'border-2 p-2 border-gray-300',
    }),
    El({
      element: 'div',
      innerText: 'Actions',
      className: 'border-2 p-2 border-gray-300',
    }),
  ];

  // برای هر تسک، یه ردیف جدید بساز
  const taskRows = tasks.flatMap((task) => [
    El({
      element: 'span',
      innerText: task.name,
      className: 'border-2 p-2 border-gray-300 text-left',
    }),
    El({
      element: 'div',
      className: 'border-2 p-2 border-gray-300',
      children: [
        El({
          element: 'span',
          innerText: task.priority,
          className:
            task.priority === 'High'
              ? 'rounded-full bg-[#dc3545] text-white py-1 px-3'
              : task.priority === 'Medium'
              ? 'rounded-full bg-[#28a745] text-black py-1 px-3'
              : 'rounded-full bg-[#bdb2b2] text-white py-1 px-3',
        }),
      ],
    }),
    El({
      element: 'div',
      className: 'border-2 p-2 border-gray-300',
      children: [
        El({
          element: 'span',
          innerText: task.status,
          className:
            task.status === 'Todo'
              ? 'rounded-full bg-[#dc3545] text-white py-1 px-3'
              : task.status === 'Doing'
              ? 'rounded-full bg-[#ffc107] text-black py-1 px-3'
              : 'rounded-full bg-[#28a745] text-white py-1 px-3',
        }),
      ],
    }),
    El({
      element: 'div',
      className: 'border-2 p-2 border-gray-300',
      children: [
        El({
          element: 'span',
          innerText: task.deadline || '-',
          className: 'rounded-full border-1 border-blue-400 py-1 px-3',
        }),
      ],
    }),
    El({
      element: 'div',
      className:
        'border-2 p-2 border-gray-300 flex justify-center items-center gap-4 ',
      children: [
        El({
          element: 'img',
          src: '../../public/trash-blank-alt-svgrepo-com.svg',
          className: 'w-6 bg-red-500 rounded-xs cursor-pointer',
          eventListener: [
            {
              event: 'click',
              callback: () => {
                // حذف تسک از لوکال استورج
                const updatedTasks = tasks.filter((t) => t.name !== task.name);
                localStorage.setItem('tasks', JSON.stringify(updatedTasks));
                location.reload();
              },
            },
          ],
        }),
        El({
          element: 'img',
          src: '../../public/pencil-svgrepo-com.svg',
          className: 'w-6 bg-blue-500 rounded-xs cursor-pointer',
        }),
        El({
          element: 'img',
          src: '../../public/eye-svgrepo-com.svg',
          className: 'w-6 bg-gray-400 rounded-xs cursor-pointer',
        }),
      ],
    }),
  ]);

  return El({
    element: 'div',
    className:
      'm-2 grid grid-cols-5 justify-center items-center text-center gap-1',
    children: [...headerRow, ...taskRows],
  });
}
