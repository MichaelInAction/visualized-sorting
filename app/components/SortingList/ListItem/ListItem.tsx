import React from 'react';

interface IProps {
    title: string;
  }

function ListItem(props: IProps) {
  return (
    <a href="#" className="transition ease-in-out group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500 hover:scale-125">
        <div className="transition ease-in-out flex items-center space-x-3">
            <h3 className="transition ease-in-outtext-slate-900 group-hover:text-white text-sm font-semibold">{ props.title }</h3>
        </div>
        <p className="transition ease-in-out text-slate-500 group-hover:text-white text-sm">Create a new project from a variety of starting templates.</p>
    </a>
  );
}

export default ListItem;
