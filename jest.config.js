module.exports = {
  rootDir: ".",
  roots: ["./"],
  moduleNameMapper: {
    "@helpers/(.*)": "<rootDir>/helpers/$1",
    "@configs/(.*)": "<rootDir>/configs/$1",
    "@v1/(.*)": "<rootDir>/app/v1/$1"
  },
}