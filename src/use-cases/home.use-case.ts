export default class HomeUseCase {
  welcome(): any {
    return {
      status: true,
      version: "1.0.0",
      description: "Email microservice"
    };
  }
}