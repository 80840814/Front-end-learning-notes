"use strict";
{
    class Axios {
        constructor() {
            // console.log('asdsa');
        }
        static make() {
            if (Axios.instance == null) {
                console.log('success');
                Axios.instance = new Axios();
            }
            return Axios.instance;
        }
    }
    Axios.instance = null;
    const instance = Axios.make();
    const instance1 = Axios.make();
    const instance2 = Axios.make();
    const instance3 = Axios.make();
    // console.log(instance);
}
