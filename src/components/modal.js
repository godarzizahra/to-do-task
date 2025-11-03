import { El } from '../Utils/El.js';

export function modal() {
  return El({
    element: 'div',
    className:
      'p-5 w-2/3 text-white bg-[#6200ea]  flex flex-col gap-5  items-center rounded-sm ',
    children: [
      El({
        element: 'h1',
        innerText: 'Add New Task',
        className: 'text-xl ',
      }),
      El({
        element: 'div',
        className: 'p-5 w-100 border-1 grid grid-cols-2 gap-10 rounded-sm ',
        children: [
          El({
            element: 'label',
            innerText: 'your Task',
          }),
          El({
            element: 'input',
            type: 'text',
            className: 'w-full border-1 p-1 rounded-sm ',
          }),
          El({
            element: 'label',
            innerText: 'task priority',
          }),
          El({
            element: 'select',
            className: 'w-full border-1 p-1 rounded-sm ',
          }),
          El({
            element: 'label',
            innerText: 'task status',
          }),
          El({
            element: 'select',
            className: 'w-full border-1 p-1 rounded-sm ',
          }),
          El({
            element: 'label',
            innerText: 'task deadline',
          }),
          El({
            element: 'input',
            type: 'date',
            className: 'w-full border-1 p-1 rounded-sm ',
          }),
          El({
            element: 'label',
            innerText: 'task details',
          }),
          El({
            element: 'input',
            className: 'w-full border-1 p-1 rounded-sm ',
          }),
          El({
            element: 'button',
            className: 'w-full col-span-full border-1 p-1 rounded-sm ',
            innerText: 'save',
          }),
        ],
      }),
    ],
  });
}
