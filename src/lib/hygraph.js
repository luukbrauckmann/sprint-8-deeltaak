import { gql, GraphQLClient } from 'graphql-request'

const token = import.meta.env.HYGRAPH_TOKEN
const environment = 'master'
const url = `https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/${token}/${environment}`

const hygraph = new GraphQLClient(url, { headers: {} })

export const getPage = async (slug) => {
	const query = gql`
			query GetPage {
				page(locales: nl, where: {slug: "${slug}"}) {
					content
					title
				}
			}
    `
	const { page } = await hygraph.request(query)
	return page
}