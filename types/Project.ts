import { PortableTextBlock } from "sanity";

export type Project ={

    _id: string;

    _createdAt: Date;

    name: string;

    order: string;

    category: string;

    slug: string;

    image: string;

    heading: any;

    content: PortableTextBlock[];

    image1: string;

    content2: PortableTextBlock[];

    image2: string;

    content3: PortableTextBlock[];

    image3: string;

    content4: PortableTextBlock[];

   


}