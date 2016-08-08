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

export function checkAvailApps(apps) {
  const count = new Array(5).fill(0);
  let validateEmpty = 0;
  let validateOnce = 0;

  for (let i = 0; i < apps.length; i++) {
    count[apps[i].id] = apps[i].count;
  }
  for (let i = 0; i < count.length; i++) {
    if (count[i] === 1) {
      validateEmpty++;
    }
    if (count[i] === 0) {
      validateOnce++;
    }
  }
  return (validateEmpty === 5 && validateOnce === 0);
}
