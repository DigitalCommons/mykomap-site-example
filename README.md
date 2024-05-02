# NAME

mykomap-site-example

# SYNOPSIS

This is a demonstration/pilot project showing how to use the [`mykomap`][1] package.

[1]: https://github.com/DigitalCommons/mykomap

For details of how to do that, see the `mykomap` project's own
documentation. This is merely a supplementary example, which you can
use to base new projects on.

# New Map Creation

The following documents the creation a new MykoMap instance, and assumes the existence of the correct Linux / WSL environment.

## Setting up your new map repo

- Clone the mykomap-site-example to your local directory and create a new folder for your MykoMap instance <br/>
```
git clone --depth 1 git@github.com:DigitalCommons/mykomap-site-example.git my-new-mykomap
```
- Navigate to mykomap-site-example directory <br/>
```
cd mykomap-site-example
```
- Remove old Git history and configerations <br/>
```
rm -rf .git
```
- Start fresh with a clean Git repo <br/>
```
git init
```
- Add and commit files to the new repo<br/>
```
git add -A
git commit -m "initial commit"
```
- Optional step - rename local master branch to main: <br/>
```
git branch -m master main
```
- Create new remote repository \* <br/>
\*This step can be carried out earlier in the process, if desired
<br/>

- Set the remote origin to your new repo and push to main:
```
git remote add origin git@github.com:DigitalCommons/my-new-mykomap
git push --set-upstream origin/main
```
- Create a development branch: <br />
```
git checkout –b development
```

## Configuring your local map

- Within the main directory of your new MykoMap instance create a config directory: <br />
  `mkdir config` <br/>
  or if you have VS Code open, just create a new folder
- Update the config file with the src folder
  - Update the baseCoopUri and basePlaceUri eg: <br />
    https://dev.lod.coop/my-new-mykomap/coop/ <br/>
    https://dev.lod.coop/my-new-mykomap/place/
  - Update the mapping in the `rowToObj` transformation object, to match those of your data source, adding your own custom fields where necessary, (uri, name, lat and lang are required)
  - Add your custom fields to the field definitions
  - Update the `ConfigData object`, entering the correct values for `namedDataset, htmlTile, filterableFields and searchableFields`. If your map’s vocabs do not conform to `ESSGLOBAL` or have not been confirmed, a local vocabs document can be added to the codebase’s www folder, based on the values of your data sources `filterableFields`. The abbreviated vocabs.json used in the Mesopotamia map instance is included below as an example.
  - As with the vocabularies, if do not have a remote date file one can be added to the www folder and referenced locally in the `dataSources` object.
- Start your local server and fire up you local MykoMap instance: <br/>
  `npm run build; npm run server`
