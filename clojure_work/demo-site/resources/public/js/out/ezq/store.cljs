(ns ezq.store
  (:require [cljs.reader :as r]))

(defn store
  "Save the given application state in HTML5 localstorage"
  [state]
  (.setItem js/localStorage "app.data" (str state)))

(defn ^:export load
  "Load the application state from HTML5 localstorage, nil if it doesn't exist"
  []
  (when-let [s (.getItem js/localStorage "app.data")]
    (r/read-string s)))

(defn init-persistence
  "Given an application, watch it for changes and persist via localstorage"
  [app]
  (add-watch (:state app) :persistence
             (fn [_ _ _ new-state] (store new-state))))

