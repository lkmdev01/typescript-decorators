const setAPIVersion = (apiVersion:string)=>{
  return (constructor: any)=>{
    return class extends constructor{
      version = apiVersion
    }
  }
}

function log(prefix: string){
  return (target: any) => {
    console.log(prefix, target)
  }
}

@setAPIVersion("v1.0.1")
class API{}

console.log(new API)

/// Exemplo de mais de uma 'Class' Usando o mesmo '@setAPIVersion';

@setAPIVersion("v1.0.2")
@log('webhook version 01')
class Webhook{}

console.log(new Webhook)


/// Exemplo de mais de uma '@';
@setAPIVersion("v1.0.2")
@log('cliente server version 01')
class ClientServer{}

console.log(new ClientServer)


export default{}