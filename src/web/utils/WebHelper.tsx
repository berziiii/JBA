export const handleOnEnter = (e: any, callback?: any, space = false) => {
  const code = e.keyCode ? e.keyCode : e.which;
  if ((code === 13 || (space && code === 32)) && callback) callback();
};
