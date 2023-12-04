export interface PhoneNumberProps {
  title: string;
  number: string;
}

export default function PhoneNumber({ title, number }: PhoneNumberProps) {
  return (
    <div className="hidden md:flex flex-row items-center mx-2">
      <span className="text-zinc-600 w-fit overflow-hidden whitespace-nowrap text-ellipsis mx-2">
        {title}
      </span>
      <span className="font-semibold text-xl w-fit overflow-hidden whitespace-nowrap text-ellipsis mx-2">
        {number}
      </span>
    </div>
  );
}
