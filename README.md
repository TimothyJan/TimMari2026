# TimMari2026
Website for Mari and Tim.

Process:
<ul>
  <li>Create Github Repository. Clone to PC.</li>
  <li>Install Prerequisites
    <ul>
      <li>node --version</li>
      <li>npm --version</li>
      <li>git --version</li>
    </ul>
  </li>
  <li>Install Angular CLI: <code>npm install -g @angular/cli</code></li>
  <li>Create new Angular Project. Adjust directory.</li>
  <li>Configure angular.json for Github Pages.</li>
  <li>Install angular-cli-ghpages: <code>npm install angular-cli-ghpages --save-dev</code></li>
  <li>Update package.json.</li>
  <li>Create Deployment Script (deploy.ps1). 
    <ul>
      <li>Run <code>.\deploy.ps1</code></li>
      <li>Or manually:
        <ul>
          <li>npx ng build --configuration=production --base-href="/TimMari2026/"</li>
          <li>npx angular-cli-ghpages --dir=docs --no-silent</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>Github pages configure:
    <ul>
      <li>Source: Deploy from a branch</li>
      <li>Branch: gh-pages</li>
      <li>Folder: / (root)</li>
      <li>Save</li>
    </ul>
  </li>
</ul>
