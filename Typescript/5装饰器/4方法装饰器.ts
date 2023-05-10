const showDecorator:MethodDecorator=(...args:any[])=>{
    console.log(args);
}
class User{
    @showDecorator
    public show(){}
}