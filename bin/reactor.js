#!/usr/bin/env node

import esbuild from 'esbuild';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function startServer() {
    // Import the configuration
    const configPath = join(process.cwd(), 'reactor.config.js');
    let config;
    try {
        config = (await import(configPath)).default;
    } catch (error) {
        console.error('Error loading reactor.config.js:', error.message);
        process.exit(1);
    }
    
    // Create a more sophisticated index.html that includes the file list
    const htmlContent = `<!DOCTYPE html>
<html>
<head>
    <title>Reactor</title>
    <meta charset="utf-8">
    <style>
        body { 
            margin: 0; 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
        }
        #root { 
            display: flex; 
            height: 100vh; 
        }
        #sidebar { 
            width: 300px; 
            border-right: 1px solid #e1e1e1; 
            overflow-y: auto; 
            padding: 20px; 
            box-sizing: border-box; 
        }
        #content { 
            flex: 1; 
            padding: 20px; 
            overflow-y: auto; 
        }
        .file-item { 
            padding: 5px 0; 
            cursor: pointer; 
        }
        .file-item:hover { 
            background-color: #f5f5f5; 
        }
        .directory { 
            margin-left: 15px; 
        }
    </style>
</head>
<body>
    <div id="root"></div>
    <script>
        window.REACTOR_FILES = ${JSON.stringify(config.files)};
        window.REACTOR_MANIFEST = ${JSON.stringify(manifest)};
    </script>
    <script src="/public/build/index.js"></script>
</body>
</html>`;
    
    // Write index.html to the project root so it's served at /
    const indexPath = join(process.cwd(), 'index.html');
    fs.writeFileSync(indexPath, htmlContent);
    
    // Clean up index.html on exit
    process.on('exit', () => {
        try {
            fs.unlinkSync(indexPath);
        } catch (error) {
            // Ignore errors
        }
    });
    process.on('SIGINT', () => process.exit());
    process.on('SIGTERM', () => process.exit());
    
    // Create public directory if it doesn't exist for build output
    const publicDir = join(process.cwd(), 'public');
    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
    }
    
    // Bundle all configured files
    const componentEntries = config.files.map(file => ({
        in: join(process.cwd(), file),
        out: file.replace(/\.(jsx?|tsx?)$/, '').replace(/^src\//, '')
    }));
    
    // Build components
    await esbuild.build({
        entryPoints: componentEntries.map(entry => entry.in),
        bundle: true,
        outdir: join(publicDir, 'build', 'components'),
        jsx: 'automatic',
        loader: {
            '.js': 'jsx',
            '.ts': 'tsx',
            '.tsx': 'tsx',
        },
        format: 'esm',
        splitting: false,
    });

    // Create a manifest mapping original paths to bundled paths
    const manifest = {};
    config.files.forEach(file => {
        const outFile = file.replace(/\.(jsx?|tsx?)$/, '.js').replace(/^src\//, '');
        manifest[file] = `/public/build/components/${outFile}`;
    });

    // Start esbuild server for the main app
    const ctx = await esbuild.context({
        entryPoints: [join(process.cwd(), 'src', 'index.js')],
        bundle: true,
        outdir: join(publicDir, 'build'),
        jsx: 'automatic',
        loader: {
            '.js': 'jsx',
            '.ts': 'tsx',
            '.tsx': 'tsx',
        },
        format: 'esm',
        define: {
            'window.REACTOR_MANIFEST': JSON.stringify(manifest),
        },
    });
    
    const result = await ctx.serve({
        servedir: process.cwd(), // Serve from project root to access all files directly
        port: 8000,
    });
    
    const url = `http://localhost:${result.port}`;
    console.log('Reactor server running at', url);
    
    // Open the browser
    spawn('open', [url], { stdio: 'inherit' });
}

const command = process.argv[2];
if (command === 'start') {
    startServer().catch(console.error);
} else {
    console.log('Usage: reactor start');
    process.exit(1);
}
