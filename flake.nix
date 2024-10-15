{
  description = "elanora.lol devShell";

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
        pkgs = import nixpkgs { inherit system; };
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = [
            pkgs.nodejs_22
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
