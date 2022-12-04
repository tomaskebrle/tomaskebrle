export function Icon({ children, link }: { children: any; link: string }) {
  return (
    <a href={link}>
      <div className="aspect-square h-[100px] w-[100px] bg-tertiary hover:bg-primary fill-white hover:fill-secondary duration-300 flex p-2 items-center justify-center">
        {children}
      </div>
    </a>
  );
}

export function Link({
  children,
  link,
  type,
}: {
  children: any;
  link: string;
  type: "github" | "site";
}) {
  return (
    <a href={link}>
      <div className="flex items-center bg-tertiary p-3 gap-3 font-mono hover:bg-primary duration-300">
        <img src={type === "github" ? "/github.svg" : "/globe.svg"} alt="" />
        {children}
      </div>
    </a>
  );
}
