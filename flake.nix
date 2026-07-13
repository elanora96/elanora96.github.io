{
  description = "elanora.lol - elanora96's personal site";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-26.05";

    # keep-sorted start block=yes

    # Simplify Nix Flakes with the module system
    flake-parts = {
      url = "github:hercules-ci/flake-parts";
      inputs.nixpkgs-lib.follows = "nixpkgs";
    };
    # Integration of pre-commit git hooks with Nix
    git-hooks-nix = {
      url = "github:cachix/git-hooks.nix";
      inputs.nixpkgs.follows = "nixpkgs";
    };
    # treefmt for nix
    treefmt-nix = {
      url = "github:numtide/treefmt-nix";
      inputs.nixpkgs.follows = "nixpkgs";
    };

    # keep-sorted end
  };

  outputs =
    inputs:
    inputs.flake-parts.lib.mkFlake { inherit inputs; } {
      systems = [
        "aarch64-darwin"
        "aarch64-linux"
        "x86_64-linux"
      ];
      imports = [
        inputs.git-hooks-nix.flakeModule
        inputs.treefmt-nix.flakeModule
      ];
      perSystem =
        {
          self',
          pkgs,
          lib,
          config,
          ...
        }:
        let
          name = "elanora.lol";
          pname = name;
          src = ./.;
          inherit (pkgs) buildNpmPackage importNpmLock;
          nodejs = pkgs.nodejs_latest;

          meta = {
            description = "elanora.lol - elanora96's personal site";
            longDescription = ''
              A personal site built in React with Vite, Typescript, CSS Modules,
              MDX, SSR, and much more.
            '';
            homepage = "https://elanora.lol";
            license = lib.licenses.isc;
            maintainers = with lib.maintainers; [ elanora96 ];
            platforms = lib.platforms.all;
          };
        in
        {
          packages = {
            frontend = buildNpmPackage {
              inherit
                name
                pname
                src
                meta
                ;
              npmDeps = importNpmLock { npmRoot = src; };
              inherit (importNpmLock) npmConfigHook;
              buildInputs = [ nodejs ];
              installPhase = ''
                mkdir -p $out
                cp -r ./build $out/build
              '';
            };

            default = self'.packages.frontend;
          };

          pre-commit = {
            check.enable = true;
            settings.hooks = {
              treefmt.enable = true;
            };
          };

          treefmt = {
            projectRootFile = "flake.nix";
            programs = {
              # keep-sorted start block=yes
              # biome.enable = true;
              deadnix.enable = true;
              keep-sorted.enable = true;
              mdformat.enable = true;
              nixfmt.enable = true;
              statix.enable = true;
              typos.enable = true;
              # keep-sorted end
            };
          };

          devShells.default = pkgs.mkShell {
            name = "${name}-shell";
            inputsFrom = [
              config.treefmt.build.devShell
              config.pre-commit.devShell
            ];
            packages = [
              importNpmLock.hooks.linkNodeModulesHook
              nodejs
            ];
            npmDeps = importNpmLock.buildNodeModules {
              npmRoot = src;
              inherit nodejs;
            };
          };
        };
    };
}
