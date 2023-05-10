interface Article<B,C>{
    title:string
    isLock:B
    comments:C[]
}
type commentType={
    content:string
    auther?:string
}
const hd:Article<boolean,commentType> ={
    title:'sdaas',
    isLock:true,
    comments:[{content:'sdasassadasdsa',auther:'demo'}]
}
