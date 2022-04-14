//Server setup
const express = require("express");

const app = express();

app.use(express.static("public"));
app.use(express.json());

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`listening at ${port}`);
});

/* ***** API CODE ***** */

//Data structures, possibly database entries 
const standard1 = {
  description: "MAIN TEXT STANDARD 1",
  section_1: "Section one content",
  section_2: "Section two content",
};

const standard2 = {
  description: "MAIN TEXT STANDARD 2",
  section_1: "Awesome section!",
  section_2: "Section two content",
};

// more realistic data
const standard2_1 = {
  title: "Disclousure 2-1 Organizational details",
  pagination: [
    { text: "Requirements", link: "req" },
    { text: "Guidance", link: "guid" },
  ],
  requirements: {
    id: "req",
    title: "Requirements",
    text: "The organization shall:",
    a: "a. report its legal name",
    b: "b. report its nature of ownership and legal form",
    c: "c. report the location of its headqurters",
    d: "d. report its countries of operation",
  },
  guidance: {
    id: "guid",
    title: "Guidance",
    text: "guidance text",
  },
};

//API ROUTES

app.get("/GRI_API/STANDARD_1", (req, res) => {
  res.json(standard1);
});

app.get("/GRI_API/STANDARD_2", (req, res) => {
  res.json(standard2);
});

app.get("/GRI_API/STANDARD_2/SECTION_1", (req, res) => {
  res.json(standard2.section_1);
});

app.get("/GRI_API/STANDARD_GRI2/DISCLOSURE2_1", (req, res) => {
  res.json(standard2_1);
});
