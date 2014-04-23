doubi
=====

这是一个微信公众帐号的服务端程序。部署于sugar。


启动
=====
修改 ./config.js ,添加自己的token
修改 ./bin/www   ,将端口改为80
npm start

结构
=====
+ app.js 是程序主入口
+ bin 存放部署等启动脚本
+ config.js 存放一些私有配置
+ error_config.js 存放错误信息配置
+ node_modules 存放模块
+ package.json 应用相关信息及依赖配置
+ public 存放前端资源
+ routes 存放路由配置(目前主要后台处理逻辑也放在里面)
+ views  存放前端页面模板


其他
=====
欢迎关注微信公众帐号：doubi
