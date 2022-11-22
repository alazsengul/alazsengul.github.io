import PostLink from '../components/PostLink'
import { getPosts } from '../utils'
import { PostLinksPropType } from '../models/PostLinksPropType'
import { PostLinkType } from '../models/PostLinkType'

export default function Home({ postLinks }: PostLinksPropType) {
  return (
    <>
      {postLinks.map((postLink: PostLinkType, index: number) => (
        <PostLink
          key={index}
          link={postLink.link}
          title={postLink.title}
          date={postLink.date}
        />
      ))}
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      postLinks: getPosts()
    },
  }
}