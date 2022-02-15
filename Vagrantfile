# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure("2") do |config|
    config.vm.box = "debian/bullseye64"
    config.vagrant.plugins = "vagrant-docker-compose"

    config.vm.provision "file", source: "~/.ssh/id_rsa.pub", destination: "~/.ssh/id_rsa.pub"
    config.vm.provision :docker
    config.vm.provision :docker_compose

    config.vm.provider :virtualbox do |vb|
        vb.name = "node1"
        vb.memory = "2048"
    end

    config.vm.provider "hyperv" do |hv|
        hv.vmname = "node1"
        hv.memory = 2048
        hv.maxmemory = 2048
    end

    config.ssh.forward_agent = true

    # config.vm.network "public_network", ip: "192.168.1.17", bridge: [
    #     "en0: Wi-Fi",
    #     "en8: USB 10/100/1000 LAN 2"
    # ]
    config.vm.network "forwarded_port", guest: 3000, host: 3000
    config.vm.network "forwarded_port", guest: 8000, host: 8000
    config.vm.network "forwarded_port", guest: 8080, host: 8080

    config.vm.provision "shell", inline: <<-SHELL
        apt-get update
        apt-get install -y ca-certificates curl gnupg lsb-release net-tools vim

        PATH_KEYS=/home/vagrant/.ssh
        mkdir -p /root/.ssh
        cat $PATH_KEYS/id_rsa.pub >> $PATH_KEYS/authorized_keys
        cat $PATH_KEYS/id_rsa.pub >> /root/.ssh/authorized_keys
        rm $PATH_KEYS/id_rsa.pub
    SHELL
end
