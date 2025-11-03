import { El } from '../Utils/El.js';
export function header() {
  return El({
    element: 'div',
    className: 'w-full h-12 bg-[#6200ea] flex justify-between items-center',
    children: [
      El({
        element: 'div',
        className: 'flex gap-3 ml-2',
        children: [
          El({
            element: 'img',
            src: '../../public/list-ul-svgrepo-com.svg',
            alt: 'list-svg',
            className: 'w-8 ',
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
          El({
            element: 'img',
            src: '../../public/filter-svgrepo-com.svg',
            alt: 'filter-svg',
            className: 'w-5',
          }),
          El({
            element: 'img',
            src: '../../public/square-plus-svgrepo-com.svg',
            alt: 'square-plus-svg',
            className: 'w-5',
          }),
        ],
      }),
    ],
  });
}
