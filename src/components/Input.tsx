interface InputProps {
  id: string;
  onChange: any;
  value: string;
  label: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ id, onChange, value, label, type }) => {
  return (
    <div className="relative flex ">
      <input
        value={value}
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
    </div>
  );
};

export default Input;
