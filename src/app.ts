import * as express from "express";
import { Request, Response, NextFunction } from "express";
import catsRouter from "./cats/cats.route";
 
class Server {
  public app: express.Application;
  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setRoute() {
    //* Router 등록
    this.app.use(catsRouter);
  }

  private setMiddleware() {
    //* logging middleware
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      console.log(req.rawHeaders[1]);
      console.log("this is logging middleware");
      next();
    });

    //* json middleware
    this.app.use(express.json());

    //* route setting
    this.setRoute();

    //* 404 middleware
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      res.send({ error: "404 not found" });
    });
  }

  public listen() {
    this.setMiddleware();
    this.app.listen(8000, () => {
      console.log("server is on... 8000 port");
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();

//데이터모킹
//모킹이란 실제 데이터가아닌 테스트용으로 개발자가 필요에 의해 만든 데이터

//미들웨어
// 양쪽을 연결하여 데이터를 주고 받을 수 있도록 중간에서 매개 역할을 함
// req, res,그리고 어플리케이션의 요청-응답 주기 중 그 다음의 미들웨어
// 함수에 대한 액세스 권한을 갖는 함수
// 일반적으로 next라는 이름의 변수로 표시

// 모든 코드 실행
// 요청 및 응답 객체에 대한 변경을 실행
// 요청-응답 주기 종료
// 스택 내의 그 다음 미들웨어 호출
// 미들웨어 함수가 요청-응답 주기를 종료하지 않는 경우에는 next를 호출하여
// 그 다음 미들웨어 함수에 제어를 전달해야한다. 그렇지 않으면 해당 요청은
// 정지된 채로 방치된다.

//CRUD
// 컴퓨터 소프트웨어가 가지는 기본적인 데이터 처리 기능
// Crete Read Update Delete

//express.router를 이용해서 route 모듈화

//싱글톤 패턴
//객체 인스턴스가 오직 한개만 생성되도록 함
// 클래스에 인스턴스 하나만 찍어냄
// 이유: 최초 한번에 new 연산자를 통해 객체를 만들 수 있음
// 추후 객체 접근할때 메모리 낭비 방지 가능
// 다른 클래스 간의 데이터 공유가 쉬움

//서비스 패턴
// 라우터와 비즈니스 로직을 분리하여 유지보수와 가독성을 높임
