# ubuntu latest
FROM ubuntu:18.04

# set india as timezone
RUN ln -sf /usr/share/zoneinfo/Asia/Kolkata /etc/localtime

# set locale
RUN apt-get update && apt-get install -y locales && locale-gen en_US.UTF-8

# set locale
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8


# install nginx
RUN apt-get update && apt-get install -y nginx

# install curl
RUN apt-get install -y curl

# command to install php and choose 8
RUN apt-get install -y php-fpm php-mysql php-mbstring php-xml php-curl php-zip php-gd php-imagick php-intl php-bcmath php-redis php-pear php-dev php-xdebug


# command to install composer
RUN apt-get install -y composer

# command to install git
RUN apt-get install -y git

# command to install vim
RUN apt-get install -y vim

# command to install nodejs
RUN apt-get install -y nodejs

# command to install npm
RUN apt-get install -y npm

# working directory
WORKDIR /var/www/laravel



