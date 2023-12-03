

const project = {
    name: 'project',
    title: 'Projects',
    type: 'document',

    fields:[
        {
            name: 'name',
            title: 'Name',
            type: 'string'

        },
        {
            name: 'order',
            title: 'Order',
            type: 'string'

        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name'},
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {hotspot: true},
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }  
            ]
        },
        {
            name: 'heading',
            title: 'Heading',
            type: 'array',
            of: [{type: 'block'}],

        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{type: 'block'}],

        },
        {
            name: 'image1',
            title: 'Image1',
            type: 'image',
            options: {hotspot: true},
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }  
            ]
        },
        {
            name: 'content2',
            title: 'Content2',
            type: 'array',
            of: [{type: 'block'}],

        },
        {
            name: 'image2',
            title: 'Image2',
            type: 'image',
            options: {hotspot: true},
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }  
            ]
        },
        {
            name: 'content3',
            title: 'Content3',
            type: 'array',
            of: [{type: 'block'}],

        },
        {
            name: 'image3',
            title: 'Image3',
            type: 'image',
            options: {hotspot: true},
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }  
            ]
        },
        {
            name: 'content4',
            title: 'Content4',
            type: 'array',
            of: [{type: 'block'}],

        },
    ],
};

export default project;