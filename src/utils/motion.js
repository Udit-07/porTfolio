export const slideInFromLeft = (delay = 0) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay,
      type: "spring",
      stiffness: 50,
    },
  },
});

export const slideInFromRight = (delay = 0) => ({
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 50,
    },
  },
});

export const slideInFromTop = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.25,
      type: "spring",
      stiffness: 50,
    },
  },
};
