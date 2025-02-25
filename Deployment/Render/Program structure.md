# Program Structure

> Monorepo, which is when you set your app to run both client and server from within the same repo. 

It's always good practice to have the 2 folders when separating functionality.

```bash 
├── backend
│   ├── app # Generated at build time
│   ├── build
│   │   ├── amd64.sh
│   │   ├── quemu.sh
│   │   └── x86.sh
│   ├── main.go
│   ├── readme.md
│   └── util
│       ├── util.go
│       └── util_test.go
├── community
│   ├── docker
│   │   ├── Dockerfile
│   │   ├── docker-entrypoint.sh
│   │   └── setup.sh
│   └── readme.md
└── frontend
    ├── build # Generated at build time
    ├── components
    │   └── login.js
    ├── index.js
    ├── sample.ts
    └── src
        ├── auth.js
        ├── authn.js
        ├── authz.js
        └── readme.md ```