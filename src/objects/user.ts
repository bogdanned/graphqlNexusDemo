import { objectType, enumType } from 'nexus'

export const StatusEnum = enumType({
    name: "StatusEnum",
    members: {
      ACTIVE: 1,
      DISABLED: 2,
    },
  });

  export const Post = objectType({
    name: "Post",
    definition(t) {
      t.int("id");
      t.string("title");
    },
  });

export default objectType({
    name: "User",
    definition(t) {
      t.int("id", { description: "Id of the user" });
      t.string("fullName", { description: "Full name of the user" });
    //   t.field("status", {
    //         type: "StatusEnum",
    //         resolve: (root, args, ctx) => ("ACTIVE")
    //   })
       t.list.field("posts", {
         type: Post, // or "Post"
         resolve(root, args, ctx) {
            return [
                {
                    id: "PX01",
                    title: "A first post"
                },
                {
                    id: "PX02",
                    title: "A second post"
                }
            ];
         },
       });
    }
  });

