import { env } from "shared/config/env";
import { app } from "./app";

var port = env.PORT;

app.listen(port, () => console.log(`Server runing on port: ${port} 🔥`));
