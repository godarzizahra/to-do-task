// modal.js
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
          }),
          El({ element: 'label', innerText: 'task priority' }),
          El({
            element: 'select',
            className: 'w-full border p-1 rounded-sm',
          }),
          El({ element: 'label', innerText: 'task status' }),
          El({
            element: 'select',
            className: 'w-full border p-1 rounded-sm',
          }),
          El({ element: 'label', innerText: 'task deadline' }),
          El({
            element: 'input',
            type: 'date',
            className: 'w-full border p-1 rounded-sm',
          }),
          El({ element: 'label', innerText: 'task details' }),
          El({
            element: 'input',
            className: 'w-full border p-1 rounded-sm',
          }),
          El({
            element: 'button',
            innerText: 'Save',
            className:
              'w-full col-span-full border p-1 rounded-sm bg-white text-[#6200ea] font-semibold',
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
