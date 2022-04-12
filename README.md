# ESEMPIO API

Insieme all'API deve essere fornita una documentazione che spieghi come richiedere i dati e in che formato vengono ricevuti

## Esempio di documentazione

    BASE URL:  https://gri.server.com


    GET  /GRI_API/STANDARD_1/

        restituisce tutte le informazioni relative allo standard 1

        RESPONSE:
        {
            description: String;
            section_1: String;
            section_2: String;
            section_3: {
                main_text: String;
                subsection_1: String;
                subsection_2: String;
            }
        }


    GET  /GRI_API/STANDARD_2/SECTION_1/

        restituisce il testo relativo alla sezione 1 dello standard 2


    POST /GRI_API/PREMIUM_REQUEST

        restituisce informazioni riservare e/o a pagamento

        REQUEST BODY:
        {
            private_key: String;
        }

        RESPONSE:
        {
            id: Number,
            header: String;
            body: {
                field1: String;
                field2: String;
                valid: Boolean;
                data: Number[];
            }
        }





## POSSIBILI MIGLIORAMENTI

- ACCESS TOKEN PER RENDERE L'API A PAGAMENTO
- UTILIZZO DI UN DATABASE PER CONSERVARE I DATI (POSSIBILE MODIFICA DA APP GESTIONALE)
- UTILIZZO DI TOOL PER CONTROLLO DEL TRAFFICO
- SALVARE I DATI IN UN FILE JSON SCARICABILE DIRETTAMENTE
- ROUTES CON PARAMETRI PER NON DOVER MODIFICARE L'API QUANDO SI AGGIUNGE O TOGLIE jUNO STANDARD

