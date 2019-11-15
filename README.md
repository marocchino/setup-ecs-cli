# setup-ecs-cli

<p align="left">
  <a href="https://github.com/marocchino/setup-ecs-cli"><img alt="GitHub Actions status" src="https://github.com/marocchino/setup-ecs-cli/workflows/test/badge.svg"></a>
</p>

This action sets up a ecs-cli environment for use in actions by:

- optionally downloading and caching a version of ecs-cli by version and adding to PATH

# Usage

See [action.yml](action.yml)

Basic:

```yaml
steps:
  - uses: actions/checkout@master
  - uses: marocchino/setup-ecs-cli@v1
    with:
      version: "v1.16.0"
```

# License

The scripts and documentation in this project are released under the [MIT License](LICENSE)
