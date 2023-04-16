import React, { ButtonHTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";

export const buttonStyles = cva(
  "py-2 px-3 rounded active:scale-90 transition-all active:brightness-75 flex gap-2 items-center fill-current justify-center",
  {
    variants: {
      variant: {
        filled: "bg-orange-600 text-white hover:bg-orange-500",
        white: "bg-white text-black hover:bg-gray-100",
      },

      textSize: {
        sm: "text-sm",
        xs: "text-xs",
      },

      font: {
        bold: "font-bold",
      },

      w: {
        full: "w-full",
        max: "w-max",
      },
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  children?: React.ReactNode;

  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;

  onClick?: any;
  className?: string;
}

export default function UiButton(props: ButtonProps) {
  const style = buttonStyles({
    variant: props.variant,
    textSize: props.textSize,
    font: props.font,
    w: props.w,
    className: props.className,
  });

  return (
    <button className={style}>
      <span className="mt-1">{props.startIcon}</span>
      {props.children}
      <span className="mt-1">{props.endIcon}</span>
    </button>
  );
}