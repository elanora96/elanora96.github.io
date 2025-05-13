{
  description = "elanora.lol - elanora96's personal site";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
    flake-parts = {
      url = "github:hercules-ci/flake-parts";
      inputs.nixpkgs-lib.follows = "nixpkgs";
    };
    systems.url = "github:nix-systems/default";
  };

  outputs =
    inputs:
    inputs.flake-parts.lib.mkFlake { inherit inputs; } {
      systems = import inputs.systems;
      perSystem =
        {
          self',
          pkgs,
          lib,
          ...
        }:
        let
          name = "elanora.lol";
          pname = name;
          src = ./.;
          buildNpmPackage = pkgs.buildNpmPackage;
          importNpmLock = pkgs.importNpmLock;
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
              npmConfigHook = importNpmLock.npmConfigHook;
              buildInputs = [ nodejs ];
              installPhase = ''
                mkdir -p $out
                cp -r ./build $out/build
              '';
            };

            default = self'.packages.frontend;
          };

          devShells.default = pkgs.mkShell {
            buildInputs = with pkgs; [
              nixfmt-rfc-style
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
