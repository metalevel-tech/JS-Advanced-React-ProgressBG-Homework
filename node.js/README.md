## Node Express

[**Examples**](./express/)

<hr style="height: 1px; background-color: #eee">
  
* TutorialsPoint: [Node.js - Express Framework](https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm)
  
* TutorialsPoint: [Node.js - Request Object](https://www.tutorialspoint.com/nodejs/nodejs_request_object.htm)

* TutorialsPoint: [Node.js - Response Object](https://www.tutorialspoint.com/nodejs/nodejs_response_object.htm)

* AskUbuntu: [How do I send GET and POST requests using Curl and Wget?](https://askubuntu.com/questions/968652/how-do-i-send-get-and-post-requests-using-curl)

## Node Fetch 

* [Node `fetch()` module](https://www.npmjs.com/package//node-fetch)

* [`fetch()` In Node.js Core](https://fusebit.io/blog/node-fetch/?utm_source=duckduckgo.com&utm_medium=referral&utm_campaign=none): *`node >= 17.5`:* `node --experimental-fetch file.js`


## How to install the latest `node` nad `npm` on Ubuntu

* Source: [This answer](https://askubuntu.com/a/1402894/566421) of mine at [AskUbuntu](https://askubuntu.com/users/566421/pa4080).

First step is to install the packages from the Ubuntu's repository:

```bash
sudo apt update
sudo apt install -y nodejs npm
```

The versions within the Ubuntu's repository are relatively old. You can check them by `node -v` and `nmp -v`. To get the latest versions we can use the `n` package that should be installed globally by `npm`.

```bash
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
```

Now you can check `node -v` and `nmp -v` again. Note you may need to log-out and log-in to the shell session, or open a new terminal, to see the correct new version.

Note `n stable` will install the newest stable version. In order to get the latest (beta) version use:

```bash
sudo n latest
```

By the [`n`][1] package you can easily switch between the different versions and manage them. This package can be initially installed in different ways, but by using the native package manger of the distribution (in this case `apt`) is the more easirst to remember.


  [1]: https://www.npmjs.com/package/n