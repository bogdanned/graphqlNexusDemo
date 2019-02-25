import { queryType, stringArg, makeSchema } from 'nexus'
import { GraphQLServer } from 'graphql-yoga'

import User from "./objects/user"

const Query = queryType({
  definition(t) {
    t.string('hello', {
      args: { name: stringArg({ nullable: true }) },
      resolve: (parent, { name }) => `Hello ${name || 'World'}!`,
    }),
    t.list.field("users", {
      type: "User",
      resolve(root, args, ctx){
        return [{
            id: 1,
            fullName: "user_1"
        }]
      }
    })
  },
})

const schema = makeSchema({
  types: [User, Query],
  outputs: {
    schema: __dirname + '/generated/schema.graphql',
    typegen: __dirname + '/generated/typings.ts',
  },
})

const server = new GraphQLServer({
  schema,
})

server.start(() => `Server is running on http://localhost:4000`)