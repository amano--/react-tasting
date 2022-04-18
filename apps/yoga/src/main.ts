import { execute, parse } from 'graphql'
import { schema } from './schema'

export async function helloTest() {
  const myQuery = parse(/* GraphQL */ `
    query {
      hello
    }
  `)

  const result = await execute({
    schema,
    document: myQuery,
  })

  console.log(result)
  return result
}

// main()
