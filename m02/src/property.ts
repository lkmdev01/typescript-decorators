const minLenght = (lenght: number) => {
  return (target: any, key: string) => {
    let val = target[key]

    const getter = () => val
    const setter = (value: string) => {
      if(value.length < lenght) {
        throw new Error(`Value for ${key} need more then ${lenght}`)
      }

      val = value
    }

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    })
  }
}

class Category{
  @minLenght(3)
  private title: string;

  constructor(t: string){
    this.title = t
  }
}
console.log(new Category('Mo'))


export default {}