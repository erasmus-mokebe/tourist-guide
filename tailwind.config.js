module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      keyframes: {
        grow: {
          // "0%": {
          //   transform: "scale(1)",
          // },
          // "50%": {
          //   transform: "scale(1.2)",
          // },
          // "100%": {
          //   transform: "scale(1)",
          // },
          "0%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-3px)",
          },
          "100%": {
            transform: "translateY(0px)",
          },
        },
      },
      animation: {
        grow: "grow .6s linear 1s 1 both",
      },
    },
  },
  plugins: [],
};
