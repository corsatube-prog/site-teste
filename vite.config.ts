import { defineConfig } from 'vite';

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];

export default defineConfig(({ command }) => ({
  // Use the repository name when building inside GitHub Actions so the deployed site works at /<repo>/.
  base: command === 'build' && repoName ? `/${repoName}/` : '/',
}));
