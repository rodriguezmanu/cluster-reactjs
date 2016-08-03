export function checkAvail(servers) {
  for (let i = 0; i < servers.length; i++) {
    if (servers[i].used === false) {
      return true;
    }
  }
  return false;
}
