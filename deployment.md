# Deployment

## Creating SSH keys

```sh
ssh-keygen
```

```sh
cat ~/.ssh/id_rsa.pub
```

## Connecting to debian machine

```sh
ssh -p 2222 vagrant@127.0.0.1
```

```sh
docker context create prod --docker "host=ssh://vagrant@localhost:2222"
docker context use prod
docker-compose up -d
```

## Vagrant CLI

```sh
vagrant up
vagrant reload --provision
vagrant destroy

# .ssh/known_hosts
```
