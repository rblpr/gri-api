//Cose tecniche per far funzionare il server
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

//routes delle richieste all'API
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

/**
 * Insieme all'API deve essere fornita una documentazione che spieghi come richiedere i dati e in che formato vengono ricevuti
 *
 * p.e.
 *
 *      BASE URL:  https://gri.server.com
 *
 *
 *      GET  /GRI_API/STANDARD_1/
 *
 *          restituisce tutte le informazioni relative allo standard 1
 *
 *          RESPONSE:
 *          {
 *              description: String;
 *              section_1: String;
 *              section_2: String;
 *              section_3: {
 *                  main_text: String;
 *                  subsection_1: String;
 *                  subsection_2: String;
 *              }
 *          }
 *
 *
 *      GET  /GRI_API/STANDARD_2/SECTION_1/
 *
 *          restituisce il testo relativo alla sezione 1 dello standard 2
 *
 *
 *      POST /GRI_API/PREMIUM_REQUEST
 *
 *          restituisce informazioni riservare e/o a pagamento
 *
 *          REQUEST BODY:
 *          {
 *              private_key: String;
 *          }
 *
 *          RESPONSE:
 *          {
 *              id: Number,
 *              header: String;
 *              body: {
 *                  field1: String;
 *                  field2: String;
 *                  valid: Boolean;
 *                  data: Number[];
 *              }
 *          }
 *
 */

/*
 *
 * POSSIBILI MIGLIORAMENTI:
 *
 * - ACCESS TOKEN PER RENDERE L'API A PAGAMENTO
 * - UTILIZZO DI UN DATABASE PER CONSERVARE I DATI (POSSIBILE MODIFICA DA APP GESTIONALE)
 * - UTILIZZO DI TOOL PER CONTROLLO DEL TRAFFICO
 * - SALVARE I DATI IN UN FILE JSON SCARICABILE DIRETTAMENTE
 * - ROUTES CON PARAMETRI PER NON DOVER MODIFICARE L'API QUANDO SI AGGIUNGE O TOGLIE jUNO STANDARD
 *
 */
