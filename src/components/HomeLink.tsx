interface HomeLinkProps {
  title: string;
  date: string;
}

export default function HomeLink({ title, date }: HomeLinkProps) {
  return (
    <div className="p-4 space-y-1 hover:bg-gray-100 active:bg-gray-200 rounded-md">
      <h1>{title}</h1>
      <p className="font-light text-gray-500">{date}</p>
    </div>
  );
}
