import  { ChangeEvent, FocusEvent, useState } from "react";
import { cn } from "@/utils/cn";
import { IconEye } from "../icons/IconEye";
import { IconEyeOff } from "../icons/IconEyeOff";
import { UseFormRegisterReturn } from "react-hook-form";

type inputProps = {
  type?: "password" | "text" | "email" | "number" | "date";
  name: string;
  title: string;
  placeholder: string;
  error?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  autocomplete?: string;
  className?: string;
  register?: UseFormRegisterReturn;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlurHandler?: (e: FocusEvent<HTMLInputElement>) => void;
};

const Input = ({
  type = "text",
  name,
  title,
  placeholder,
  error,
  register,
  className,
  onChange,
  onBlurHandler,
  readOnly = false,
  required = false,
  autocomplete,
  disabled = false,
}: inputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="w-full font-medium">
      <label className="text-sm text-primary ">
        {title} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <input
          autoComplete={autocomplete}
          readOnly={readOnly}
          className={cn(
            "border border-primary-100 focus-within:outline-black text-primary placeholder:text-secondary placeholder:font-light w-full rounded-md mt-2 px-[14px] py-[10px]",
            {
              [`${className}`]: !!className,
            }
          )}
          name={name}
          type={showPassword ? "text" : type}
          id={name}
          placeholder={placeholder}
          onChange={
            onChange
              ? (e: ChangeEvent<HTMLInputElement>) => onChange(e)
              : undefined
          }
          onBlur={
            onBlurHandler
              ? (e: FocusEvent<HTMLInputElement>) => onBlurHandler(e)
              : undefined
          }
          {...register}
          disabled={disabled}
        />

        {type === "password" && (
          <span
            className="absolute top-1/2 -translate-y-1/4 right-3 cursor-pointer"
            onClick={togglePassword}
          >
            {showPassword ? (
              <IconEyeOff size={16} stroke={1} />
            ) : (
              <IconEye size={16} stroke={1} />
            )}
          </span>
        )}
      </div>
      {error && (
        <p className="text-yellow-600 mt-1 text-xs font-light">{error}</p>
      )}
    </div>
  );
};

export default Input;
