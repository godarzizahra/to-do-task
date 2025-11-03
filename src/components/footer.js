import { El } from '../Utils/El.js';
export function footer() {
  return El({
    element: 'div',
    className: 'flex gap-2 justify-end items-center',
    children: [
      El({
        element: 'button',
        innerText: '<',
        className: 'border-1 rounded-sm p-1',
      }),
      El({
        element: 'span',
        innerText: 'page 1',
      }),
      El({
        element: 'button',
        innerText: '>',
        className: 'border-1 rounded-sm p-1',
      }),
    ],
  });
}
