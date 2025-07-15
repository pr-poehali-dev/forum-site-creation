import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const forumCategories = [
    {
      id: 1,
      name: "Общие обсуждения",
      description: "Место для общения на любые темы",
      topics: 142,
      messages: 2847,
      lastPost: "2 минуты назад",
      icon: "MessageCircle",
      color: "bg-blue-500"
    },
    {
      id: 2,
      name: "Технологии",
      description: "Обсуждение новых технологий и разработки",
      topics: 89,
      messages: 1234,
      lastPost: "15 минут назад",
      icon: "Code",
      color: "bg-purple-500"
    },
    {
      id: 3,
      name: "Помощь и поддержка",
      description: "Задайте вопрос и получите помощь",
      topics: 267,
      messages: 3421,
      lastPost: "1 час назад",
      icon: "HelpCircle",
      color: "bg-green-500"
    },
    {
      id: 4,
      name: "Объявления",
      description: "Официальные новости и объявления",
      topics: 34,
      messages: 456,
      lastPost: "3 часа назад",
      icon: "Megaphone",
      color: "bg-orange-500"
    }
  ];

  const topUsers = [
    { name: "Анна Петрова", reputation: 2847, avatar: "AP", posts: 156, role: "Модератор" },
    { name: "Михаил Сидоров", reputation: 1923, avatar: "МС", posts: 89, role: "Активный" },
    { name: "Елена Васильева", reputation: 1456, avatar: "ЕВ", posts: 134, role: "Участник" },
    { name: "Дмитрий Козлов", reputation: 1234, avatar: "ДК", posts: 67, role: "Участник" }
  ];

  const recentTopics = [
    {
      title: "Новые возможности React 19",
      author: "Анна Петрова",
      replies: 23,
      views: 456,
      lastReply: "5 минут назад",
      tags: ["React", "JavaScript", "Frontend"],
      hot: true
    },
    {
      title: "Лучшие практики TypeScript",
      author: "Михаил Сидоров",
      replies: 17,
      views: 234,
      lastReply: "1 час назад",
      tags: ["TypeScript", "Разработка"],
      hot: false
    },
    {
      title: "Проблемы с настройкой Docker",
      author: "Елена Васильева",
      replies: 8,
      views: 123,
      lastReply: "2 часа назад",
      tags: ["Docker", "DevOps"],
      hot: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold">ФОРУМ</h1>
              <nav className="hidden md:flex space-x-6">
                <Button variant="ghost" className="text-gray-300 hover:text-white">
                  <Icon name="Home" size={16} className="mr-2" />
                  Главная
                </Button>
                <Button variant="ghost" className="text-gray-300 hover:text-white">
                  <Icon name="Search" size={16} className="mr-2" />
                  Поиск
                </Button>
                <Button variant="ghost" className="text-gray-300 hover:text-white">
                  <Icon name="Users" size={16} className="mr-2" />
                  Пользователи
                </Button>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Icon name="Bell" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Mail" size={20} />
              </Button>
              <Avatar>
                <AvatarFallback>П</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Forum Categories */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl text-white">Категории форума</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {forumCategories.map((category) => (
                  <div key={category.id} className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer">
                    <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center`}>
                      <Icon name={category.icon} size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">{category.name}</h3>
                      <p className="text-sm text-gray-400">{category.description}</p>
                      <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                        <span>{category.topics} тем</span>
                        <span>{category.messages} сообщений</span>
                        <span>Последний пост: {category.lastPost}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Topics */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center">
                  <Icon name="TrendingUp" size={20} className="mr-2" />
                  Популярные темы
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentTopics.map((topic, index) => (
                  <div key={index} className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-white hover:text-blue-400 transition-colors">
                            {topic.title}
                          </h3>
                          {topic.hot && (
                            <Badge variant="destructive" className="text-xs">
                              <Icon name="Flame" size={12} className="mr-1" />
                              Горячее
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-2 mt-2">
                          {topic.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                          <span>Автор: {topic.author}</span>
                          <span>Ответы: {topic.replies}</span>
                          <span>Просмотры: {topic.views}</span>
                          <span>Последний ответ: {topic.lastReply}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Users */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg text-white flex items-center">
                  <Icon name="Trophy" size={18} className="mr-2" />
                  Топ пользователей
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {topUsers.map((user, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="text-sm text-gray-400 w-6">#{index + 1}</div>
                    <Avatar>
                      <AvatarFallback>{user.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-semibold text-white text-sm">{user.name}</div>
                      <div className="text-xs text-gray-400">{user.role}</div>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          <Icon name="Star" size={10} className="mr-1" />
                          {user.reputation}
                        </Badge>
                        <span className="text-xs text-gray-500">{user.posts} постов</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Forum Stats */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg text-white flex items-center">
                  <Icon name="BarChart3" size={18} className="mr-2" />
                  Статистика
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Всего тем</span>
                  <span className="font-semibold text-white">532</span>
                </div>
                <Separator className="bg-gray-700" />
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Всего сообщений</span>
                  <span className="font-semibold text-white">7,958</span>
                </div>
                <Separator className="bg-gray-700" />
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Пользователей</span>
                  <span className="font-semibold text-white">1,234</span>
                </div>
                <Separator className="bg-gray-700" />
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Онлайн</span>
                  <span className="font-semibold text-green-400">89</span>
                </div>
              </CardContent>
            </Card>

            {/* Online Users */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg text-white flex items-center">
                  <Icon name="Users" size={18} className="mr-2" />
                  Онлайн сейчас
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Анна П.", "Михаил С.", "Елена В.", "Дмитрий К.", "Олег Н."].map((user) => (
                    <Badge key={user} variant="secondary" className="text-xs">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                      {user}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;