export interface PhoneNumberProps {
  title: string;
  number: string;
}

export default function PhoneNumber({ title, number }: PhoneNumberProps) {
  return (
    <div className="max-sm:hidden md:flex flex-row items-center mx-1">
      <span className="font-semibold text-lg w-fit overflow-hidden whitespace-nowrap text-ellipsis mx-1">
        {title}
      </span>
      <span className="text-lg w-fit overflow-hidden whitespace-nowrap text-ellipsis mx-1">
        {number}
      </span>
    </div>
  );
}
