export function readMemory(key: string) {
  return {
    key,
    source: "memory-stub",
    value: null,
  };
}

export function writeMemory(key: string, value: any) {
  return {
    key,
    stored: true,
  };
}
