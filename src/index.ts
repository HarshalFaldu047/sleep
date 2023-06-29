export function sleep({ milliseconds = 1000 } = {}): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve();
    }, milliseconds);
  });
}
