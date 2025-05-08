//1----------------------------------------------------------------------------------------------------------------------------
abstract class BaseUser {
    constructor(
        public id: number,    
        public name: string   
    ) {}

    abstract getRole(): string;
    abstract getPermissions(): string[];
}

class Guest extends BaseUser {
    getRole(): string {
        return 'Guest';
    }

    getPermissions(): string[] {
        return ['Просмотр контента'];
    }
}

class User extends BaseUser {
    getRole(): string {
        return 'User';
    }

    getPermissions(): string[] {
        return ['Просмотр контента', 'Добавление комментариев'];
    }
}

class Admin extends BaseUser {
    getRole(): string {
        return 'Admin';
    }

    getPermissions(): string[] {
        return ['Просмотр контента', 'Добавление комментариев', 'Удаление комментариев', 'Управление пользователями'];
    }
}

const guest = new Guest(1, "Аноним");
console.log(guest.getPermissions());

const user = new User(2, "Светлана");
console.log(user.getPermissions());

const admin = new Admin(3, "Мария");
console.log(admin.getPermissions());

//2----------------------------------------------------------------------------------------------------------------------------
interface IReport {
    title: string;
    content: string;
    generate(): string | object;
}

class HTMLReport implements IReport {
    constructor(public title: string, public content: string) {}

    generate(): string {
        return `<h1>${this.title}</h1><p>${this.content}</p>`;
    }
}

class JSONReport implements IReport {
    constructor(public title: string, public content: string) {}

    generate(): object {
        return { title: this.title, content: this.content };
    }
}

const report1 = new HTMLReport("Отчет 1", "Содержание отчета");
console.log(report1.generate());

const report2 = new JSONReport("Отчет 2", "Содержание отчета");
console.log(report2.generate());

//3----------------------------------------------------------------------------------------------------------------------------
class ClassCache<T> {
    private storage: Map<string, { value: T; addedAt: number; ttl: number }> = new Map();
  
    add(key: string, value: T, ttl: number): void {
      const addedAt = Date.now(); 
      this.storage.set(key, { value, addedAt, ttl });
    }
  
    get(key: string): T | null {
      const entry = this.storage.get(key);
      if (!entry) {
        return null;
      }
  
      const currentTime = Date.now();
      if (currentTime - entry.addedAt > entry.ttl) {
        return null;
      }
  
      return entry.value;
    }
  
    clearExpired(): void {
      const currentTime = Date.now();
      for (const [key, entry] of this.storage.entries()) {
        if (currentTime - entry.addedAt > entry.ttl) {
          this.storage.delete(key);
        }
      }
    }
  }
  const cache = new ClassCache<number>();
cache.add("price", 100, 5000);
console.log(cache.get("price"));
setTimeout(() => console.log(cache.get("price")), 6000);


//4----------------------------------------------------------------------------------------------------------------------------
function createInstance<T>(cls: new (...args: any[]) => T, ...args: any[]): T {
    return new cls(...args);
}
  
class Product {
    constructor(public name: string, public price: number) {}
}
  
const p = createInstance(Product, "Телефон", 50000);
console.log(p);

  //5 ----------------------------------------------------------------------------------------------------------------------------
enum LogLevel {
    INFO = "INFO",
    WARNING = "WARNING",
    ERROR = "ERROR",
}
  
  type LogEntry = [Date, LogLevel, string];
  
  function logEvent(event: LogEntry): void {
    const [timestamp, level, message] = event;
    console.log(
      `[${timestamp.toISOString()}] [${level}]: ${message}`
    );
  }
  
  logEvent([new Date(), LogLevel.INFO, "Система запущена"]);

  //6----------------------------------------------------------------------------------------------------------------------------
  enum HttpStatus {
    OK = 200,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
  }
  
  type ApiResponse<T> = [status: HttpStatus, data: T | null, error?: string];
  
  function success<T>(data: T): ApiResponse<T> {
    return [HttpStatus.OK, data];
  }
  
  function error(message: string, status: HttpStatus): ApiResponse<null> {
    return [status, null, message];
  }
  
  const res1 = success({ user: "Андрей" });
  console.log(res1);
  
  const res2 = error("Не найдено", HttpStatus.NOT_FOUND); 
  console.log(res2);  