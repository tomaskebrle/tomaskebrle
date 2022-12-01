import { slides } from "./slides";

function DynamicComponent({ slide }: { slide: string }) {
  const SelectUser = slides[slide];

  return <SelectUser />;
}

export default DynamicComponent;
