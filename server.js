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

const gri2 = {
  title: "GRI 2: General Disclosures 2021",
  section_1: {
    title: "1: The organization and its reporting practices",
    section_1: {
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
    },
    section_2: {
      title: "Disclousure 2-2 Entities included in the organization's sustainability reporting"
    },
    section_3: {
      title: "Disclousure 2-3 Reporting period, frequency and contact point"
    },
    section_4: {
      title: "Disclousure 2-4 Restatement of information"
    },
    section_5: {
      title: "Disclousure 2-5 External assurance"
    },
  },
  section_2: {
    title: "2: Activities and workers",
  },
  section_3: {
    title: "3: Governance",
  },
  section_4: {
    title: "4: Strategy, policies and practices",
  },
  section_5: {
    title: "5: Stakeholder engagement",
  }

};

//API ROUTES

app.get("/GRI_API/GRI_2", (req, res) => {
  res.json(gri2);
});

app.get("/GRI_API/GRI_2/SECTION_1", (req, res) => {
  res.json(gri2.section_1);
});

app.get("/GRI_API/GRI_2/SECTION_1/DISCLOSURE2_1", (req, res) => {
  res.json(gri2.section_1.section_1);
});
