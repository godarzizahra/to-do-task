import { El } from '../Utils/El.js';

export function body() {
  return El({
    element: 'div',
    className:
      ' m-2 grid grid-cols-5  justify-center items-center text-center gap-1 ',
    children: [
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

      El({
        element: 'span',
        innerText: 'Walk the dog',
        className: 'border-2 p-2 border-gray-300 text-left',
      }),
      El({
        element: 'div',
        className: 'border-2 p-2 border-gray-300',
        children: [
          El({
            element: 'span',
            innerText: 'Low',
            className: 'rounded-full bg-[#ebebeb] py-1 px-3',
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'border-2 p-2 border-gray-300',
        children: [
          El({
            element: 'span',
            innerText: 'Todo',
            className: 'rounded-full bg-[#dc3545] text-white py-1 px-3',
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'border-2 p-2 border-gray-300',
        children: [
          El({
            element: 'span',
            innerText: '-',
            className: 'rounded-full border-1 border-blue-400  py-1 px-3',
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
            className: 'w-6 bg-red-500  rounded-xs',
          }),
          El({
            element: 'img',
            src: '../../public/pencil-svgrepo-com.svg',
            className: 'w-6 bg-blue-500  rounded-xs ',
          }),
          El({
            element: 'img',
            src: '../../public/eye-svgrepo-com.svg',
            className: 'w-6 bg-gray-400  rounded-xs',
          }),
        ],
      }),
    ],
  });
}
