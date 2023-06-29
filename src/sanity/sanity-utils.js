import { createClient, groq } from "next-sanity";
import clientConfig from './config/client-config'

export async function getFeaturedProjects() {
    return await createClient(clientConfig).fetch(
        groq`*[_type == "project" && featured == true] | order(_createdAt asc) {
            _id,
            title,
            "slug": slug.current,
            "image": mainImage.asset->url,
            categories[] -> {
              title
            }
        }`
    )
}

export async function getProjects() {
    return await createClient(clientConfig).fetch(
        groq`*[_type == "project"] | order(_createdAt asc) {
            _id,
            title,
            "slug": slug.current,
            "image": mainImage.asset->url,
            categories[] -> {
              title
            }
        }`
    )
}

