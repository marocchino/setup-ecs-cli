const tc = require("@actions/tool-cache");
const core = require("@actions/core");
const io = require("@actions/io");

async function getEcsCli(version) {
  // check cache
  let toolPath = tc.find("ecs-cli", version);
  if (!toolPath) {
    const ecsCliPath = await tc.downloadTool(
      `https://s3.amazonaws.com/amazon-ecs-cli/ecs-cli-linux-amd64-${version}`
    );
    const targetPath = `tools/ecs-cli/${version}`;
    await io.mkdirP(targetPath);
    await io.cp(ecsCliPath, `${targetPath}/ecs-cli`);
    toolPath = await tc.cacheDir(targetPath, "ecs-cli", version);
  }
  core.addPath(toolPath);
}
exports.getEcsCli = getEcsCli;
