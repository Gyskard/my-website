{ pkgs, ... }: {
  channel = "stable-23.11"; 
  packages = [];
  env = {};
  idx = {
    extensions = [];
    previews = {
      enable = true;
        previews = {
        web = {
          command = [
            "npm"
            "run"
            "dev"
            "--"
            "--port"
            "$PORT"
            "--host"
            "0.0.0.0"
          ];
          manager = "web";
        };
      };
    };
  };
}
