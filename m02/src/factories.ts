function log(prefix: string){
  return (target: any) => {
    console.log(prefix, target)
  }
}

@log('print')
class Exemplo{}

export default{}