import {spawn} from 'node:child_process';
const args=process.argv.slice(2);const port=args.includes('--port')?args[args.indexOf('--port')+1]:'8787';
const child=spawn(process.execPath,['node_modules/wrangler/bin/wrangler.js','dev','--ip','0.0.0.0','--port',port],{stdio:'inherit',env:{...process.env,WRANGLER_SEND_METRICS:'false'}});child.on('exit',code=>process.exit(code??1));for(const sig of ['SIGTERM','SIGINT'])process.on(sig,()=>child.kill(sig));
