const ids = new Set(['hello', 'from', 'to']);
ids.add(2)
//console.log(ids.has(2));

//ids.delete('hello');
if (ids.has('hello')) {
  ids.delete('hello');
}

for(const entry of ids.entries()) {
  console.log(entry);
}