# _plugins/custom_404.rb
Jekyll::Hooks.register :site, :post_render do |site|
    site.static_files << Jekyll::StaticFile.new(site, site.source, "/", "404.html")
  end
  