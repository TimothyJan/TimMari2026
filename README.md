# TimMari2026
Website for Mari and Tim.
<ul>
  <li>Built responsive Angular travel blog displaying countries/hikes/restaurants from local JSON</li>
  <li>Developed random picker, image galleries with modals/carousels, and custom mobile-first UI with CSS animations</li>
  <li>Managed full dev lifecycle: Git version control + automated GitHub Pages deployment</li>
</ul>


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
  <li>Deploy base project
    <ul>
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
  </li>
  <li>Update css for desktop and mobile sizes.</li>
  <li>Code Header section.</li>
  <li>Code Footer section.</li>
  <li>Code Intro section.</li>
  <li>Create models for highlight, restaurant, and hike.</li>
  <li>Code Recent Highlights section. 
    <ul>
      <li>Create cards to display highlight data.</li>
      <li>Create clickable modal to display images and highlight details.</li>    
    </ul>
  </li>
  <li>Code Timeline section.
    <ul>
      <li>Create cards to display highlight data for timeline.</li>
      <li>Create clickable modal to display images and highlight details.</li>
      <li>Create Month/Year scroller to easily navigate through timeline.</li>
    </ul>
  </li>
  <li>Code Restaurants section.
    <ul>
      <li>Create cards to display top 4 restaurants data.</li>
      <li>Create random generator component to select randomly from restaurant json data and display list of restaurant data.<li> 
    </ul>
  </li>
  <li>Code Hikes section.
    <ul>
      <li>Create card to display top hike data.</li>
      <li>Create cards to display hiking data.</li>
      <li>Use random generator component to select randomly from hike json data and display list of hike data.<li> 
    </ul>
  </li>
  <li></li>
</ul>
