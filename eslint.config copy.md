/_ eslint-disable @typescript-eslint/no-unsafe-member-access _/
/_ eslint-disable @typescript-eslint/no-unsafe-assignment _/
/_ eslint-disable @typescript-eslint/no-unsafe-call _/
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const **filename = fileURLToPath(import.meta.url);
const **dirname = dirname(\_\_filename);

const compat = new FlatCompat({
baseDirectory: \_\_dirname,
recommendedConfig: js.configs.recommended,
});

const eslintConfig = [

...compat.config({

    // include: [
    //   "src/**/*",
    //   "eslint.config.mjs"
    // ],

    env: {
      es2020: true,
      browser: true,
      node: true,
    },

    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      project: './tsconfig.json',
    },
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },

    extends: [
      'next',
      'eslint:recommended',
      'next/typescript',
      'next/core-web-vitals',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
      'plugin:@next/next/recommended',
      'plugin:import/recommended',
      'plugin:import/typescript',
      'plugin:prettier/recommended',
    ],



    parser: '@typescript-eslint/parser',

    plugins: [
      '@typescript-eslint',
      'unused-imports',
      'react',
      'import',
      'prettier'
    ],

    rules: {
      '@next/next/no-document-import-in-page': 'error',
      '@next/next/no-duplicate-head': 'error',
      '@next/next/no-head-element': 'error',
      '@next/next/no-head-import-in-document': 'error',
      '@next/next/no-html-link-for-pages': 'error',
      '@next/next/no-img-element': 'error',
      '@next/next/no-page-custom-font': 'error',
      '@next/next/no-script-component-in-head': 'error',
      '@next/next/no-styled-jsx-in-document': 'error',
      '@next/next/no-sync-scripts': 'error',
      '@next/next/no-title-in-document-head': 'error',
      '@next/next/no-typos': 'error',
      '@next/next/no-unwanted-polyfillio': 'error',
      '@next/next/no-css-tags': 'error',
      '@next/next/no-async-client-component': 'error',
      '@next/next/no-assign-module-variable': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'error',
      '@typescript-eslint/no-unsafe-call': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'warn',
      '@typescript-eslint/no-explicit-any': 'error',
      'prefer-arrow-callback': 'error', //*
      'prefer-template': 'error', //*
      'max-len': ['off', { code: 80 }],
      'object-shorthand': 'error',
      'no-else-return': 'error',
      'no-console': 'warn',
      'no-debugger': 'warn',
      'react/react-in-jsx-scope': 'error',
      'no-unused-labels': 'error',
      'no-duplicate-imports': 'error',
      'no-var': 'error',
      'no-undef': 'error',
      'consistent-return': 'error',
      'no-unreachable': 'error',
      eqeqeq: 'error',
      'prettier/prettier': ['error'],

      'unused-imports/no-unused-imports': 'error',
      'no-magic-numbers': [
        'warn',
        {
          ignore: [0, 1],
        },
      ],
      'import/no-unused-modules': [
        'error',
        {
          unusedExports: true,
          missingExports: true,
        },
      ],
      ignorePatterns: ['off', '!**/node_modules/'],
      'unused-imports/no-unused-vars': [
        'warn',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          vars: 'all',
          varsIgnorePattern: '^_',
        },
      ],
    },

}),
];

export default eslintConfig;
