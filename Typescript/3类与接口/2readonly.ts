class Axios{
    readonly site:string='http://www.baidu.com/'
    public constructor(site?:string){
        this.site=site||this.site
    }
    public get(url:string):any[]{
        console.log(`你请求的是${this.site}/${url}`);
        return []
    }
}
const instance=new Axios('http://yixiaomo.top')
instance.get('user')