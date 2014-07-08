/**
 * Takes parsed `package.json` manifest and returns
 * valid add-on id for it.
 */
function getID(manifest) {
  manifest = manifest || {};
  if (manifest.id) {
    // If manifest.id is already valid (as domain or GUID), use it
    if (isGUID(manifest.id) || isDomain(manifest.id))
      return manifest.id;
    // Otherwise, this ID is invalid so return `null`
    return null;
  }
   
  // If no `id` defined, turn `name` into a domain ID,
  // as we transition to `name` being an id, similar to node/npm, but
  // append a '@' to make it compatible with Firefox requirements
  if (manifest.name) {
    return "@" + manifest.name;
  }

  // If no `id` or `name` property, return null as this manifest 
  // is invalid
  return null;
}

module.exports = getID;

function isGUID (s) {
  return /^\{[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}\}$/i.test(s);
}

function isDomain (s) {
  return /^[0-9a-zA-Z\-_]*\@[0-9a-zA-Z\-]+(\.[0-9a-zA-Z\-]+)*$/.test(s);
}
