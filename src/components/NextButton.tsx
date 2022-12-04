export default function NextButton({
  title,
  onClick,
}: {
  title: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="bg-primary p-2 max-h-max font-serif font-bold flex items-center text-2xl hover:bg-secondary hover:text-primary group duration-300"
    >
      <Icon className="stroke-secondary group-hover:stroke-primary duration-300"></Icon>
    </button>
  );
}

function Icon({ className }: { className: string }) {
  return (
    <svg
      width="65"
      height="65"
      viewBox="0 0 65 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M37.9167 13.5417L56.875 32.5M56.875 32.5L37.9167 51.4584M56.875 32.5H8.125"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
