const toNdjson = data => {
  data = Array.isArray(data) ? data : [data];
  let outNdjson = "";
  data.forEach(item => {
    outNdjson += JSON.stringify(item) + "\n";
  });
  return outNdjson;
};

export default toNdjson;
