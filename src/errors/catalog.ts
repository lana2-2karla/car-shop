enum ErrorTypes {
  EntityNotFound = 'EntityNotFound',
  InvalidMongoId = 'InvalidMongoId',
}
  
  type ErrorResponseObject = { 
    message: string;
    httpStatus: number;
  };
     
type ErrorCatalog = {
  // cada chave desse objeto é uma chave do Enum ErrorTypes
  // e cada valor é um objeto de resposta da API
  [key in ErrorTypes]: ErrorResponseObject;
    
};
    
const errorCatalog: ErrorCatalog = {
  EntityNotFound: {
    message: 'Object not found',
    httpStatus: 404,
  },
  InvalidMongoId: {
    message: 'Id must have 24 hexadecimal characters',
    httpStatus: 400,
  },
};

export { errorCatalog, ErrorCatalog, ErrorTypes };