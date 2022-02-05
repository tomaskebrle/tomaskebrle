---
title: 'How to use Firebase v9 with SvelteKit'
description: 'A guide on how to use firebase with sveltekit, the most effective way I could find'
author: 'Tomáš Kebrle'
date: '2022-05-02'
published: true
---

In this guide I will show you how to use firebase version 9 with sveltekit the best way I could find.

# Prerequisites

You will need a [SvelteKit](https://kit.svelte.dev) project, which you can create by using this command.

```bash
npm init svelte@next my-app
```

And you will also need to install Firebase. _What a surprise_

```bash
npm i firebase
```

When you are done create a file called `firebase.ts` in the `src/lib` directory, you can create the file wherever you want but by putting it here we will have quick and easy access to all functions we will export.

# Initializing the app

If you haven't done so already get your firebase app credentials from the firebase console, and put them into your `firebase.ts` file like this

```typescript
const firebaseConfig = {
	apiKey: 'apiKey',
	authDomain: 'authDomain',
	projectId: 'projectId',
	storageBucket: 'storageBucke',
	messagingSenderId: 'messagingSenderId',
	appId: 'appId',
	measurementId: 'measurementId'
};
```

_You could also put those values into an `.env` file, but this isn't neccesary because it is safe to expose these values to the client._

Now we can finally initialize the app.

```typescript
import { initializeApp } from '@firebase/app';

export const app = initializeApp(firebaseConfig);
```

# Firestore & Auth

For firestore we just have to import the `getFirestore` function and call, adn the same goes for the auth module, and practically every other module of firebase too.

```typescript
import { getFirestore } from '@firebase/firestore';
import { getAuth } from '@firebase/auth';

export const db = getFirestore();
export const auth = getAuth();
```

# Final steps

This is all you have to do. Now when you want to use fireebase you just have to pass these variabled we just created to the functions like this.

```html
<script>
	import { db } from '$lib/firebase';
	import {doc, getDoc} from "@firebase/firestore";

	function async getUserData(uid) {
	  let userData = await getDoc(doc(db,"users", uid))
	  return userData
	}

	let userData = getUserData();
</script>

<h1>Welcome back {userDate.displayName}</h1>
```
