import React from 'react';

const icon = (viewBox, paths) => ({ className, color, style, ...rest }) => (
    <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox={viewBox}
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={color ? { color, ...style } : style}
        {...rest}
    >
        {paths}
    </svg>
);

export const AiOutlinePlusSquare = icon('0 0 1024 1024', <>
    <path d="M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z" />
    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" />
</>);

export const AiOutlineMinusSquare = icon('0 0 1024 1024', <>
    <path d="M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z" />
    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" />
</>);

export const MdBarChart = icon('0 0 24 24', <>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z" />
</>);

export const FaFolderOpen = icon('0 0 576 512',
    <path d="M572.694 292.093L500.27 416.248A63.997 63.997 0 0 1 444.989 448H45.025c-18.523 0-30.064-20.093-20.731-36.093l72.424-124.155A64 64 0 0 1 152 256h399.964c18.523 0 30.064 20.093 20.73 36.093zM152 224h328v-48c0-26.51-21.49-48-48-48H272l-64-64H48C21.49 64 0 85.49 0 112v278.046l69.077-118.418C86.214 242.25 117.989 224 152 224z" />
);
