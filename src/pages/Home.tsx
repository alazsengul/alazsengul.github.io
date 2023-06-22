import { Link } from "react-router-dom";
import metadata from "../assets/_metadata";
import HomeLink from "../components/HomeLink";

export default function Home() {
  const posts = metadata;
  return (
    <div className="max-w-screen-md mx-auto rounded-md text-sm leading-4 text-gray-700 flex flex-col-reverse">
      {Object.entries(posts).map(([id, post]) => (
        <Link to={post.path}>
          <HomeLink key={id} title={post.title} date={post.date} />
        </Link>
      ))}
    </div>
  );
}
