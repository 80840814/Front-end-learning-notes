{
    enum SexType{
        Boy,
        Girl
    }
    interface UserInterface{
        name:string
        age:number
        sex:SexType
    }
    const hd:UserInterface={
        name:'sdasdas',
        age:12,
        sex:SexType.Boy
    
    }
    const xj:UserInterface={
        name:'sdasdas',
        age:17,
        sex:SexType.Girl
    
    }
    const users:UserInterface[]=[hd,xj]
    console.log(users);
    
    
    
}