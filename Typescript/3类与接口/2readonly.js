"use strict";
class Axios {
    constructor(site) {
        this.site = 'http://www.baidu.com/';
        this.site = site || this.site;
    }
    get(url) {
        console.log(`你请求的是${this.site}/${url}`);
        return [];
    }
}
const instance = new Axios('http://yixiaomo.top');
instance.get('user');
