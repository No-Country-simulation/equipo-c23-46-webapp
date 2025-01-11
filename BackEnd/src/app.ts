import { envs } from "./config";
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";


(() => {
  main();
})()

async function main() {

  // await PrismaDatabase.connect();

  new Server({
    port: envs.port,
    routes: AppRoutes.routes
  }).start()
}
