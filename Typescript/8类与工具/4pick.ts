import { type } from "os"

type HOUDUNREN={name:string,age:number,skill:string}
type HD=Pick<HOUDUNREN,'age'|'name'>
const xj:HD={name:'qweqw',age:11}