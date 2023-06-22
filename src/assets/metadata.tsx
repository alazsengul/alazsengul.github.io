import { ReactElement } from "react";
import Twitter from "../components/Twitter";

interface MetadataPost {
  path: string;
  page: ReactElement;
  title: string;
  date: string;
}

interface Metadata {
  [id: string]: MetadataPost;
}

const metadata: Metadata = {
  "0": {
    path: "twitter",
    page: <Twitter />,
    title: "Thoughts on my time at Twitter",
    date: "November 22, 2022",
  },
};

export default metadata;
