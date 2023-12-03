// import { createClient, groq } from 'next-sanity';
// import { Project } from '@/types/Project';

// export async function getProjects(): Promise<Project[]>{

//     const client = createClient({

//         projectId: "gfcigyhw",
//         dataset: "production",
//         apiVersion: "2023-07-12",

//     });

//      return client.fetch(
//         groq`*[_type == "project"]| order(name desc){

//             _id,

//             _createdAt,

//             name,

//             "slug": slug.current,

//             "image": image.asset->url,

//             content

//         }`,
//     );

// };

// export async function getProject(slug: string): Promise<Project> {

//     const client = createClient({

//         projectId: "gfcigyhw",
//         dataset: "production",
//         apiVersion: "2023-07-12",

//     });

//      return client.fetch(
//         groq`*[_type == "project" && slug.current == $slug][0]{

//             _id,

//             _createdAt,

//             name,

//             "slug": slug.current,

//             url,

//             heading,

//             content,

//             "image1": image.asset->url,

//             content2,

//             "image2": image.asset->url,

//             content3,

//             "image3": image.asset->url,

//             content4



//         }`,
//         { slug }
//     );
// };

// Import necessary modules and types
import { createClient, groq } from 'next-sanity';
import { Project } from '@/types/Project';

// Your existing functions in the sanity.utils file
export async function getProjects(): Promise<Project[]> {
    const client = createClient({
        projectId: "gfcigyhw",
        dataset: "production",
        apiVersion: "2023-07-12",
    });

    const projects = await client.fetch(
        groq`*[_type == "project"]| order(order asc) {
            _id,
            _createdAt,
            _order,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            content
        }`
    );

    return projects;
}

export async function getProject(slug: string): Promise<Project> {
    const client = createClient({
        projectId: "gfcigyhw",
        dataset: "production",
        apiVersion: "2023-07-12",
    });

    const project = await client.fetch(
        groq`*[_type == "project" && slug.current == $slug][0] {
            _id,
            _createdAt,
            _order,
            name,
            "slug": slug.current,
            heading,
            content,
            "image1": image1.asset->url,
            content2,
            "image2": image2.asset->url,
            content3,
            "image3": image3.asset->url,
            content4
        }`,
        { slug }
    );

    return project;
}


