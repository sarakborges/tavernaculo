import { urlize } from "Helpers/urlize";

export const ROUTES = {
  PROFILE: {
    url: "/profile/:id",
    replace: (id) => {
      return urlize(ROUTES.PROFILE.url, [
        {
          find: ":id",
          replace: id,
        },
      ]);
    },
  },
};
