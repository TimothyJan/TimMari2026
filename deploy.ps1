# Simple Angular GitHub Pages Deployment Script

Write-Host "Starting Angular deployment to GitHub Pages..." -ForegroundColor Cyan

# Clean up
Write-Host "Cleaning up..." -ForegroundColor Yellow
if (Test-Path "docs") { Remove-Item -Path "docs" -Recurse -Force }
if (Test-Path "dist") { Remove-Item -Path "dist" -Recurse -Force }

# Build
Write-Host "Building Angular app..." -ForegroundColor Yellow
npx ng build --configuration=production --base-href="/TimMari2026/"

# Check if files are in browser subfolder
Write-Host "Checking build structure..." -ForegroundColor Yellow
if (Test-Path "docs\browser") {
    Write-Host "Fixing folder structure..." -ForegroundColor Magenta
    Move-Item -Path "docs\browser\*" -Destination "docs\" -Force
    Remove-Item -Path "docs\browser" -Recurse -Force
}

# Show what was built
Write-Host "Build output:" -ForegroundColor Green
dir docs

# Deploy
Write-Host "Deploying to GitHub Pages..." -ForegroundColor Yellow
npx angular-cli-ghpages --dir=docs --no-silent

Write-Host "Done!" -ForegroundColor Green
Write-Host "Site: https://timothyjan.github.io/TimMari2026/" -ForegroundColor Cyan
