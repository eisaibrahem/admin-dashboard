export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          active: "#bdbdbd",
        }
      : {
          // palette values for dark mode
          active: "#424242",
        }),
  },
});
