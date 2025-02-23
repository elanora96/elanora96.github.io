{
  description = "elanora.lol - elanora96's personal site";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        name = "elanora.lol";
        pname = name;
        src = ./.;
        pkgs = import nixpkgs { inherit system; };
        buildNpmPackage = pkgs.buildNpmPackage;
        importNpmLock = pkgs.importNpmLock;
        nodejs = pkgs.nodejs_23;

        meta = with pkgs; {
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
            npmDeps = importNpmLock {
              npmRoot = src;
            };
            npmConfigHook = importNpmLock.npmConfigHook;
            buildInputs = [ nodejs ];
            npmBuildScript = "build";
            installPhase = ''
              mkdir -p $out
              cp -r ./build $out/build
            '';
          };

          default = self.packages.${system}.frontend;
        };

        devShells.default = pkgs.mkShell {
          packages = [
            importNpmLock.hooks.linkNodeModulesHook
            nodejs
          ];

          npmDeps = importNpmLock.buildNodeModules {
            npmRoot = src;
            inherit nodejs;
          };

        };
      }
    );
}
