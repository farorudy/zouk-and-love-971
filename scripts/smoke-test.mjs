import { access, readFile } from 'node:fs/promises'

const requiredFiles = [
  'index.html',
  'src/main.jsx',
  'src/App.jsx',
  'src/App.css',
  'src/index.css',
  'src/assets/hero.png',
]

await Promise.all(requiredFiles.map((file) => access(file)))

const app = await readFile('src/App.jsx', 'utf8')
const css = await readFile('src/App.css', 'utf8')
const packageJson = JSON.parse(await readFile('package.json', 'utf8'))
const lockfile = JSON.parse(await readFile('package-lock.json', 'utf8'))

const expectations = [
  [app.includes('Zouk & Love 971'), 'landing page title is rendered'],
  [app.includes('mailto:contact@zoukandlove971.fr'), 'booking CTA is rendered'],
  [app.includes('id="programme"'), 'programme anchor is available'],
  [css.includes('@media (max-width: 860px)'), 'mobile layout rules are present'],
  [
    lockfile.packages[''].dependencies.react === packageJson.dependencies.react,
    'React dependency matches lockfile',
  ],
  [
    lockfile.packages[''].devDependencies.vite === packageJson.devDependencies.vite,
    'Vite dependency matches lockfile',
  ],
]

const failures = expectations
  .filter(([passes]) => !passes)
  .map(([, message]) => message)

if (failures.length > 0) {
  console.error('Smoke test failed:')
  for (const failure of failures) {
    console.error(`- ${failure}`)
  }
  process.exit(1)
}

console.log('Smoke test passed.')
