dev:
	lein figwheel dev

clean:
	lein cljsbuild clean

www: www/ezq.min.js www/style.css

www/ezq.min.js: $(shell find src -name '*.cljs') project.clj
	lein cljsbuild once www

www/%.css: resources/public/css/%.css
	@mkdir -p $(@D)
	cp $< $@
