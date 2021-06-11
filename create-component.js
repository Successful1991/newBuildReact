const fs = require('fs');
const path = require('path');

function getIndexTemplate(name) {
  return `export * from './${name}';`;
}

function getPageTemplate(scriptName) {
  return `
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import css from './${scriptName}.module.scss';

export const ${scriptName} = ({ children, size }) => {
  return (
    <div>
      {children}
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.node,
};
`
}

function getTemplate(type, name) {
  switch (type) {
    case 'jsx':
      return getPageTemplate(name);
    case 'script':
      return getIndexTemplate(name);
    default:
      return '';
  }
}
const tmplateName = process.argv[2];
console.log(process.argv);
if (!!tmplateName === false) {
    console.warn('You didn`t enter component name');
    return;
}

const pathesToComponentParts = {
  style: `src/components/${tmplateName}`,
  script: `src/components/${tmplateName}`,
  jsx: `src/components/${tmplateName}`,
};
const formats = {
  style: 'module.scss',
  script: 'js',
  jsx: 'jsx'
};

const typesFile = Object.keys(pathesToComponentParts);

typesFile.forEach((type) => {
  const pathToFolder = pathesToComponentParts[type];
  const dirPath = path.resolve(process.cwd(), pathToFolder);
  try {
    fs.accessSync(dirPath);
    console.log('directory exists');
  } catch (e) {
    fs.mkdirSync(dirPath);
    console.log('directory created successfully');
  }
  

  fs.readdir(dirPath, function(err, files) {
    let isFileExistInFolder = false;
    const componentName = type === 'script' ? `index.${formats[type]}` : `${tmplateName}.${formats[type]}`;
  
    const filesNameWithoutExt = files.map(el => el.replace(/\.(scss|jsx|js)/, ''));
    const pathToFile = `${pathToFolder}/${componentName}`;

    if (filesNameWithoutExt.includes(tmplateName)) isFileExistInFolder = true;

    if (!isFileExistInFolder) {
      
      const contentTemplate = getTemplate(type, tmplateName);

      fs.writeFile(pathToFile, contentTemplate, function(err) {
          console.log(`\x1b[32m`, `${componentName} создан`);
      });
      return;
    }
    console.log(`\x1b[33m%s\x1b[0m`, `${componentName} уже есть`);
  }, () => {
  
  });
});


