import express from "express";
import cors from "cors";
import { sampleCollection, sampleGlasses } from "./data";

const app = express();
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);

app.get("/api/glasses", (req, res) => {
  res.send(sampleGlasses);
});

app.get("/api/glasses/:glassesType", (req, res) => {
  const glassesType = req.params.glassesType;
  console.log(glassesType);
  const glasses = sampleGlasses.filter((product) => {
    return product.eyeWearType.toLowerCase() === glassesType.toLowerCase();
  });

  res.send(glasses);
});

app.get("/api/glasses/:glassesType/:filter", (req, res) => {
  const { glassesType, filter } = req.params;
  console.log("Type:" + glassesType, "filter:" + filter);

  const filteredProduct = sampleGlasses
    .filter((product) => matchesEyeWearType(product, glassesType))
    .filter((glass) => matchesFilter(glass, filter));

  res.send(filteredProduct);
});

function matchesEyeWearType(product: any, glassesType: any) {
  const typeToMatch = glassesType.toLowerCase();
  return product.eyeWearType.toLowerCase() === typeToMatch;
}

function matchesFilter(glass: any, filter: any) {
  const filterToMatch = filter.toLowerCase();

  if (
    glass.shape &&
    glass.shape.toLowerCase().replace(/ +/g, "").includes(filterToMatch)
  ) {
    return true;
  }

  if (
    glass.frameSize &&
    glass.frameSize.toLowerCase().includes(filterToMatch)
  ) {
    return true;
  }

  if (glass.material && glass.material.toLowerCase().includes(filterToMatch)) {
    return true;
  }

  if (glass.gender && glass.gender.toLowerCase().includes(filterToMatch)) {
    return true;
  }

  return false;
}

app.get("/api/collection/:colectionName", (req, res) => {
  const colectionName = req.params.colectionName.toLowerCase();
  console.log(colectionName);
  const collection = sampleGlasses.filter((glass) =>
    glass.collectionName
      .toLowerCase()
      .replace(/ +g/, "")
      .includes(colectionName.toLowerCase())
  );

  res.send(collection);
});

app.get("/api/search/:searchTerm", (req, res) => {
  const searchTerm = req.params.searchTerm;
  console.log(searchTerm);
  const product = sampleGlasses.filter((glass) =>
    glass.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  res.send(product);
});

const port = 5000;
app.listen(port, () => {
  console.log("Website served on http://localhost:" + port);
});
