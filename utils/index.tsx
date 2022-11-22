import fs from 'fs'
import path from 'path'
import moment from 'moment'
import { PostLinkType } from '../models/PostLinkType'

export const fileNameToPostLinkType = (fileName: string): PostLinkType => {
    const first_split = fileName.split(".")
    const second_split = first_split[0].split("-")

    const date = second_split.pop()
    const title = second_split
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")

    return {
        link: first_split[0],
        title: title,
        date: moment(date, "YYYYMMDD").format("MMMM D, YYYY"),
    }
}

export const sortByDate = (a: PostLinkType, b: PostLinkType): number => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
}

export const getPosts = (): PostLinkType[] => {
    const files = fs.readdirSync(path.join('posts'))
    const posts = files.map(fileName => fileNameToPostLinkType(fileName))

    return posts.sort(sortByDate)
}