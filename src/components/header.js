import { El } from '../Utils/El.js';
import '../assets/square-plus.svg';
export function header() {
  return El({
    element: 'div',
    className: 'w-full h-12 bg-[#6200ea] flex justify-between items-center',
    children: [
      El({
        element: 'div',
        className: 'flex gap-5 ml-2',
        children: [
          El({
            element: 'img',
            src: '../assets/list.svg',
            alt: 'list-svg',
          }),
          El({
            element: 'div',
            innerText: 'My To-Do Tasks',
            className: 'text-white',
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'flex gap-5 mr-2',
        children: [
          El({
            element: 'div',
            className: 'flex ',
            children: [
              El({
                element: 'button',
                type: 'submit',
                className: 'p-1 rounded-l-lg bg-[#7926ed] text-black',
                innerText: '🔍',
              }),
              El({
                element: 'input',
                id: 'search',
                className: 'p-1 rounded-r-lg text-white  bg-[#7926ed]',
                placeholder: 'search',
              }),
            ],
          }),
          El({ element: 'img', src: '/assets/filter.svg', alt: 'filter-svg' }),
          El({
            element: 'img',
            src: '/assets/square-plus.svg',
            alt: 'square-plus-svg',
          }),
        ],
      }),
    ],
  });
}
