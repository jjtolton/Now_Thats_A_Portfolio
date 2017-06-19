(defproject ezq "0.1.0-SNAPSHOT"
  :description "Quick start for quiescent"
  ;:url "https://github.com/HiImJayHireMe"
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[bidi "2.0.16"]
                 [binaryage/dirac "1.2.4" :exclusions [org.clojure/tools.nrepl org.clojure/tools.reader]]
                 [ch.qos.logback/logback-classic "1.1.8"]
                 [cljs-http "0.1.42" :exclusions [org.clojure/clojure org.clojure/data.priority-map org.clojure/tools.reader]]
                 [com.cognitect/transit-clj "0.8.297"]
                 [com.cognitect/transit-cljs "0.8.239"]
                 [com.facebook/react "0.11.2"]
                 [compojure "1.5.1"]
                 [environ "1.1.0"]
                 [figwheel-sidecar "0.5.8" :exclusions [com.stuartsierra/component]]
                 [http-kit "2.2.0"]
                 [io.rkn/conformity "0.4.0"]
                 [noencore "0.3.3" :exclusions [org.clojure/clojure]]
                 [org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.518"]
                 [org.clojure/core.async "0.3.442" :exclusions [org.clojure/clojure org.clojure/tools.reader]]
                 [org.clojure/core.match "0.3.0-alpha4"]
                 [org.clojure/tools.reader "1.0.0-beta3"]
                 [org.webjars/bootstrap "3.3.5"]
                 [posh "0.5.5"]
                 [prismatic/schema "1.1.3"]
                 [quiescent "0.3.2" :exclusions [org.mozilla/rhino org.clojure/google-closure-library-third-party org.clojure/clojure org.clojure/tools.reader com.google.javascript/closure-compiler org.clojure/google-closure-library org.clojure/clojurescript org.clojure/data.json]]
                 [re-com "0.8.3"]
                 [reagent "0.6.0" :exclusions [cljsjs/react-dom cljsjs/react]]
                 [ring/ring-core "1.5.0" :exclusions [commons-codec]]
                 [ring/ring-defaults "0.2.1"]
                 [sablono "0.2.22"]
                 [slingshot "0.12.2"]
                 [testdouble/clojurescript.csv "0.2.0"]]

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
                        :compiler     {:output-to     "resources/public/js/ezq.min.js"
                                       :optimizations :advanced
                                       :pretty-print  false
                                       ;:preamble      ["react/react.min.js"]
                                       ;:externs       ["react/externs/react.js"]
                                       }}]}
  :figwheel {
             :http-server-root "public"                     ;; default and assumes "resources"
             :server-port      3449                         ;; default
             :css-dirs         ["public/resources/css"]})   ;; watch and update CSS

