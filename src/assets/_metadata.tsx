import { ReactElement } from "react";
import Twitter from "../pages/Twitter";
// import Constraints from "../pages/Constraints";

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
  // "1": {
  //   path: "constraints",
  //   page: <Constraints />,
  //   title: "Designing with constraints",
  //   date: "June 21, 2023",
  // },
};

export default metadata;
