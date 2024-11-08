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
        node = pkgs.nodejs_22;

        meta = with pkgs; {
          description = "elanora.lol - elanora96's personal site";
          longDescription = ''
            A personal site built in React with Vite, Typescript, CSS Modules,
            MDX, SSR, and much more.
          '';
          homepage = "https://github.com/elanora96/elanora96.github.io.git";
          license = lib.licenses.isc;
          maintainers = with lib.maintainers; [ elanora96 ];
          platforms = lib.platforms.all;
        };
      in
      {
        packages = {
          frontend = pkgs.buildNpmPackage rec {
            inherit
              name
              pname
              src
              meta
              ;
            npmDepsHash = "sha256-A9HCN3/F0cDdSKDhoV45zoS+MXm956ruyhemMFe6ABo=";
            buildInputs = [ node ];
            npmBuildScript = "build";
            installPhase = ''
              mkdir -p $out
              cp -r ./dist $out/dist
            '';
          };

          default = self.packages.${system}.frontend;
        };

        devShells.default = pkgs.mkShell {
          buildInputs = [
            node
            pkgs.nodePackages.typescript
            pkgs.nodePackages.typescript-language-server
          ];

          shellHook = ''
            confirm() {
              while true; do
                read -rp "[y/n]: " yn
                case $yn in
                  [Yy]*) return 0;;
                  [Nn]*) return 1;;
                  *) echo "Please answer yes or no." ;;
                esac
              done
            }
            cat ./banner.txt

            if [ ! -d "./node_modules" ]; then
              echo "$(pwd)/node_modules does not seem to exist"
              echo -n "Run npm install? "
              if confirm; then
                npm install
              fi
            fi
          '';
        };
      }
    );
}
