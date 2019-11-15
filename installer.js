const tc = require("@actions/tool-cache");
const core = require("@actions/core");

async function getEcsCli(version) {
  // check cache
  let toolPath = tc.find("ecs-cli", version);
  if (!toolPath) {
    const ecsCliPath = await tc.downloadTool(
      `https://s3.amazonaws.com/amazon-ecs-cli/ecs-cli-linux-amd64-${version}`
    );
    toolPath = await tc.cacheDir(ecsCliPath, "ecs-cli", version);
  }
  core.addPath(toolPath);
}
exports.getEcsCli = getEcsCli;
