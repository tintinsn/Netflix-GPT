import { ChangeEvent, RefObject } from "react";

interface InputProps {
  id: string;
  name?: string;
  parentRef?: RefObject<HTMLInputElement>;
  label: string;
  type?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  parentRef,
  onChange,
  value,
  label,
  type,
  name,
  error,
}) => {
  return (
    <div className="relative flex flex-col">
      <input
        ref={parentRef}
        value={value}
        name={name}
        id={id}
        type={type}
        onChange={onChange}
        className=" w-full  text-white rounded-md pt-6 z-10 px-4 pb-2 text-md leading-normal appearance-none   bg-[rgb(22,22,22)] bg-opacity-70 border border-[rgb(128,128,128)] border-opacity-100 focus:outline-offset-2 focus:outline-white focus:outline focus:outline-2 peer focus:ring-0 peer"
        placeholder=" "
      />
      <label
        htmlFor={id}
        className="absolute text-white text-base duration-200 left-4 right-4 top-4 z-0   transform -translate-y-3 scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
      >
        {label}
      </label>
      {error && (
        <div className="text-sm font-normal mt-2 text-[rgb(235,57,66)] flex items-end justify-start gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            role="img"
            data-icon="CircleXSmall"
            aria-hidden="true"
            className=""
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z"
              fill="currentColor"
            ></path>
          </svg>
          <span className="leading-none">{error}</span>
        </div>
      )}
    </div>
  );
};

export default Input;
