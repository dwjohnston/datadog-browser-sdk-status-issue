import { datadogLogs } from "@datadog/browser-logs";

const TOKEN = import.meta.env.VITE_DATADOG_CLIENT_TOKEN;

if (!TOKEN) {
  throw new Error(`
  no VITE_DATADOG_CLIENT_TOKEN env var found.      
`);
}
datadogLogs.init({
  clientToken: TOKEN,
  env: "development",
  forwardErrorsToLogs: true,
  sessionSampleRate: 100,
});

document.getElementById("button").addEventListener("click", () => {
  console.log("click");
  datadogLogs.logger.error("I am an error level message", { status: 404 }); // Actually logs as info level
  datadogLogs.logger.error("I am an error level message", { status: 0 }); // Actually logs as emergency level
  datadogLogs.logger.error("I am an error level message", { status: 500 }); // Actually logs as info level
});
