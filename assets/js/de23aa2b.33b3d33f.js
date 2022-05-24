"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[51517],{6058:function(e,n,t){t.r(n),t.d(n,{assets:function(){return h},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),o=t(76018),l=t(54501),u=t(31531),s=["components"],c={title:"Create a Private Tangle",sidebar_label:"Create a Private Tangle",description:"Create a Private Tangle using the IOTA Identity Rust Library or its WASM binding",image:"/img/Identity_icon.png",keywords:["Rust","WASM"]},d=void 0,p={unversionedId:"decentralized_identifiers/private_tangle",id:"decentralized_identifiers/private_tangle",title:"Create a Private Tangle",description:"Create a Private Tangle using the IOTA Identity Rust Library or its WASM binding",source:"@site/content/build/identity.rs/v0.5.0/documentation/docs/decentralized_identifiers/private_tangle.mdx",sourceDirName:"decentralized_identifiers",slug:"/decentralized_identifiers/private_tangle",permalink:"/identity.rs/decentralized_identifiers/private_tangle",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/support/v0.5/documentation/content/build/identity.rs/v0.5.0/documentation/docs/decentralized_identifiers/private_tangle.mdx",tags:[],version:"current",frontMatter:{title:"Create a Private Tangle",sidebar_label:"Create a Private Tangle",description:"Create a Private Tangle using the IOTA Identity Rust Library or its WASM binding",image:"/img/Identity_icon.png",keywords:["Rust","WASM"]},sidebar:"docs",previous:{title:"Resolve",permalink:"/identity.rs/decentralized_identifiers/resolve"},next:{title:"Overview",permalink:"/identity.rs/verifiable_credentials/overview"}},h={},m=[{value:"Example",id:"example",level:2},{value:"Account Module (Recommended)",id:"account-module-recommended",level:3},{value:"Low-level API",id:"low-level-api",level:3}],g={toc:m};function v(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"This example shows how you can create a DID on a private tangle. You can run it together with a local ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.iota.org/hornet/welcome"},"Hornet node"),"."),(0,i.kt)("h3",{id:"account-module-recommended"},"Account Module (Recommended)"),(0,i.kt)(u.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2020-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example account_config\n\nuse identity::account::Account;\nuse identity::account::AccountBuilder;\nuse identity::account::AutoSave;\nuse identity::account::IdentitySetup;\nuse identity::account::Result;\nuse identity::account_storage::MemStore;\nuse identity::iota::ClientBuilder;\nuse identity::iota::ExplorerUrl;\nuse identity::iota_core::IotaDID;\nuse identity::iota_core::Network;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n  pretty_env_logger::init();\n\n  // Set-up for a private Tangle\n  // You can use https://github.com/iotaledger/one-click-tangle for a local setup.\n  // The `network_name` needs to match the id of the network or a part of it.\n  // As an example we are treating the devnet as a private tangle, so we use `dev`.\n  // When running the local setup, we can use `tangle` since the id of the one-click\n  // private tangle is `private-tangle`, but we can only use 6 characters.\n  // Keep in mind, there are easier ways to change to devnet via `Network::Devnet`\n  let network_name = "dev";\n  let network = Network::try_from_name(network_name)?;\n\n  // If you deployed an explorer locally this would usually be `http://127.0.0.1:8082`\n  let explorer = ExplorerUrl::parse("https://explorer.iota.org/devnet")?;\n\n  // In a locally running one-click tangle, this would usually be `http://127.0.0.1:14265`\n  let private_node_url = "https://api.lb-0.h.chrysalis-devnet.iota.cafe";\n\n  // Create a new Account with explicit configuration\n  let mut builder: AccountBuilder = Account::builder()\n    .autosave(AutoSave::Never) // never auto-save. rely on the drop save\n    .autosave(AutoSave::Every) // save immediately after every action\n    .autosave(AutoSave::Batch(10)) // save after every 10 actions\n    .autopublish(true) // publish to the tangle automatically on every update\n    .storage(MemStore::new()) // use the default in-memory storage\n    .client_builder(\n      // Configure a client for the private network\n      ClientBuilder::new()\n        .network(network.clone())\n        .primary_node(private_node_url, None, None)?,\n      // set a permanode for the same network\n      // .permanode(<permanode_url>, None, None)?\n    );\n\n  // Create an identity and publish it.\n  // The created DID will use the network name configured for the client.\n  let identity: Account = match builder.create_identity(IdentitySetup::default()).await {\n    Ok(identity) => identity,\n    Err(err) => {\n      eprintln!("[Example] Error: {:?}", err);\n      eprintln!("[Example] Is your Tangle node listening on {}?", private_node_url);\n      return Ok(());\n    }\n  };\n\n  // Prints the Identity Resolver Explorer URL.\n  // The entire history can be observed on this page by clicking "Loading History".\n  let iota_did: &IotaDID = identity.did();\n  println!(\n    "[Example] Explore the DID Document = {}",\n    explorer.resolver_url(iota_did)?\n  );\n\n  Ok(())\n}\n'),(0,i.kt)("h3",{id:"low-level-api"},"Low-level API"),(0,i.kt)(o.Z,{groupId:"programming-languages",defaultValue:"rust",values:[{label:"Rust",value:"rust"},{label:"Node.js",value:"nodejs"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,i.kt)(u.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2020-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! A basic example that generates and publishes a DID Document\n//! to a private tangle.\n//! It can be run together with a local hornet node.\n//! Refer to https://github.com/iotaledger/one-click-tangle/tree/chrysalis/hornet-private-net\n//! for setup instructions.\n//!\n//! cargo run --example private_tangle\n\nuse identity::crypto::KeyType;\nuse identity::iota::ClientBuilder;\nuse identity::iota::DIDMessageEncoding;\nuse identity::iota::ExplorerUrl;\nuse identity::iota::Receipt;\nuse identity::iota_core::Network;\nuse identity::prelude::*;\n\n#[tokio::main]\npub async fn main() -> Result<()> {\n  // Set-up for private Tangle\n  // You can use https://github.com/iotaledger/one-click-tangle for a local setup.\n  // The `network_name` needs to match the id of the network or a part of it.\n  // As an example we are treating the devnet as a private tangle, so we use `dev`.\n  // When running the local setup, we can use `tangle` since the id of the one-click\n  // private tangle is `private-tangle`, but we can only use 6 characters.\n  // Keep in mind, there are easier ways to change to devnet via `Network::Devnet`\n  let network_name = "dev";\n  let network = Network::try_from_name(network_name)?;\n\n  // If you deployed an explorer locally this would usually be `http://127.0.0.1:8082`\n  let explorer = ExplorerUrl::parse("https://explorer.iota.org/devnet")?;\n\n  // In a locally running one-click tangle, this would usually be `http://127.0.0.1:14265`\n  let private_node_url = "https://api.lb-0.h.chrysalis-devnet.iota.cafe";\n\n  // Use DIDMessageEncoding::Json instead to publish plaintext messages to the Tangle for debugging.\n  let encoding = DIDMessageEncoding::JsonBrotli;\n\n  let client: Client = ClientBuilder::new()\n    .network(network.clone())\n    .encoding(encoding)\n    .primary_node(private_node_url, None, None)?\n    .build()\n    .await?;\n\n  // Generate a new Ed25519 public/private key pair.\n  let keypair: KeyPair = KeyPair::new(KeyType::Ed25519)?;\n\n  // Create a DID with the network set explicitly.\n  let mut document: IotaDocument = IotaDocument::new_with_options(&keypair, Some(client.network().name()), None)?;\n\n  // Sign the DID Document with the default signing method.\n  document.sign_self(keypair.private(), document.default_signing_method()?.id().clone())?;\n\n  // Publish the DID Document to the Tangle.\n  let receipt: Receipt = match client.publish_document(&document).await {\n    Ok(receipt) => receipt,\n    Err(err) => {\n      eprintln!("Error > {:?}", err);\n      eprintln!("Is your private Tangle node listening on {}?", private_node_url);\n      return Ok(());\n    }\n  };\n\n  println!("Publish Receipt > {:#?}", receipt);\n\n  // Prints the Identity Resolver Explorer URL, the entire history can be observed on this page by "Loading History".\n  println!(\n    "[Example] Explore the DID Document = {}",\n    explorer.resolver_url(document.id())?\n  );\n\n  Ok(())\n}\n')),(0,i.kt)(l.Z,{value:"nodejs",mdxType:"TabItem"},(0,i.kt)(u.Z,{className:"language-javascript",mdxType:"CodeBlock"},'// Copyright 2020-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nimport {Client, DIDMessageEncoding, Document, ExplorerUrl, KeyPair, KeyType, Network} from \'@iota/identity-wasm\';\n\n/**\n This example shows how a DID document can be created on a private tangle.\n It can be run together with a local hornet node.\n Refer to https://github.com/iotaledger/one-click-tangle/tree/chrysalis/hornet-private-net\n for setup instructions.\n **/\nasync function privateTangle(restURL, networkName) {\n    // This name needs to match the id of the network or part of it.\n    // Since the id of the one-click private tangle is `private-tangle`\n    // but we can only use 6 characters, we use just `tangle`.\n    const network = Network.tryFromName(networkName || "tangle");\n\n    // Optionally point to a locally-deployed Tangle explorer.\n    const explorer = ExplorerUrl.parse("http://127.0.0.1:8082/");\n\n    // Create a client instance with a custom configuration to publish messages to our private Tangle.\n    const client = await Client.fromConfig({\n        network: network,\n        // This URL points to the REST API of the locally running hornet node.\n        primaryNode: {url: restURL || "http://127.0.0.1:14265/"},\n        // Use DIDMessageEncoding.Json instead to publish plaintext messages to the Tangle for debugging.\n        encoding: DIDMessageEncoding.JsonBrotli,\n    });\n\n    // Generate a new ed25519 public/private key pair.\n    const key = new KeyPair(KeyType.Ed25519);\n\n    // Create a DID with the network set explicitly.\n    // This will result in a DID prefixed by `did:iota:tangle`.\n    const doc = new Document(key, network.name());\n\n    // Sign the DID Document with the generated key.\n    doc.signSelf(key, doc.defaultSigningMethod().id());\n\n    // Publish the Identity to the IOTA Network, this may take a few seconds to complete Proof-of-Work.\n    const receipt = await client.publishDocument(doc);\n\n    // Make sure the DID can be resolved on the private tangle\n    const resolved = await client.resolve(doc.id());\n\n    console.log(`Published the DID document to the private tangle:`);\n    console.log(resolved);\n    console.log(`Explore the DID Document: ${explorer.resolverUrl(doc.id())}`);\n\n    // Return the results.\n    return {key, resolved, receipt};\n}\n\nexport {privateTangle};\n'))))}v.isMDXComponent=!0},54501:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(67294),r=t(86010),i="tabItem_OmH5";function o(e){var n=e.children,t=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:t},n)}},76018:function(e,n,t){t.d(n,{Z:function(){return h}});var a=t(87462),r=t(67294),i=t(5730),o=t(20636),l=t(76602),u=t(63735),s=t(86010),c="tabList_uSqn",d="tabItem_LplD";function p(e){var n,t,i,p=e.lazy,h=e.block,m=e.defaultValue,g=e.values,v=e.groupId,y=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),w=null!=g?g:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,o.l)(w,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(n=null!=m?m:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(i=f[0])?void 0:i.props.value;if(null!==k&&!w.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+w.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var _=(0,l.U)(),D=_.tabGroupChoices,I=_.setTabGroupChoices,T=(0,r.useState)(k),x=T[0],E=T[1],N=[],A=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var C=D[v];null!=C&&C!==x&&w.some((function(e){return e.value===C}))&&E(C)}var S=function(e){var n=e.currentTarget,t=N.indexOf(n),a=w[t].value;a!==x&&(A(n),E(a),null!=v&&I(v,a))},R=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=N.indexOf(e.currentTarget)+1;t=N[a]||N[0];break;case"ArrowLeft":var r=N.indexOf(e.currentTarget)-1;t=N[r]||N[N.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":h},y)},w.map((function(e){var n=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,key:n,ref:function(e){return N.push(e)},onKeyDown:R,onFocus:S,onClick:S},i,{className:(0,s.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":x===n})}),null!=t?t:n)}))),p?(0,r.cloneElement)(f.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==x})}))))}function h(e){var n=(0,i.Z)();return r.createElement(p,(0,a.Z)({key:String(n)},e))}}}]);