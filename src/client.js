import sanityClient from '@sanity/client'


export const client = sanityClient({
    projectId: 'hmrjjpof',
    dataset: 'production',
    apiVersion: '2022-01-18',
    useCdn: false
})

