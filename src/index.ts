import { queryType, stringArg, makeSchema, mutationType } from 'nexus'
import { GraphQLServer } from 'graphql-yoga'

import DateScalar from "./objects/date"
import User, {StatusEnum, Post} from "./objects/user"

import {InputType} from "./mutations/adduser"


const Mutation = mutationType({
  definition(t){
    t.field("createUser", {
      type: "User",
      args: { 
        fullName: stringArg({ 
          list: true, 
          required: true 
        }) 
      },      
      resolve: (root, args, ctx) => (console.log(args.fullName))
    })
  }
})

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
  types: [User, StatusEnum, Query, Post, DateScalar, InputType, Mutation],
  outputs: {
    schema: __dirname + '/generated/schema.graphql',
    typegen: __dirname + '/generated/typings.ts',
  },
})

const server = new GraphQLServer({
  schema,
})

server.start(() => `Server is running on http://localhost:4000`)