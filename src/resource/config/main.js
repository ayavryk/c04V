var appConfig = {
            "head":"Demo", // то что отображается в title
            "host":"http://c04.new",
            "configPath": "/public/config/{controller}/{method}.json",
            "server" : "http://c04.new/admin04/main", 
            "editorPath": "/public/tiny/index.html",
            "homePage": "table/text",
            "menu": [
                {
                    "head":"Основное"
                },
                {   "main": true, 
                    "title": "Авторы",
                    "route": "/table/author"
                },
                {   "main": true,
                    "title": "Цитаты",
                    "route": "/table/text"
                },    
                {   "main": true,
                    "title": "Теги",
                    "route": "/table/tags"
                },{
                    "head":"Административное"
                },    
                {
                    "title": "Пользователи",
                    "route": "/table/users"
                },                   
                {
                    "title": "ConfigBuilder",
                    "route": "configBuilder"
                },  {
                    "head":"Справочники"
                },    
                {
                    "title": "Страны",
                    "route": "/table/users"
                }, 
                {
                    "title": "Города",
                    "route": "/table/users"
                }, 
                {
                    "title": "Организации",
                    "route": "/table/users"
                }, {
                    "head":"Новости, реклама"
                },    
                {
                    "title": "Рассылки",
                    "route": "/table/users"
                }, 
                {
                    "title": "Новости",
                    "route": "/table/users"
                }, 
                {
                    "title": "Города",
                    "route": "/table/users"
                }, 
                {
                    "title": "Организации",
                    "route": "/table/users"
                }
            ]
}