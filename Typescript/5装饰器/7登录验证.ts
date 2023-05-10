//用户资料与登录状态
const user = {
    name: '向军',
    isLogin: false
}

const AccessDecorator: MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor): void => {
    const method = descriptor.value;
    descriptor.value = () => {
        //登录的用户执行方法
        if (user.isLogin === true) {
            return method()
        }
        //未登录用户跳转到登录页面
        alert('你没有访问权限')
        return location.href = 'login.html'
    }

}

class Article {
    @AccessDecorator
    show() {
        console.log('播放视频');
    }

    @AccessDecorator
    store() {
        console.log('保存视频');
    }
}

new Article().store();