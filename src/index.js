import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

// Build a tree structure from file paths
function buildFileTree(files) {
    const tree = {};
    files.forEach(file => {
        const parts = file.split('/');
        let current = tree;
        parts.forEach((part, index) => {
            if (!current[part]) {
                current[part] = {};
            }
            if (index === parts.length - 1) {
                current[part].isFile = true;
                current[part].fullPath = file;
            }
            current = current[part];
        });
    });
    return tree;
}

// Render the file tree as a nested list
function FileTree({ tree, onFileSelect, level = 0 }) {
    return (
        React.createElement('div', { className: 'directory', style: { marginLeft: level * 15 } },
            Object.keys(tree).sort().map(key => {
                const item = tree[key];
                if (item.isFile) {
                    return React.createElement(
                        'div',
                        {
                            key: key,
                            className: 'file-item',
                            onClick: () => onFileSelect(item.fullPath)
                        },
                        key
                    );
                } else {
                    return React.createElement(
                        'div',
                        { key: key },
                        [
                            React.createElement('div', { key: 'label' }, key),
                            React.createElement(FileTree, {
                                key: 'children',
                                tree: item,
                                onFileSelect,
                                level: level + 1
                            })
                        ]
                    );
                }
            })
        )
    );
}

function App() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [FileComponent, setFileComponent] = useState(null);
    const files = window.REACTOR_FILES || [];
    const fileTree = buildFileTree(files);

    useEffect(() => {
        if (selectedFile) {
            // Use the manifest to get the bundled path
            const bundledPath = window.REACTOR_MANIFEST[selectedFile];
            if (bundledPath) {
                import(/* @vite-ignore */ bundledPath)
                    .then(module => {
                        // Get the first export (assuming default export)
                        const Component = module.default || Object.values(module)[0];
                        setFileComponent(Component);
                    })
                    .catch(error => {
                        console.error('Error loading component:', error);
                        setFileComponent(null);
                    });
            } else {
                console.error('No bundled path found for:', selectedFile);
                setFileComponent(null);
            }
        }
    }, [selectedFile]);

    return React.createElement('div', { id: 'root' }, [
        React.createElement(
            'div',
            { key: 'sidebar', id: 'sidebar' },
            React.createElement('h3', { key: 'title' }, 'Components'),
            React.createElement(FileTree, {
                key: 'tree',
                tree: fileTree,
                onFileSelect: setSelectedFile
            })
        ),
        React.createElement(
            'div',
            { key: 'content', id: 'content' },
            selectedFile 
                ? (FileComponent 
                    ? React.createElement(FileComponent)
                    : React.createElement('div', null, `Loading ${selectedFile}...`))
                : React.createElement('div', null, 'Select a component from the sidebar')
        )
    ]);
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(React.createElement(App));
