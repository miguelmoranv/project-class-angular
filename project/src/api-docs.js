
import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions={
    swaggerDefinition:{
        openapi: "3.0.0" ,
        info:{
            version:"1.0.0",
            title:"Docu API",
            description:"API Documentation for use",
            servers:["http://localhost","https://examen-production-04fa.up.railway.app"],
            schemes:
            - "https"
            - "http"
        }
    },
    basePath:"/",
    apis:["src/route/*.js"]
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
export default swaggerSpec;