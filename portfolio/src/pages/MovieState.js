import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import athlete2 from "../img/athlete2.png";
//import goodtimes2 from "../img/good-times2.png";
//import theracer2 from "../img/the-racer2.png";

export const MovieState = () => {
  return [
    {
      id: 1,
      title: "the athlete",
      mainImg: athlete,
      secondaryImg: athlete2,
      url: "/work/the-athlete",
      awards: [
        {
          title: "something something",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, accusantium!",
        },
        {
          title: "something else entirely",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, accusantium!",
        },
      ],
    },
    {
      id: 2,
      title: "the racer",
      mainImg: theracer,
      secondaryImg: athlete2,
      url: "/work/the-racer",
      awards: [
        {
          title: "something fast",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, accusantium!",
        },
        {
          title: "something else entirely",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, accusantium!",
        },
      ],
    },
    {
      id: 3,
      title: "the good times",
      mainImg: goodtimes,
      secondaryImg: athlete2,
      url: "/work/good-times",
      awards: [
        {
          title: "having a good time",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, accusantium!",
        },
        {
          title: "something else entirely",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, accusantium!",
        },
      ],
    },
  ];
};
