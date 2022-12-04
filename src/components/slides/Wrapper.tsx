import "./backgrounds.css";

export default function Wrapper({
  children,
  title,
  background,
}: {
  title: string;
  children: any;
  background: string;
}) {
  return (
    <div className="lg:flex h-screen w-screen bg-secondary px-[8.333333%] py-[4.151515%] gap-[50px]">
      <span>
        <h1 className="text-[64px] font-serif w-max">{title}</h1>
        <div className={`${background} lg:h-[calc(100%-96px)] h-16`}></div>
      </span>
      <div className="pt-[96px]">{children}</div>
    </div>
  );
}
