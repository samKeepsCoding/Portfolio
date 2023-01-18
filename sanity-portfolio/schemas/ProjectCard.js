export default {
    name: 'projectCard',
    type: 'document',
    title: 'Project Card',
    fields: [
        {
            name: 'projectName',
            type: 'string',
            title: 'Project Name'
        },
        {
            name: 'description',
            type: 'array',
            of: [
                {type: 'block'}
            ]
        },
        {
            name: 'screenshot',
            type: 'image',
            title: 'Screenshot Image'
        },
        {
            name: 'techUsed',
            type: 'array',
            of: [
                {type: 'string'}
            ]
        },
        {
            name: 'githubLink',
            type: 'url',
            title: 'Github Link'
        }
    ]
}