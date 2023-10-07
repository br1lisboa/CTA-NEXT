import React from "react";
interface BotonProps  {
  className?: string;
  children:  React.ReactNode;
  onClick?: () => void; 
  type:string
}
export function Boton(props: BotonProps){
    const {children, className, onClick,type } = props
    return (
        <button
      className={`rounded-lg py-2 px-4 text-center ${className}`}
      onClick={onClick}  
    >
            {children}
        </button>
    )
}

