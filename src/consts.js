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

  GROUP: {
    url: "/group/:id",
    replace: (id) => {
      return urlize(ROUTES.GROUP.url, [
        {
          find: ":id",
          replace: id,
        },
      ]);
    },
  },
};

export const weekDays = [
  {
    index: 0,
    name: "Segunda",
    events: [],
  },
  {
    index: 1,
    name: "Terça",
    events: [],
  },
  {
    index: 2,
    name: "Quarta",
    events: [],
  },
  {
    index: 3,
    name: "Quinta",
    events: [],
  },
  {
    index: 4,
    name: "Sexta",
    events: [],
  },
  {
    index: 5,
    name: "Sábado",
    events: [],
  },
  {
    index: 6,
    name: "Domingo",
    events: [],
  },
];
