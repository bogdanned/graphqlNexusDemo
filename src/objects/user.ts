import { objectType, enumType } from 'nexus'

const StatusEnum = enumType({
    name: "StatusEnum",
    members: {
      ACTIVE: 1,
      DISABLED: 2,
    },
  });

  const Post = objectType({
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
    //   t.field("status", "StatusEnum");
    //   t.list.field("posts", {
    //     type: Post, // or "Post"
    //     resolve(root, args, ctx) {
    //       return ctx.getUser(root.id).posts();
    //     },
    //   });
    },
  });

