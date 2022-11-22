import fs from 'fs'
import path from 'path'
import Markdown from 'markdown-to-jsx';
import React from 'react';
import { PostType } from '../models/PostType'
import { fileNameToPostLinkType } from '../utils';

export default function Post({ title, date, content }: PostType) {
    return (
        <div className='p-2 space-y-4 rounded-sm'>
            <div className='space-y-1'>
                <h1 className='leading-4 text-gray-700'>
                    {title}
                </h1>
                <p className='font-light leading-4 text-gray-500 text-sm'>
                    {date}
                </p>
            </div>
            <div className='leading-4 text-gray-700 text-sm'>
                <Markdown
                    className='space-y-4'
                    options={{
                        overrides: {
                            h2: {
                                props: {
                                    className: 'text-gray-700',
                                },
                            },
                        },
                    }}
                >
                    {content}
                </Markdown>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))
    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', ''),
        },
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: { slug } }: any) {

    const fileName = slug + '.md'

    const { link, title, date } = fileNameToPostLinkType(fileName)

    const markdownContent = fs.readFileSync(
        path.join('posts', fileName),
        'utf-8'
    )

    return {
        props: {
            title: title,
            date: date,
            content: markdownContent,
        },
    }
}