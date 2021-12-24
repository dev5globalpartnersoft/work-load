Deploy connect process:

1. ssh-keygen -t ed25519 -C "euroboats"
2. cat ~/.ssh/id_ed25519.pub - public key
3. cat ~/.ssh/id_ed25519 - private key
4. (this step only for own gitlab server) curl -L "https://packages.gitlab.com/install/repositories/runner/gitlab-runner/script.deb.sh" | sudo bash
5. (this step only for own gitlab server) export GITLAB_RUNNER_DISABLE_SKEL=true; sudo -E apt-get install gitlab-runner
6. (this step only for own gitlab server) gitlab-runner register
7. (this step only for own gitlab server) set data from Settings CI/CD Runners
8. add SSH_PRIVATE_KEY | SSH_REMOTE_HOST | SSH_REMOTE_PORT to repository variables (In my case I had to put a new line at the end of the SSH_PRIVATE_KEY variable)
9. nano ~/.ssh/authorized_keys and paste inside - public key from cat ~/.ssh/id_ed25519.pub
10. clone git to /home/node/euroboats..... like in your .gitlab-ci.yml
