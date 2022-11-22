import Link from 'next/link'
import { PostLinkType } from '../models/PostLinkType'

export default function PostLink({ link, title, date }: PostLinkType) {
    return (
        <Link href={`/${link}`}>
            <div className='p-2 space-y-1 hover:bg-gray-100 active:bg-gray-200 hover:cursor-pointer rounded-md'>
                <h1>{title}</h1>
                <p className='font-light text-gray-500'>
                    {date}
                </p>
            </div>
        </Link>
    )
}