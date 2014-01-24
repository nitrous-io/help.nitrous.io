---
layout: article
title: Creating a New Package for Autoparts
published: true
---

### Creating the Package

In order to create a new package you will need to provide the following information when creating a pull request:

* Package Name
* Version
* Description
* Source URL (official release source which package will always be located at)
* Filetype (the extension of the file)
* SHA-1 hash (hash should be available on same page as package. If not you can [generate](http://hash.online-convert.com/sha1-generator) a SHA-1 hash with the source file)
* Compile / Installation commands

Let's take a look at a previous example within the [Github repo](https://github.com/action-io/autoparts/blob/master/lib/autoparts/packages/tig.rb). 

    module Autoparts
      module Packages
        class Tig < Package
          name 'tig'
          version '1.2.1'
          description 'Tig: An ncurses-based text-mode interface for git'
          source_url 'http://jonas.nitro.dk/tig/releases/tig-1.2.1.tar.gz'
          source_sha1 '5755bae7342debf94ef33973e0eaff6207e623dc'
          source_filetype 'tar.gz'
    
          def compile
            Dir.chdir(name_with_version) do
              args = [
                "--prefix=#{prefix_path}",
                "--sysconfdir=#{Path.etc}"
              ]
              execute './configure', *args
            end
          end
    
          def install
            Dir.chdir(name_with_version) do
              bin_path.mkpath
              execute 'make install'
            end
          end
        end
      end
    end

#### File Layout

For a new package to be created, a Ruby file will need to reflect this layout with all the fields previously mentioned along with an `install` method. 

#### Items to note:

* A compile method may not be needed depending on the package.
* The install method (and compile method if needed) should include all console commands needed to install the package on Ubuntu 12.04.

### Submitting the Package

To submit a package, create a [pull request](https://help.github.com/articles/creating-a-pull-request) on the [Github repo](https://github.com/action-io/autoparts). This pull request should include only a new `*.rb` file within `autoparts/lib/autoparts/packages`, or a modified file if you are updating a version of an existing package. The pull request may be submitted on the master branch or a separate branch.