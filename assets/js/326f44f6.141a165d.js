"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[17314],{99754:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o=["components"],p={title:"Getting Started with WASM",sidebar_label:"Getting Started",description:"Getting started with the IOTA Identity WASM Library.",image:"/img/Identity_icon.png",keywords:["WASM","install","npm","yarn","build","nodejs","webpack"]},s=void 0,l={unversionedId:"libraries/wasm/getting_started",id:"libraries/wasm/getting_started",isDocsHomePage:!1,title:"Getting Started with WASM",description:"Getting started with the IOTA Identity WASM Library.",source:"@site/external/identity.rs/documentation/docs/libraries/wasm/getting_started.md",sourceDirName:"libraries/wasm",slug:"/libraries/wasm/getting_started",permalink:"/identity.rs/libraries/wasm/getting_started",tags:[],version:"current",frontMatter:{title:"Getting Started with WASM",sidebar_label:"Getting Started",description:"Getting started with the IOTA Identity WASM Library.",image:"/img/Identity_icon.png",keywords:["WASM","install","npm","yarn","build","nodejs","webpack"]},sidebar:"docs",previous:{title:"Overview",permalink:"/identity.rs/libraries/wasm/overview"},next:{title:"Examples",permalink:"/identity.rs/libraries/wasm/examples"}},c=[],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("h1",{parentName:"p"},"IOTA Identity WASM"),(0,i.kt)("blockquote",{parentName:"p"},(0,i.kt)("p",{parentName:"blockquote"},"This is the beta version of the official WASM bindings for ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/identity.rs"},"IOTA Identity"),".")),(0,i.kt)("h2",{parentName:"p"},(0,i.kt)("a",{parentName:"h2",href:"https://identity.docs.iota.org/docs/libraries/wasm/api_reference"},"API Reference")),(0,i.kt)("h2",{parentName:"p"},(0,i.kt)("a",{parentName:"h2",href:"./examples/README.md"},"Examples")),(0,i.kt)("h2",{parentName:"p"},"Install the library:"),(0,i.kt)("p",{parentName:"p"},"Latest Release: this version matches the main branch of this repository, is stable and will have changelogs."),(0,i.kt)("pre",{parentName:"p"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @iota/identity-wasm\n")),(0,i.kt)("p",{parentName:"p"},"Development Release: this version matches the dev branch of this repository, may see frequent breaking changes and has the latest code changes."),(0,i.kt)("pre",{parentName:"p"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @iota/identity-wasm@dev\n")),(0,i.kt)("h2",{parentName:"p"},"Build"),(0,i.kt)("p",{parentName:"p"},"Alternatively, you can build the bindings if you have Rust installed. If not, refer to ",(0,i.kt)("a",{parentName:"p",href:"https://rustup.rs"},"rustup.rs")," for the installation. Then install the necessary dependencies using:"),(0,i.kt)("pre",{parentName:"p"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,i.kt)("p",{parentName:"p"},"and then build the bindings for ",(0,i.kt)("inlineCode",{parentName:"p"},"node.js")," with"),(0,i.kt)("pre",{parentName:"p"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build:nodejs\n")),(0,i.kt)("p",{parentName:"p"},"or for the ",(0,i.kt)("inlineCode",{parentName:"p"},"web")," with"),(0,i.kt)("pre",{parentName:"p"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build:web\n")),(0,i.kt)("h2",{parentName:"p"},"NodeJS Usage"),(0,i.kt)("pre",{parentName:"p"},(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'const identity = require(\'@iota/identity-wasm/node\')\n\n// Generate a new KeyPair\nconst key = new identity.KeyPair(identity.KeyType.Ed25519)\n\n// Create a new DID Document with the KeyPair as the default authentication method\nconst doc = new identity.Document(key)\n// const doc = new identity.Document(key, "dev") // if using the devnet\n\n// Sign the DID Document with the private key\ndoc.sign(key)\n\n// Create a default client instance for the mainnet\nconst config = identity.Config.fromNetwork(identity.Network.mainnet())\n// const config = identity.Config.fromNetwork(identity.Network.devnet()); // if using the devnet\nconst client = identity.Client.fromConfig(config)\n\n// Publish the DID Document to the IOTA Tangle\n// The message can be viewed at https://explorer.iota.org/<mainnet|devnet>/transaction/<messageId>\nclient.publishDocument(doc.toJSON())\n    .then((receipt) => {\n        console.log("Tangle Message Receipt: ", receipt)\n        console.log("Tangle Message Url:", doc.id.network.messageURL(receipt.messageId))\n    })\n    .catch((error) => {\n        console.error("Error: ", error)\n        throw error\n    })\n')),(0,i.kt)("h2",{parentName:"p"},"Web Setup"),(0,i.kt)("p",{parentName:"p"},"The library loads the WASM file with an HTTP GET request, so the .wasm file must be copied to the root of the dist folder."),(0,i.kt)("h3",{parentName:"p"},"Rollup"),(0,i.kt)("ul",{parentName:"p"},(0,i.kt)("li",{parentName:"ul"},"Install ",(0,i.kt)("inlineCode",{parentName:"li"},"rollup-plugin-copy"),":")),(0,i.kt)("pre",{parentName:"p"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install rollup-plugin-copy --save-dev\n")),(0,i.kt)("ul",{parentName:"p"},(0,i.kt)("li",{parentName:"ul"},"Add the copy plugin usage to the ",(0,i.kt)("inlineCode",{parentName:"li"},"plugins")," array under ",(0,i.kt)("inlineCode",{parentName:"li"},"rollup.config.js"),":")),(0,i.kt)("pre",{parentName:"p"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Include the copy plugin\nimport copy from 'rollup-plugin-copy'\n\n// Add the copy plugin to the `plugins` array of your rollup config:\ncopy({\n  targets: [{\n    src: 'node_modules/@iota/identity-wasm/web/identity_wasm_bg.wasm',\n    dest: 'public',\n    rename: 'identity_wasm_bg.wasm'\n  }]\n})\n")),(0,i.kt)("h3",{parentName:"p"},"Webpack"),(0,i.kt)("ul",{parentName:"p"},(0,i.kt)("li",{parentName:"ul"},"Install ",(0,i.kt)("inlineCode",{parentName:"li"},"copy-webpack-plugin"),":")),(0,i.kt)("pre",{parentName:"p"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install copy-webpack-plugin --save-dev\n")),(0,i.kt)("pre",{parentName:"p"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Include the copy plugin\nconst CopyWebPlugin= require('copy-webpack-plugin');\n\n// Add the copy plugin to the `plugins` array of your webpack config:\n\nnew CopyWebPlugin({\n  patterns: [\n    {\n      from: 'node_modules/@iota/identity-wasm/web/identity_wasm_bg.wasm',\n      to: 'identity_wasm_bg.wasm'\n    }\n  ]\n}),\n")),(0,i.kt)("h3",{parentName:"p"},"Web Usage"),(0,i.kt)("pre",{parentName:"p"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import * as identity from "@iota/identity-wasm/web";\n\nidentity.init().then(() => {\n  const key = new identity.KeyPair(identity.KeyType.Ed25519)\n  const doc = new identity.Document(key)\n  // const doc = new identity.Document(key, "dev") // if using the devnet\n  console.log("Key Pair", key)\n  console.log("DID Document: ", doc)\n});\n\n// or\n\n(async () => {\n  await identity.init()\n  const key = new identity.KeyPair(identity.KeyType.Ed25519)\n  const doc = new identity.Document(key)\n  // const doc = new identity.Document(key, "dev") // if using the devnet\n  console.log("Key Pair", key)\n  console.log("DID Document: ", doc)\n})()\n\n// Default path is "identity_wasm_bg.wasm", but you can override it like this\nawait identity.init("./static/identity_wasm_bg.wasm");\n')),(0,i.kt)("p",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"p"},"identity.init().then(<callback>)")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"await identity.init()")," is required to load the wasm file (from the server if not available, because of that it will only be slow for the first time)")))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,y=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(y,o(o({ref:t},c),{},{components:n})):a.createElement(y,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);