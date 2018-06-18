# GollumTS-Time

Add setTimeout, async conditionnal testing, next image frame... with standard Promise

## Install:

```
npm install --save gollumts-time
```

## Exemple with async

### child component

```typescript
	
	import Time from 'gollumts-time';
	
	(async () => {
		
		console.log('wait 5 secondes...');
		await Time.timeout(5000);
		console.log('OK timeout');
		
		console.log('wait next animation frame...');
		await Time.nextAnimationFrame();
		console.log('OK Animation frame');
		
		isOk = false;
		Time.timeout(5000).then(() => isOk = true);
		
		console.log('wait consitional callback');
		await Time.wait(() => isOk, 300); // 300 is conditionnal tick for check callback (default = 200)
		console.log('OK Conditionnal');
		
	})();
	
```