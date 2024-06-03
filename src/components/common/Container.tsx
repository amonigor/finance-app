type Props = {
  name?: string;
  children?: React.ReactNode;
};

export default function Container({ name, children }: Props) {
  return (
    <>
      {name && <p className="text-xs pb-1 pl-4 text-muted">{name}</p>}
      <div className="bg-bcolor-2 border-2 rounded-lg border-border-1 p-4">
        {children}
      </div>
    </>
  );
}
