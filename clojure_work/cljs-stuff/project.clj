(defproject ezq "0.1.0-SNAPSHOT"
  :description "Quick start for quiescent"
  ;:url "https://github.com/HiImJayHireMe"
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.229"]
                 [org.clojure/core.async "0.3.442"
                  :exclusions [org.clojure/tools.reader]]
                 [cljs-http "0.1.42"]
                 [com.facebook/react "0.11.2"]
                 [sablono "0.2.22"]
                 [org.clojure/core.async "0.3.442" :exclusions [org.clojure/clojure org.clojure/tools.reader]]
                 [cljs-http "0.1.42" :exclusions [org.clojure/clojure org.clojure/data.priority-map org.clojure/tools.reader]]
                 [quiescent "0.3.2" :exclusions [org.mozilla/rhino org.clojure/google-closure-library-third-party org.clojure/clojure org.clojure/tools.reader com.google.javascript/closure-compiler org.clojure/google-closure-library org.clojure/clojurescript org.clojure/data.json]]
                 [org.clojure/core.async "0.3.442"]
                 [noencore "0.3.3" :exclusions [org.clojure/clojure]]]

  :plugins [[lein-figwheel "0.5.10"]
            [lein-cljsbuild "1.1.5" :exclusions [[org.clojure/clojure]]]]

  :source-paths ["src"]
  :profiles {:dev {:dependencies [[figwheel "0.5.10"]
                                  [figwheel-sidecar "0.5.8"]]
                   :plugins      [[lein-figwheel "0.5.10"]
                                  [lein-cljsbuild "1.1.5" :exclusions [[org.clojure/clojure]]]
                                  [lein-create-template "0.2.0"]]}}


  :cljsbuild {
              :builds [{:id           "dev"
                        :source-paths ["src"]
                        :compiler     {:output-to     "resources/public/js/ezq.js"
                                       :output-dir    "resources/public/js/out"
                                       :optimizations :none
                                       :source-map    true}}
                       {:id           "www"
                        :source-paths ["src"]
                        :compiler     {:output-to     "www/ezq.min.js"
                                       :optimizations :advanced
                                       :pretty-print  false
                                       :preamble      ["react/react.min.js"]
                                       :externs       ["react/externs/react.js"]}}]}
  :figwheel {
             :http-server-root "public"                     ;; default and assumes "resources"
             :server-port      3449                         ;; default
             :css-dirs         ["public/resources/css"]     ;; watch and update CSS
             })
