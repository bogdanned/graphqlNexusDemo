import {inputObjectType, mutationField} from "nexus"

export const InputType = inputObjectType({
    name: "CreateUserInput",
    definition(t) {
      t.string("fullname", { required: true });
    },
  });
  