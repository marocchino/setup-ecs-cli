mkdir -p "$HOME/tools/ecs-cli"
wget -N -O "$HOME/tools/ecs-cli/ecs-cli" "https://s3.amazonaws.com/amazon-ecs-cli/ecs-cli-linux-amd64-${VERSION-latest}"
chmod +x "$HOME/tools/ecs-cli/ecs-cli"
echo "$HOME/tools/ecs-cli" >> $GITHUB_PATH
