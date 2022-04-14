# API DEMO

This is an API example.
The server contains 3 pieces of data and 4 routes.

## DOCUMENTATION EXAMPLE

Documentation explaining how to request the data and the format of responenses must be provided with the API.

    BASE URL:  https://gri.server.com


    GET  /GRI_API/STANDARD_1/

        Returns all infos about Standard 1.

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

        Returns text relative to the first section of Standard 2.


    POST /GRI_API/PREMIUM_REQUEST

        Returns private or premium informations. A key for verification must be provided.

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





## NEXT STEPS

- Access token for confidential data.
- Use a DBMS to store data.
- Traffic analysis tools.
- Route to get all data in one file.
- Parametrized routes for a dynamic API.

