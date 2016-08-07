export function checkAvailServers(servers) {
  for (let i = 0; i < servers.length; i++) {
    if (servers[i].used === false) {
      return false;
    }
  }
  return true;
}

export function move(values, oldIndex, newIndex) {
  while (oldIndex < 0) {
    oldIndex += values.length;
  }
  while (newIndex < 0) {
    newIndex += values.length;
  }
  if (newIndex >= values.length) {
    let k = newIndex - values.length;
    while ((k--) + 1) {
      values.push(undefined);
    }
  }
  values.splice(newIndex, 0, values.splice(oldIndex, 1)[0]);
  return values;
}

export function checkAvailApps(servers) {
  const count = new Array(5).fill(0);
  let validate1 = 0;
  let validate2 = 0;

  for (let i = 0; i < servers.length; i++) {
    count[servers[i].id] = servers[i].count;
  }
  for (let i = 0; i < count.length; i++) {
    if (count[i] === 1) {
      validate1++;
    }
    if (count[i] === 0) {
      validate2++;
    }
  }
  return (validate1 === 5 && validate2 === 0);
}
