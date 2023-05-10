//引入支持元数据的扩展名
import 'reflect-metadata'

const requiredMetadataKey = Symbol('required')
//哪些参数需要验证，记录参数顺序数字
let requiredParameters: number[] = []

function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
  //将需要验证的参数索引存入
  requiredParameters.push(parameterIndex)
  //在 target 对象的 propertyKey属性上定义元素数据 ，参数为: 键，值，对象，方法
  Reflect.defineMetadata(requiredMetadataKey, requiredParameters, target, propertyKey)
}

const validate: MethodDecorator = (target: object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
  const method = descriptor.value
  descriptor.value = function () {
    //读取 @required 装饰器定义的元数据
    let requiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey)

    //如果有值，表示有需要验证的参数
    if (requiredParameters) {
      for (const parameterIndex of requiredParameters) {
        //如果参数不存在或参数值为 undefined 报出错误
        if (requiredParameters.includes(parameterIndex) && arguments[parameterIndex] === undefined) {
          throw new Error('验证失败，参数不能为空.')
        }
      }
    }
    //验证通过后执行类方法
    return method.apply(this, arguments)
  }
}

class Hd {
  @validate
  show(@required name: string, @required id: number) {
    console.log('验证通过，执行方法')
  }
}

const f = new Hd()
f.show('后盾人', 18)

// f.show('后盾人', undefined as any)