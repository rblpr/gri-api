# API DEMO

This is an API example.
The server contains 3 pieces of data and 4 routes.

## Documentation example

Documentation explaining how to request the data and the format of responses must be provided with the API.

    BASE URL:  https://gri.server.com


    GET  /GRI_API/GRI_2/

        Returns all infos about the Universal Standard GRI 2.

        RESPONSE:
        {
            title: String;
            section_1: {
                title: String,
                section_1: {
                    title: String,
                },
                section_2: {
                    title: String,
                },
                section_3: {
                    title: String,
                }
            },
            section_2: {
                title: String,
                section_1: {
                    title: String,
                },
                section_2: {
                    title: String,
                },
                section_3: {
                    title: String,
                }
            }
        }


    GET  /GRI_API/GRI_2/SECTION_1/

        Returns all subsections of the first section of the Universal Standard GRI 2.


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


## Next steps

- Access token for confidential data.
- Use a DBMS to store data.
- Traffic analysis tools.
- Route to get all data in one file.
- Parametrized routes for a dynamic API.
- Web crawler to verify customers web pages.

